<script setup lang="ts">
import { inject } from 'vue'
import { useTranslation } from 'i18next-vue'
import { Feature } from 'ol'
import { Geometry } from 'ol/geom'

import { type MenuPopupItem as MenuPopupItemType } from '@/components/common/menu-popup/menu-popup.d'
import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import { DrawnFeature } from '@/services/draw/drawn-feature'
import {
  exportFeatureService,
  TFeatExport,
  type exportFormat,
} from '@/services/export-feature/export-feature.service'

const { t } = useTranslation()
const feature: DrawnFeature = inject('feature')!

function download(format: exportFormat) {
  exportFeatureService.export(
    feature.map,
    format,
    <TFeatExport>[<Feature<Geometry>>feature],
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
        action: () =>
          alert(
            'TODO: Continuer la ligne (!!!ne pas oublier de unset profileData)'
          ),
      },
      {
        label: 'Changer sens de la ligne',
        action: () => alert('TODO: Draw feature click drawingMenuOptions'),
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
        action: () => alert('TODO: Draw feature click drawingMenuOptions'),
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
