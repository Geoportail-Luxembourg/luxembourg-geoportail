<script setup lang="ts">
import { defineProps } from 'vue'
import DefaultTemplate from '@/components/info/templates/default-template.vue'
import LignesBusTemplate from './templates/lignes-bus-template.vue'
import { FeatureInfoJSON } from './feature-info.model'

defineProps({
  content: {
    type: Array as () => FeatureInfoJSON[],
    required: true,
  },
})

const getTemplateComponent = (template: string) => {
  switch (template) {
    case 'default.html':
      return DefaultTemplate
    case 'lignes_bus.html':
      return LignesBusTemplate
    default:
      return 'div'
  }
}
</script>
<template>
  <div class="layer-info-content printable">
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

    <div>
      <!--ng-repeat="layers in ctrl.content"-->
      <div v-if="content && content.length">
        <component
          v-for="(layers, index) in content"
          :key="index"
          :is="getTemplateComponent(layers.template)"
          :layers="layers"
        />
      </div>
    </div>
  </div>
</template>
