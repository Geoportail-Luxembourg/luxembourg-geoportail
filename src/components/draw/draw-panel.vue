<script setup lang="ts">
import { onMounted } from 'vue'
import { useTranslation } from 'i18next-vue'

import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import useSortable from '@/composables/sortable'
import { useDrawStore } from '@/stores/draw.store'

import DrawPanelFeature from './draw-panel-feature.vue'
import { storeToRefs } from 'pinia'

const { t } = useTranslation()

const drawStore = useDrawStore()
const { drawFeatures: features } = storeToRefs(drawStore)
const drawingMenuOptions = [
  { label: 'Copier dans ma carte', action: () => console.log('TODO') },
  { label: 'Effacer tous les dessins', action: () => console.log('TODO') },
  {
    label: 'Créer une nouvelle carte à partir de ces dessins',
    action: () => console.log('TODO'),
  },
  { label: 'Fusionner des lignes', action: () => console.log('TODO') },
  { label: 'Couper une ligne', action: () => console.log('TODO') },
]

onMounted(() => {
  useSortable(<HTMLElement>document.querySelector('.sortable-features'))
})
</script>

<template>
  <hr class="separator my-5" />

  <div class="lux-draw-panel" data-cy="drawPanel">
    <div class="lux-draw-panel-title flex">
      <h5 class="grow">{{ t('Dessins') }}</h5>

      <MenuPopup
        :items="drawingMenuOptions"
        :direction="'down'"
        :ariaLabel="t('Drawings menu')"
      >
        <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
        <template #item="{ item }">
          <MenuPopupItem
            :item="item"
            @click="() => item.action && item.action()"
          >
            {{ t(item.label) }}
          </MenuPopupItem>
        </template>
      </MenuPopup>
    </div>

    <ul class="mx-1 sortable-features" v-if="features.length">
      <li
        class="lux-drawing-item"
        v-for="(feature, index) in features"
        :key="index"
      >
        <DrawPanelFeature :featureId="30" :feature="feature" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.separator {
  margin-left: -10px;
  margin-right: -10px;
}
</style>
