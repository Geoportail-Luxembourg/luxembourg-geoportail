<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import useSortable from '@/composables/sortable'
import DrawPanelItem from './draw-panel-item.vue'

const { t } = useTranslation()

const isOpenItemPoint = ref(false)
const isOpenItemPolygon = ref(false)
const isOpenItemLineString = ref(false)

const drawingMenuOptions = [
  { label: 'Copier dans ma carte', action: () => console.log('TODO')},
  { label: 'Effacer tous les dessins', action: () => console.log('TODO')},
  { label: 'Créer une nouvelle carte à partir de ces dessins', action: () => console.log('TODO')},
  { label: 'Fusionner des lignes', action: () => console.log('TODO')},
  { label: 'Couper une ligne', action: () => console.log('TODO')}
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
      
      <MenuPopup :items="drawingMenuOptions"
            :direction="'down'"
            :ariaLabel="t('Drawings menu')"
            >
            <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
            <template #item="{ item }">
              <MenuPopupItem
                :item="item"
                @click="() => item.action && item.action()">
                {{ t(item.label) }}
              </MenuPopupItem>
            </template>
      </MenuPopup>
    </div>

    <ul class="mx-1 sortable-features">
      <li class="lux-drawing-item">
        <DrawPanelItem
          :is-open="isOpenItemPoint"
          :drawing-id="32"
          :feature="'Point'"
          @closeFeatureItemSub="val => (isOpenItemPoint = val)"
        />
      </li>
      <li class="lux-drawing-item">
        <DrawPanelItem
          :is-open="isOpenItemPolygon"
          :drawing-id="32"
          :feature="'Polygon'"
          @closeFeatureItemSub="val => (isOpenItemPolygon = val)"
        />
      </li>
      <li class="lux-drawing-item">
        <DrawPanelItem
          :is-open="isOpenItemLineString"
          :drawing-id="32"
          :feature="'LineString'"
          @closeFeatureItemSub="val => (isOpenItemLineString = val)"
        />
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
