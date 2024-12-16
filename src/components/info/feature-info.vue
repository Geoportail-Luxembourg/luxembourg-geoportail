<script setup lang="ts">
import { defineProps, onUnmounted } from 'vue'
import DefaultTemplate from '@/components/info/templates/default-template.vue'
import LignesBusTemplate from './templates/lignes-bus-template.vue'
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
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import GeoJSON from 'ol/format/GeoJSON'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'

defineProps({
  content: {
    type: Array as () => FeatureInfoJSON[],
    required: true,
  },
})
const currentUrl = window.location.href
const map = useMap().getOlMap()

onUnmounted(() => {
  featureInfoLayerService.clearFeatures()
})

const templates = {
  'default.html': DefaultTemplate,
  'lignes_bus.html': LignesBusTemplate,
}

const getTemplateComponent = (template: string) => {
  return templates[template as keyof typeof templates] || DefaultTemplate
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
  <div v-if="content && content.length" class="absolute w-11/12">
    <component
      v-for="(layers, index) in content"
      :key="index"
      :is="getTemplateComponent(layers.template)"
      :layers="layers"
      :currentUrl="currentUrl"
      @export="onExport"
    />
  </div>
</template>
