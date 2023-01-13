<script setup lang="ts">
import { LayerMetadataModel } from '@/composables/layer-metadata/layer-metadata.model'
import { useTranslation } from 'i18next-vue'
import LayerMetadataItem from './layer-metadata-item.vue'

const { t } = useTranslation()

defineProps<{
  layerMetadata: LayerMetadataModel
}>()
const emit = defineEmits<{
  (e: 'closeLayerMetadata'): void
}>()
function closeLayerMetadata() {
  emit('closeLayerMetadata')
}
</script>

<template>
  <div
    class="fixed right-32 top-32 z-[100] bg-white lux-modal w-[600px] p-3"
    role="dialog"
  >
    <div class="lux-modal-header flex flex-row justify-between">
      <h1>{{ t(`${layerMetadata.title}`) }}</h1>
      <button @click="closeLayerMetadata">X</button>
    </div>
    <div class="pt-3">
      <dl>
        <layer-metadata-item
          :label="t('Name')"
          :value="t(`${layerMetadata.name}`)"
        ></layer-metadata-item>
        <layer-metadata-item
          :label="t('Description du Service')"
          :value="t(`${layerMetadata.serviceDescription}`)"
        ></layer-metadata-item>
        <!--short_trusted_description || trusted_description-->
        <layer-metadata-item
          :label="t('Description')"
          :value="t(`${layerMetadata.description}`)"
        ></layer-metadata-item>
        <layer-metadata-item
          :label="t(`Contrainte d'utilisation`)"
          :value="t(`${layerMetadata.legalConstraints}`)"
        ></layer-metadata-item>
        <layer-metadata-item
          :label="t('Url vers la resource')"
          :value="t(`${layerMetadata.link?.join(',')}`)"
        ></layer-metadata-item>
        <layer-metadata-item
          :label="t('Keywords')"
          :value="t(`${layerMetadata.keyword?.join(',')}`)"
        ></layer-metadata-item>
        <layer-metadata-item
          :label="t('Contact')"
          :value="t(`${layerMetadata.responsibleParty?.join(',')}`)"
        ></layer-metadata-item>
        <!--{{content.geonetworkBaseUrl}}/fre/catalog.search#/metadata/{{content.uid}}-->
        <layer-metadata-item
          :label="t('Link to the metadata')"
          :value="t(`${layerMetadata.metadataLink}`)"
        ></layer-metadata-item>
        <layer-metadata-item
          :label="t('The metadata is right now not available')"
          :value="t(`${layerMetadata.isError}`)"
        ></layer-metadata-item>
      </dl>
    </div>
  </div>
</template>
