<script setup lang="ts">
import { watch, Ref, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import { useMetadataStore } from '@/stores/metadata.store'
import { formatDate } from '@/services/common/formatting.utils'
import { layerMetadataService } from '@/services/layer-metadata/layer-metadata.service'
import { LayerMetadataModel } from '@/services/layer-metadata/layer-metadata.model'
import ModalDialog from '@/components/common/modal-dialog.vue'
import LegendItem from '@/components/legends/legend-item.vue'

import LayerMetadataItem from './layer-metadata-item.vue'

const metadataStore = useMetadataStore()
const { metadataLayer } = storeToRefs(metadataStore)
const { t, i18next } = useTranslation()
const layerMetadata: Ref<LayerMetadataModel | undefined> = ref()
const displayFullDescription: Ref<boolean> = ref(true)
const MAX_DESCRIPTION_LENGTH = 220

watch(metadataLayer, async layer => {
  layerMetadata.value = layer
    ? await layerMetadataService.getLayerMetadata(layer.id, i18next.language)
    : undefined
  displayFullDescription.value =
    (layerMetadata.value?.description?.length || 0) < MAX_DESCRIPTION_LENGTH
})

watch(
  () => i18next.language,
  async language => {
    if (metadataLayer.value) {
      layerMetadata.value = await layerMetadataService.getLayerMetadata(
        metadataLayer.value.id,
        language
      )
    }
  }
)

const description = computed(() =>
  displayFullDescription.value
    ? layerMetadata.value?.description
    : layerMetadata.value?.description?.slice(0, MAX_DESCRIPTION_LENGTH)
)

type ApiLink = {
  label: string
  url: string
  serviceLabel: string
  description?: string
}

type ParsedLink = {
  label: string
  url: string
  serviceType: string
  description?: string
}

const parsedLinks = computed<ParsedLink[]>(() => {
  const links = layerMetadata.value?.link ?? []

  return links
    .map(rawLink => {
      const [labelPart = '', rest = ''] = rawLink.split('||')
      if (!rest.includes('|')) {
        return undefined
      }

      const firstPipeIndex = rest.indexOf('|')
      const url = rest.slice(0, firstPipeIndex).trim()
      const afterUrl = rest.slice(firstPipeIndex + 1)
      const secondPipeIndex = afterUrl.indexOf('|')
      const serviceType =
        secondPipeIndex === -1
          ? afterUrl.trim()
          : afterUrl.slice(0, secondPipeIndex).trim()
      const description =
        secondPipeIndex === -1
          ? undefined
          : afterUrl.slice(secondPipeIndex + 1).trim() || undefined

      if (!url || !serviceType) {
        return undefined
      }

      return {
        label: labelPart.trim(),
        url,
        serviceType,
        description,
      }
    })
    .filter((link): link is NonNullable<typeof link> => Boolean(link))
})

const apiLinks = computed<ApiLink[]>(() =>
  parsedLinks.value
    .filter(link => link.serviceType !== 'WWW:LINK-1.0-http--link')
    .map(link => ({
      label: link.label,
      url: link.url,
      serviceLabel: link.serviceType.includes('OGC API')
        ? 'OGC:API'
        : link.serviceType.includes('WMS')
          ? 'WMS'
          : link.serviceType,
      description: link.description,
    }))
)

const resourceLinks = computed<ParsedLink[]>(() =>
  parsedLinks.value.filter(
    link => link.serviceType === 'WWW:LINK-1.0-http--link'
  )
)

function showFullDescription() {
  displayFullDescription.value = true
}

function hideFullDescription() {
  displayFullDescription.value = false
}

function closeLayerMetadata() {
  metadataStore.clearMetadataLayer()
}
</script>

<template>
  <ModalDialog
    v-if="layerMetadata"
    :footer="false"
    :max-height="true"
    :title="t(`${layerMetadata.title}`, { ns: 'layers' })"
    @close="closeLayerMetadata"
  >
    <template v-slot:content>
      <div
        data-cy="metadata"
        class="grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words"
      >
        <!-- Layer name -->
        <layer-metadata-item
          v-if="layerMetadata.name"
          :label="t('Name')"
          :value="layerMetadata.name"
        ></layer-metadata-item>

        <!-- Service Description -->
        <layer-metadata-item
          v-if="layerMetadata.serviceDescription"
          :label="t('Description du Service')"
          :value="layerMetadata.serviceDescription"
        ></layer-metadata-item>

        <!-- Description -->
        <div
          v-if="layerMetadata.description"
          class="col-span-3 grid gap-2 grid-cols-3"
        >
          <span class="font-bold">{{ t('Description') }}</span>
          <span class="col-span-2">
            <span v-dompurify-html="description"></span>
            <button
              :title="
                t('Display full description', {
                  ns: 'app',
                })
              "
              v-if="!displayFullDescription"
              @click="showFullDescription"
              class="text-secondary hover:underline"
            >
              ...
            </button>
            <button
              :title="
                t('Hide full description', {
                  ns: 'app',
                })
              "
              v-if="
                displayFullDescription &&
                (description?.length || 0) > MAX_DESCRIPTION_LENGTH
              "
              @click="hideFullDescription"
              class="text-secondary hover:underline"
            >
              -
            </button>
          </span>
        </div>

        <!-- Legal -->
        <layer-metadata-item
          v-if="layerMetadata.legalConstraints"
          :label="t(`Contrainte d'utilisation`)"
          :value="layerMetadata.legalConstraints"
        ></layer-metadata-item>

        <!-- API -->
        <div class="col-span-3 grid gap-2 grid-cols-3" v-if="apiLinks.length">
          <span class="font-bold">{{ t('API') }}</span>
          <div class="col-span-2 space-y-2">
            <div
              class="flex items-start gap-3"
              v-for="link in apiLinks"
              :key="link.url + link.serviceLabel"
            >
              <span
                class="inline-flex flex-col items-center justify-center rounded bg-gray-100 px-2 py-1 text-[10px] leading-tight text-gray-700"
              >
                <i class="fa fa-globe"></i>
                <span>{{ link.serviceLabel }}</span>
              </span>
              <span>
                <a
                  v-if="link.label"
                  class="text-secondary hover:underline"
                  target="_blank"
                  :href="link.url"
                >
                  {{ link.label }}
                </a>
                <span v-else>{{ link.url }}</span>
                <span
                  v-if="link.description"
                  class="block text-xs text-gray-500 mt-0.5"
                  >{{ link.description }}</span
                >
              </span>
            </div>
          </div>
        </div>

        <!-- Resources -->
        <div class="col-span-3" v-if="resourceLinks.length">
          <div
            class="grid gap-2 grid-cols-3"
            v-for="link in resourceLinks"
            :key="link.url"
          >
            <span class="font-bold">{{ t('Url vers la resource') }}</span>
            <span class="col-span-2">
              <a
                v-if="link.label"
                class="text-secondary hover:underline"
                target="_blank"
                :href="link.url"
              >
                {{ link.label }}
              </a>
              <span v-else>{{ link.url }}</span>
              <span
                v-if="link.description"
                class="block text-xs text-gray-500 mt-0.5"
                >{{ link.description }}</span
              >
            </span>
          </div>
        </div>

        <!-- Revision date -->
        <layer-metadata-item
          v-if="layerMetadata.revisionDate"
          :label="t('Revision date')"
          :value="formatDate(layerMetadata.revisionDate, i18next.language)"
        ></layer-metadata-item>

        <!-- Keywords -->
        <layer-metadata-item
          v-if="layerMetadata.keyword"
          :label="t('Keywords')"
          :value="layerMetadata.keyword?.join(',')"
        ></layer-metadata-item>

        <!-- Contact -->
        <div
          class="col-span-3 grid gap-2 grid-cols-3"
          v-if="layerMetadata.responsibleParty"
        >
          <div class="font-bold">{{ t('Contact') }}</div>
          <div class="col-span-2">
            <p v-if="layerMetadata.responsibleParty?.organisaton">
              {{ layerMetadata.responsibleParty?.organisaton }}
            </p>
            <p v-if="layerMetadata.responsibleParty?.name">
              {{ layerMetadata.responsibleParty?.name }}
            </p>
            <p v-if="layerMetadata.responsibleParty?.unknown">
              {{ layerMetadata.responsibleParty?.unknown }}
            </p>
            <p v-if="layerMetadata.responsibleParty?.address">
              {{ layerMetadata.responsibleParty?.address }}
            </p>
            <p v-if="layerMetadata.responsibleParty?.email">
              <a
                class="text-secondary hover:underline"
                :href="'mailto:' + layerMetadata.responsibleParty?.email"
                >{{ layerMetadata.responsibleParty?.email }}</a
              >
            </p>
          </div>
        </div>

        <!-- Link -->
        <div
          class="grid gap-2 grid-cols-3 col-span-3"
          v-if="layerMetadata.metadataLink"
        >
          <span class="font-bold">{{ t('Link to the metadata') }}</span>
          <span class="col-span-2">
            <a
              class="text-secondary hover:underline"
              target="_blank"
              :href="layerMetadata.metadataLink"
              >{{ t('lien vers le geocatalogue') }}</a
            >
          </span>
        </div>

        <!-- Error, could not retrieve metadata -->
        <div v-if="layerMetadata.isError" class="col-span-3">
          {{ t('The metadata is right now not available') }}
        </div>

        <!-- Legend -->
        <legend-item
          v-else-if="metadataLayer"
          class="mt-5 col-span-3"
          :layer="metadataLayer"
          :displayEmptyLegend="true"
        >
          <template #title>
            <h4>{{ t('Legend') }}</h4>
          </template>
        </legend-item>
      </div>
    </template>
  </ModalDialog>
</template>
