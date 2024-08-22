<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import { type MenuPopupItem as MenuPopupItemType } from '@/components/common/menu-popup/menu-popup.d'
import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import { DrawFeature } from '@/stores/draw.store.model'

const props = defineProps<{
  feature: DrawFeature
}>()
const { t } = useTranslation()

let drawingMenuOptions = <MenuPopupItemType[]>[
  {
    label: 'Exporter un GPX',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
  {
    label: 'Exporter un KML',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
  {
    label: 'Exporter un Shapefile',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
]

if (props.feature.geom === 'LineString') {
  drawingMenuOptions = [
    ...drawingMenuOptions,
    ...[
      {
        label: 'Continuer la ligne',
        action: () => alert('TODO: Draw feature click drawingMenuOptions'),
      },
      {
        label: 'Changer sens de la ligne',
        action: () => alert('TODO: Draw feature click drawingMenuOptions'),
      },
    ],
  ]
}

if (props.feature.geom === 'Circle') {
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
    :items="drawingMenuOptions"
    :direction="'up'"
    :ariaLabel="t('Drawings menu')"
  >
    <!-- Button to open the menu -->
    <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
    <!-- Loop through items for the menu -->
    <template #item="{ item }">
      <MenuPopupItem :item="item" @click="() => item.action && item.action()">
        {{ t(item.label) }}
      </MenuPopupItem>
    </template>
  </MenuPopup>
</template>
