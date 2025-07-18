<script setup lang="ts">
import { inject } from 'vue'
import { useTranslation } from 'i18next-vue'

import { type MenuPopupItem as MenuPopupItemType } from '@/components/common/menu-popup/menu-popup.d'
import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import {
  exportFeatureService,
  FeatExport,
  type ExportFormat,
} from '@/services/export-feature/export-feature.service'
import { lineChangeOrientation } from '@/composables/draw/draw-utils.composable'

const { t } = useTranslation()
const feature = inject<DrawnFeature>('feature')!
const emit = defineEmits(['newConcentricCircle', 'continueLine'])

function download(format: ExportFormat) {
  exportFeatureService.export(
    feature.map,
    format,
    <FeatExport>[<unknown>feature],
    feature.label,
    true
  )
}

let drawingMenuOptions = <MenuPopupItemType[]>[
  {
    label: 'Exporter un GPX',
    action: () => download('gpx'),
  },
  {
    label: 'Exporter un KML',
    action: () => download('kml'),
  },
  {
    label: 'Exporter un Shapefile',
    action: () => download('shapefile'),
  },
]

if (feature?.featureType === 'drawnLine') {
  drawingMenuOptions = [
    ...drawingMenuOptions,
    ...[
      {
        label: 'Continuer la ligne',
        action: () => emit('continueLine'),
      },
      {
        label: 'Changer sens de la ligne',
        action: () => lineChangeOrientation(feature),
      },
    ],
  ]
}

if (feature?.featureType === 'drawnCircle') {
  drawingMenuOptions = [
    ...drawingMenuOptions,
    ...[
      {
        label: 'Créer cercle concentrique',
        action: () => emit('newConcentricCircle'),
      },
    ],
  ]
}
</script>

<template>
  <MenuPopup
    data-cy="featMenuPopup"
    :items="drawingMenuOptions"
    :direction="'up'"
    :ariaLabel="t('Drawings menu')"
  >
    <!-- Button to open the menu -->
    <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
    <!-- Loop through items for the menu -->
    <template #item="{ item }">
      <MenuPopupItem
        data-cy="featMenuPopupItem"
        :item="item"
        @click="() => item.action && item.action()"
      >
        {{ t(item.label) }}
      </MenuPopupItem>
    </template>
  </MenuPopup>
</template>
