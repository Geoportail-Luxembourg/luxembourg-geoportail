<script setup lang="ts">
import useFormatting from '@/composables/common/formatting.composable'
import { useTranslation } from 'i18next-vue'
import LayerMetadataItem from './layer-metadata-item.vue'
import { useMetadataStore } from '@/stores/metadata.store'
import { storeToRefs } from 'pinia'

const metadataStore = useMetadataStore()
const { layerMetadata } = storeToRefs(metadataStore)
const { t } = useTranslation()
const format = useFormatting()

function closeLayerMetadata() {
  metadataStore.clearMetadata()
}
</script>

<template>
  <div
    v-if="layerMetadata"
    class="fixed right-32 top-32 z-[100] bg-white lux-modal w-[600px] p-3"
    role="dialog"
  >
    <div class="lux-modal-header flex flex-row justify-between">
      <h1>{{ t(`${layerMetadata.title}`) }}</h1>
      <button @click="closeLayerMetadata">X</button>
    </div>
    <div class="grid gap-2 grid-cols-3 pt-3 text-[13px] font-arial">
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
        <span
          v-dompurify-html="layerMetadata.description"
          class="col-span-2"
        ></span>
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
        :value="format.formatDate(layerMetadata.revisionDate)"
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
        <span class="font-bold">{{ t('Contact') }}</span>
        <span class="col-span-2">
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
        </span>
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
        <h4>{{ t('Legend') }}</h4>
        <span v-dompurify-html="layerMetadata.legendHtml?.innerHTML"></span>
      </div>
      <div v-if="!layerMetadata.hasLegend" class="col-span-3">
        {{ t('The legend is not available for this layer') }}
      </div>
    </div>
  </div>
</template>
