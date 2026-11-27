<script setup lang="ts">
import { ComponentPublicInstance } from 'vue'
import { storeToRefs } from 'pinia'
import { usePrintStore } from '@/stores/print.store'
import { FeatureInfoJSON } from '@geoportallux/feature-info-templates'
import {
  provideLuxTplContext,
  getTemplateComponent,
} from '@geoportallux/feature-info-templates'
import useGeoportailLuxTplContext from '@/composables/info/lux-tpl-context.composable'

defineProps({
  content: {
    type: Array as () => FeatureInfoJSON[],
    required: true,
  },
})

// Provide the dependency-injection context the templates rely on, wiring it
// to the geoportail stores/environment (their i18n is provided app-wide).
provideLuxTplContext(useGeoportailLuxTplContext())

// For print, save ref to element to access content in print composable
const { featureInfoPrintableRef } = storeToRefs(usePrintStore())
const setPrintableRef = (el: Element | ComponentPublicInstance | null) => {
  featureInfoPrintableRef.value = el ?? undefined
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
    class="lux-tpl-root absolute w-11/12"
  >
    <component
      v-for="(layers, index) in content"
      :key="index"
      :is="getTemplateComponent(layers.template)"
      :layers="layers"
    />
  </div>
</template>
