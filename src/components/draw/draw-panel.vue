<script setup lang="ts">
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import { useDrawStore } from '@/stores/draw.store'
import { useAppStore } from '@/stores/app.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'

import DrawPanelFeatures from './draw-panel-features.vue'

const { t } = useTranslation()
const appStore = useAppStore()
const { toggleMyMapsOpen } = appStore
const { feedbackOpen, feedbackanfOpen, feedbackageOpen, feedbackcruesOpen } =
  storeToRefs(appStore)
const drawStore = useDrawStore()
const { drawnFeatures: features } = storeToRefs(drawStore)
const drawingMenuOptions = [
  {
    label: 'Copier dans ma carte',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
  {
    label: 'Effacer tous les dessins',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
  {
    label: 'Créer une nouvelle carte à partir de ces dessins',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
  {
    label: 'Fusionner des lignes',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
  {
    label: 'Couper une ligne',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
]

watch(features, () => {
  if (
    screenSizeIsAtLeast('md') &&
    feedbackOpen.value !== true &&
    feedbackanfOpen.value !== true &&
    feedbackageOpen.value !== true &&
    feedbackcruesOpen.value !== true
  ) {
    toggleMyMapsOpen(true)
  }
})
</script>

<template>
  <template v-if="features.length > 0">
    <hr class="separator my-5" />

    <!-- Title and caret dropdown menu -->
    <div class="lux-draw-panel absolute w-[93%]" data-cy="drawPanel">
      <div class="lux-draw-panel-title flex">
        <h5 class="grow">{{ t('Dessins') }}</h5>

        <!-- Dropdown menu -->
        <MenuPopup
          data-cy="drawPanelMenuPopup"
          :items="drawingMenuOptions"
          :direction="'down'"
          :ariaLabel="t('Drawings menu')"
        >
          <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
          <template #item="{ item }">
            <MenuPopupItem
              data-cy="drawPanelMenuPopupItem"
              :item="item"
              @click="() => item.action && item.action()"
            >
              {{ t(item.label) }}
            </MenuPopupItem>
          </template>
        </MenuPopup>
      </div>

      <!-- Drawings/Features list -->
      <DrawPanelFeatures />
    </div>
  </template>
</template>

<style scoped>
.separator {
  margin-left: -10px;
  margin-right: -10px;
}
</style>
