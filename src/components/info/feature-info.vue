<script setup lang="ts">
import { VNodeRef } from 'vue'
import { storeToRefs } from 'pinia'
import { usePrintStore } from '@/stores/print.store'
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'
import GeoJSON from 'ol/format/GeoJSON'
import {
  FeatureInfoJSON,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import {
  exportFeatureService,
  ExportFormat,
  FeatExport,
} from '@/services/export-feature/export-feature.service'
import useMap, { PROJECTION_LUX } from '@/composables/map/map.composable'
import AdresseTemplate from './templates/adresse-template.vue'
import AeroTemplate from './templates/aero-template.vue'
import AffairesTemplate from './templates/affaires-template.vue'
import AstaTemplate from './templates/asta-template.vue'
import AutomaticSolsTemplate from './templates/automatic-sols-template.vue'
import BatimentsTemplate from './templates/batiments-template.vue'
import BusWoTitleTemplate from './templates/bus-wo-title-template.vue'
import BusTemplate from './templates/bus-template.vue'
import CasipoTemplate from './templates/casipo-template.vue'
import DefaultTemplate from './templates/default-template.vue'
import DefaultTableTemplate from './templates/default-table-template.vue'
import DefaultTableNoPrefixTemplate from './templates/default-table-no-prefix-template.vue'
import FlikTemplate from './templates/flik-template.vue'
import ForageVirtuelTemplate from './templates/forage-virtuel-template.vue'
import LignesBusTemplate from './templates/lignes-bus-template.vue'
import MeteoTemplate from './templates/meteo-template.vue'
import MeteoluxEuropeTemplate from './templates/meteolux-europe-template.vue'
import MeteoluxGrTemplate from './templates/meteolux-gr-template.vue'
import MymapsTemplate from './templates/mymaps-template.vue'
import MoTemplate from './templates/mo-template.vue'
import Ng95Template from './templates/ng95-template.vue'
import Ng95NewTemplate from './templates/ng95-new-template.vue'
import NpOurPoiTemplate from './templates/npour-poi-template.vue'
import NpOurWoAddressPoiTemplate from './templates/npour-wo-address-poi-template.vue'
import PcnPagTemplate from './templates/pcn-pag-template.vue'
import PagTemplate from './templates/pag-template.vue'
import PagStagingTemplate from './templates/pag-staging-template.vue'
import PdsTemplate from './templates/pds-template.vue'
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
import DefaultAttachmentNoPrefixTemplate from './templates/default-attachment-no-prefix-template.vue'
import DefaultAttachment from './templates/default-attachment-template.vue'

defineProps({
  content: {
    type: Array as () => FeatureInfoJSON[],
    required: true,
  },
})
const currentUrl = window.location.href
const map = useMap().getOlMap()

// For print, save ref to element to access content in print composable
const { featureInfoPrintableRef } = storeToRefs(usePrintStore())
const setPrintableRef = (el: VNodeRef | undefined) => {
  return (featureInfoPrintableRef.value = el)
}

const templates = {
  'adresse.html': AdresseTemplate,
  'aero.html': AeroTemplate,
  'affaires.html': AffairesTemplate,
  'asta_esp.html': AstaTemplate,
  'automatic_sols.html': AutomaticSolsTemplate,
  'batiments.html': BatimentsTemplate,
  'bus_wo_title.html': BusWoTitleTemplate,
  'bus.html': BusTemplate,
  'casipo.html': CasipoTemplate,
  'default.html': DefaultTemplate,
  'default_attachment.html': DefaultAttachment,
  'default_attachment_no_prefix.html': DefaultAttachmentNoPrefixTemplate,
  'default_table.html': DefaultTableTemplate,
  'default_table_no_prefix.html': DefaultTableNoPrefixTemplate,
  'flik.html': FlikTemplate,
  'forage_virtuel.html': ForageVirtuelTemplate,
  'lignes_bus.html': LignesBusTemplate,
  'meteo.html': MeteoTemplate,
  'meteolux_europe.html': MeteoluxEuropeTemplate,
  'meteolux_gr.html': MeteoluxGrTemplate,
  'mymaps.html': MymapsTemplate,
  'mo.html': MoTemplate,
  'ng95.html': Ng95Template,
  'ng95_new.html': Ng95NewTemplate,
  'npour_poi.html': NpOurPoiTemplate,
  'npour_poi_wo_address.html': NpOurWoAddressPoiTemplate,
  'parcels.html': ParcelsTemplate,
  'parcels_prof.html': ParcelsTemplate,
  'parcels_go.html': ParcelsTemplate,
  'pcn_pag.html': PcnPagTemplate,
  'pag.html': PagTemplate,
  'pag_staging.html': PagStagingTemplate,
  'pds.html': PdsTemplate,
  'pegel.html': PegelTemplate,
  'remembrements.html': RemembrementsTemplate,
  'sentier_nature.html': SentierNatureTemplate,
  'urplang.html': UrplandTemplate,
  'viti_flik.html': VitiFlikTemplate,
  'viti_kleinlage.html': VitiKleinlageTemplate,
  'viti_name.html': VitiNameTemplate,
  'viti_parcels.html': VitiParcelsTemplate,
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
function onExportWrapper(...args: unknown[]) {
  const [payload] = args
  onExport(payload as { feature: FeatureJSON; format: 'kml' | 'gpx' })
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
      :currentUrl="currentUrl"
      @export="onExportWrapper"
    />
  </div>
</template>
