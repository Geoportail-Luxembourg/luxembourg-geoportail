<script setup lang="ts">
import { formatDate } from '@/services/common/formatting.utils'
import { useTranslation } from 'i18next-vue'
import LayerMetadataItem from './layer-metadata-item.vue'
import { useMetadataStore } from '@/stores/metadata.store'
import { storeToRefs } from 'pinia'
import { watch, Ref, ref, onMounted, computed } from 'vue'
import { layerMetadataService } from '@/services/layer-metadata/layer-metadata.service'
import { LayerMetadataModel } from '@/services/layer-metadata/layer-metadata.model'
import ModalDialog from '@/components/common/modal-dialog.vue'

const metadataStore = useMetadataStore()
const { metadataId } = storeToRefs(metadataStore)
const { t, i18next } = useTranslation()
const layerMetadata: Ref<LayerMetadataModel | undefined> = ref()
const displayFullDescription: Ref<boolean> = ref(true)
const MAX_DESCRIPTION_LENGTH = 220

watch(metadataId, async id => {
  layerMetadata.value = id
    ? await layerMetadataService.getLayerMetadata(id, i18next.language)
    : undefined
  displayFullDescription.value =
    (layerMetadata.value?.description?.length || 0) < MAX_DESCRIPTION_LENGTH
})

onMounted(() => {
  i18next.on('languageChanged', async () => {
    if (metadataId.value) {
      layerMetadata.value = await layerMetadataService.getLayerMetadata(
        metadataId.value,
        i18next.language
      )
    }
  })
})

const description = computed(() =>
  displayFullDescription.value
    ? layerMetadata.value?.description
    : layerMetadata.value?.description?.slice(0, MAX_DESCRIPTION_LENGTH)
)

function showFullDescription() {
  displayFullDescription.value = true
}

function hideFullDescription() {
  displayFullDescription.value = false
}

function closeLayerMetadata() {
  metadataStore.clearMetadataId()
}
</script>

<template>
  <ModalDialog
    v-if="layerMetadata"
    :footer="false"
    :max-height="true"
    :title="t(`${layerMetadata.title}`, { ns: 'client' })"
    @close="closeLayerMetadata"
  >
    <template v-slot:content>
      <div
        class="lux grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial break-words"
      >
        <layer-metadata-item
          v-if="layerMetadata.name"
          :label="t('Name')"
          :value="layerMetadata.name"
        ></layer-metadata-item>
        <layer-metadata-item
          v-if="layerMetadata.serviceDescription"
          :label="t('Description du Service')"
          :value="layerMetadata.serviceDescription"
        ></layer-metadata-item>
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
                  ns: 'client',
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
                  ns: 'client',
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
        <layer-metadata-item
          v-if="layerMetadata.legalConstraints"
          :label="t(`Contrainte d'utilisation`)"
          :value="layerMetadata.legalConstraints"
        ></layer-metadata-item>
        <div class="col-span-3" v-if="layerMetadata.link?.length !== 0">
          <div
            class="grid gap-2 grid-cols-3"
            v-for="link in layerMetadata.link"
            :key="link"
          >
            <span class="font-bold">{{ t('Url vers la resource') }}</span>
            <span class="col-span-2">
              <a
                class="text-secondary hover:underline"
                target="_blank"
                :href="link"
                >{{ link }}</a
              >
            </span>
          </div>
        </div>
        <layer-metadata-item
          v-if="layerMetadata.revisionDate"
          :label="t('Revision date')"
          :value="formatDate(layerMetadata.revisionDate, i18next.language)"
        ></layer-metadata-item>
        <layer-metadata-item
          v-if="layerMetadata.keyword"
          :label="t('Keywords')"
          :value="layerMetadata.keyword?.join(',')"
        ></layer-metadata-item>
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
              >{{ t('link') }}</a
            >
          </span>
        </div>
        <div v-if="layerMetadata.isError" class="col-span-3">
          {{ t('The metadata is right now not available') }}
        </div>
        <div v-if="layerMetadata.legendHtml">
          <h4 class="text-xl">{{ t('Legend') }}</h4>
          <span v-dompurify-html="layerMetadata.legendHtml?.innerHTML"></span>
        </div>
        <div v-if="!layerMetadata.hasLegend" class="col-span-3">
          {{ t('The legend is not available for this layer') }}
        </div>
      </div>
    </template>
  </ModalDialog>
</template>
