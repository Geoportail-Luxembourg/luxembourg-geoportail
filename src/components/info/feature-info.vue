<script setup lang="ts">
import { onUnmounted } from 'vue'
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
import AdresseTemplate from './templates/adresse-template.vue'
import AeroTemplate from './templates/aero-template.vue'
import AffairesTemplate from './templates/affaires-template.vue'
import AstaTemplate from './templates/asta-template.vue'
import AutomaticSolsTemplate from './templates/automatic-sols-template.vue'
import BatimentsTemplate from './templates/batiments-template.vue'
import BusWoTitleTemplate from './templates/bus-wo-title-template.vue'
import BusTemplate from './templates/bus-template.vue'
import DefaultTemplate from './templates/default-template.vue'
import DefaultTableTemplate from './templates/default-table-template.vue'
import LignesBusTemplate from './templates/lignes-bus-template.vue'
import PcnPagTemplate from './templates/pcn-pag-template.vue'
// import PdsTemplate from './templates/pds-template.vue'
import PdsreportTemplate from './templates/pdsreport-template.vue'
import PegelTemplate from './templates/pegel-template.vue'
// import PoiEatTemplate from './templates/poi-eat-template.vue'
// import PoiTemplate from './templates/poi-template.vue'
import RemembrementsTemplate from './templates/remembrements-template.vue'
import SentierNatureTemplate from './templates/sentier-nature-template.vue'
import UrplandTemplate from './templates/urplang-template.vue'
import VitiFlikTemplate from './templates/viti-flik.vue'
import VitiKleinlageTemplate from './templates/viti-kleinlage.vue'
import VitiNameTemplate from './templates/viti-name.vue'
import VitiParcelsTemplate from './templates/viti-parcels.vue'
import ParcelsTemplate from './templates/parcels-template.vue'
import DefaultAttachmentNoPrefixTemplate from './templates/default-attachment-no-prefix.vue'

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
  'adresse.html': AdresseTemplate,
  'aero.html': AeroTemplate,
  'affaires.html': AffairesTemplate,
  'asta_esp.html': AstaTemplate,
  'automatic_sols.html': AutomaticSolsTemplate,
  'batiments.html': BatimentsTemplate,
  'bus_wo_title.html': BusWoTitleTemplate,
  'bus.html': BusTemplate,
  'default.html': DefaultTemplate,
  'default_table.html': DefaultTableTemplate,
  'lignes_bus.html': LignesBusTemplate,
  'parcels.html': ParcelsTemplate,
  'pcn_pag.html': PcnPagTemplate,
  // 'pds.html': PdsTemplate,
  'pdsreport.html': PdsreportTemplate,
  'pegel.html': PegelTemplate,
  // 'poi-eat.html': PoiEatTemplate,
  // 'poi.html': PoiTemplate,
  'remembrements.html': RemembrementsTemplate,
  'sentier_nature.html': SentierNatureTemplate,
  'urplang.html': UrplandTemplate,
  'viti_flik.html': VitiFlikTemplate,
  'viti_kleinlage.html': VitiKleinlageTemplate,
  'viti_name.html': VitiNameTemplate,
  'viti_parcels.html': VitiParcelsTemplate,
  'default_attachment_no_prefix.html': DefaultAttachmentNoPrefixTemplate,
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
