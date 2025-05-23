<script setup lang="ts">
import { onUnmounted, VNodeRef } from 'vue'
import { storeToRefs } from 'pinia'
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import GeoJSON from 'ol/format/GeoJSON'
import DefaultTemplate from '@/components/info/templates/default-template.vue'
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { featureInfoLayerService } from '@/services/info/feature-info-layer.service'
import {
  exportFeatureService,
  ExportFormat,
  FeatExport,
} from '@/services/export-feature/export-feature.service'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'
import { usePrintStore } from '@/stores/print.store'
import MymapsTemplate from './templates/mymaps-template.vue'
import LignesBusTemplate from './templates/lignes-bus-template.vue'

defineProps({
  content: {
    type: Array as () => FeatureInfoJSON[],
    required: true,
  },
})
defineEmits<{
  (e: 'export', payload: { feature: FeatureJSON; format: 'kml' | 'gpx' }): void
}>()
const map = useMap().getOlMap()

// For print, save ref to element to access content in print composable
const { featureInfoPrintableRef } = storeToRefs(usePrintStore())
const setPrintableRef = (el: VNodeRef | undefined) => {
  return (featureInfoPrintableRef.value = el)
}

onUnmounted(() => featureInfoLayerService.clearFeatures())

function getTemplateComponent(template: string) {
  switch (template) {
    case 'mymaps.html':
      return MymapsTemplate
    case 'lignes_bus.html':
      return LignesBusTemplate
    case 'default.html':
    default:
      return DefaultTemplate
  }
}

function onExport(payload: { feature: FeatureJSON; format: ExportFormat }) {
  if (payload.feature.attributes && !payload.feature.properties) {
    payload.feature.properties = payload.feature
      .attributes as unknown as Record<string, unknown>
  }
  const olFeature = new GeoJSON().readFeature(payload.feature, {
    dataProjection: PROJECTION_LUX,
    featureProjection: map.getView().getProjection(),
  })
  exportFeatureService.export(
    map,
    payload.format,
    <FeatExport>[<Feature<Geometry>>olFeature],
    payload.feature.attributes.name || payload.format,
    true
  )
}
</script>
<template>
  <!-- TODO: migrate modal-->
  <!-- <ngeo-modal ng-model="ctrl.preview">
  <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title" translate>Prévisualisation du mesurage</h4>
  </div>
  <div class="modal-body" style="overflow: auto;max-height:500px;">
  <p  ng-if="!ctrl.isDownloadable" class="alert" translate>Pour des raisons de protection de données, nous ne pouvons pas afficher les documents de la mensuration officielle en résolution complète, par contre vous avez la possibilité de les commander de manière individuelle et traçable</p>
  <img ng-if="ctrl.preview" ng-if="ctrl.getPreviewUrl()" ng-src="{{ctrl.getPreviewUrl()}}"/>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal" translate>Annuler</button>
    <a ng-if="!ctrl.isDownloadable" class="btn btn-default"  href="https://commande.geoportail.lu?&camefrom=mapv3&lang={{ctrl['language']}}&documents=MESURAGE;EXTRAIT_MIXTE&ids=['{{ctrl['previewParcelId']}}']&remark={{ctrl['previewDescription']}}" target="_blank" translate>Commander</a>
    <a ng-if="ctrl.isDownloadable" class="btn btn-default"  href="{{ctrl.getDownloadMeasurementUrl()}}?document_id={{ctrl.previewDocumentId}}" target="_blank" translate>Télécharger</a>
  </div>
  </ngeo-modal> -->

  <!-- absolute is needed here to make y overflow scroll on long content -->
  <div
    :ref="setPrintableRef"
    v-if="content && content.length"
    class="absolute w-11/12"
  >
    <component
      v-for="(layers, index) in content"
      :key="index"
      :is="getTemplateComponent(layers.template)"
      :layers="layers"
      @export="onExport"
    />
  </div>
</template>
