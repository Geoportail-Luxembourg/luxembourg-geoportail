<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'

defineProps({
  layers: {
    type: Object as () => FeatureInfoJSON,
    required: true,
  },
})
defineEmits<{
  (e: 'export', payload: unknown): void // TS compatibilty with parent feature-info @export
}>()
</script>
<template>
  <h1>{{ layers.layerLabel }}</h1>
  <!-- | translate}}</h1> -->
  <!-- <table>
    <tr>
      <th translate>Num ligne</th>
      <th translate>Description</th>
    </tr>
    {{
      feature.attributes.category_id
    }}
    <tr
      ng-repeat="feature in layers.features | orderBy: 'attributes.label'"
      class="poi-feature"
    >
      <td ng-if="(feature.attributes.category_id == 404)">
        <a
          class="fid-link no-print"
          href="https://www.mobiliteit.lu/fr/horaires-et-lignes/tram/"
          target="_blank"
          >{{ feature.attributes.label }}</a
        >
      </td>
      <td ng-if="(feature.attributes.category_id == 403)">
        <a
          class="fid-link no-print"
          href="https://www.mobiliteit.lu/fr/horaires-et-lignes/trains/"
          target="_blank"
          >{{ feature.attributes.label }}</a
        >
      </td>
      <td ng-if="(feature.attributes.category_id < 403)">
        <a
          class="fid-link no-print"
          href="https://www.mobiliteit.lu/fr/ligne/bus-{{feature.attributes.label}}-{{ (feature.attributes.category_id == 400) ? 'avl' : (feature.attributes.category_id == 401) ? 'rgtr' : 'tice' }}"
          target="_blank"
          >{{ feature.attributes.label }}</a
        >
      </td>
      <td>
        <a
          class="fid-link no-print"
          href="?map_id={{feature.attributes.map_id}}"
          target="_blank"
          >{{ feature.attributes.map_description }}</a
        >
      </td>
    </tr>
  </table> -->
</template>
