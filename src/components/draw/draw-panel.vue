<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTranslation } from 'i18next-vue'

import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import useClipLine from '@/composables/draw/draw-clip-line.composable'
import useMyMaps from '@/composables/my-maps/my-maps.composable'
import { useDrawStore } from '@/stores/draw.store'
import { useAppStore } from '@/stores/app.store'
import { screenSizeIsAtLeast } from '@/services/common/device.utils'

import DrawPanelFeatures from './draw-panel-features.vue'
import ModalConfirmDeleteAll from './modal-confirm-delete-all.vue'
import ModalMergeLines from './modal-merge-lines.vue'

const { t } = useTranslation()
const appStore = useAppStore()
const clipLine = useClipLine()
const { toggleMyMapsOpen } = appStore
const { feedbackOpen, feedbackanfOpen, feedbackageOpen, feedbackcruesOpen } =
  storeToRefs(appStore)
const drawStore = useDrawStore()
const { drawnFeaturesExceptMyMaps: features, clipLineActive } =
  storeToRefs(drawStore)
const myMaps = useMyMaps()
const drawingMenuOptions = computed(() => {
  const menu = [
    {
      label: 'Effacer tous les dessins',
      action: () => (showModalConfirmDelete.value = true),
    },
    {
      label: 'Créer une nouvelle carte à partir de ces dessins',
      action: () => alert('TODO: Draw feature click drawingMenuOptions'),
    },
    {
      label: 'Fusionner des lignes',
      action: () => (showModalMergeLines.value = true),
    },
    {
      label: clipLineActive.value
        ? 'Désactiver mode couper une ligne'
        : 'Couper une ligne',
      action: () => {
        clipLine.toggle()
        drawStore.deactivateDraw()
      },
    },
  ]

  if (myMaps.isMyMapEditable.value) {
    menu.unshift({
      label: 'Copier dans ma carte',
      action: () => {
        if (!myMaps.checkAuth()) {
          return
        }

        myMaps.addInMyMap()
      },
    })
  }

  return menu
})
const showModalConfirmDelete = ref(false)
const showModalMergeLines = ref(false)

function onConfirmDeleteAll() {
  drawStore.removeAllFeatures()
}

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
              @click="item.action"
            >
              {{ t(item.label) }}
            </MenuPopupItem>
          </template>
        </MenuPopup>
      </div>

      <!-- Drawings/Features list -->
      <DrawPanelFeatures />
    </div>

    <!-- Modales -->
    <ModalConfirmDeleteAll
      v-if="showModalConfirmDelete"
      @cancel="() => (showModalConfirmDelete = false)"
      @confirm="
        () => {
          showModalConfirmDelete = false
          onConfirmDeleteAll()
        }
      "
    />
    <ModalMergeLines
      v-if="showModalMergeLines"
      @cancel="() => (showModalMergeLines = false)"
      @confirm="() => (showModalMergeLines = false)"
    />
  </template>
</template>

<style scoped>
.separator {
  margin-left: -10px;
  margin-right: -10px;
}
</style>
