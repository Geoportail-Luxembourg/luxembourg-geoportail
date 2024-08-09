<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'

import FeatureDelete from './feature-delete.vue'
import FeatureEditInfo from './feature-edit-info.vue'
import FeatureEditStyle from './feature-edit-style.vue'

defineProps<{
  isEditing: boolean
  feature: string
}>()

const { t } = useTranslation()
const isEditingInfo = ref(false)
const isEditingStyle = ref(false)
const isDeleting = ref(false)
const isModifiying = computed(
  () => isEditingInfo.value || isEditingStyle.value || isDeleting.value
)

const drawingMenuOptions = [
  { label: 'Exporter un GPX', action: () => console.log('TODO') },
  { label: 'Exporter un KML', action: () => console.log('TODO') },
  { label: 'Exporter un Shapefile', action: () => console.log('TODO') },
  { label: 'Changer sens de la ligne', action: () => console.log('TODO') },
  { label: 'Créer cercle concentrique', action: () => console.log('TODO') },
]

function onCancel() {
  isEditingInfo.value = isEditingStyle.value = isDeleting.value = false
}

function onSearch() {
  alert('TODO onSearch')
}

function onRemove() {
  isEditingInfo.value = isEditingStyle.value = false
  isDeleting.value = true
}

function onClickDock() {
  console.log('TODO')
}
</script>

<template>
  <template v-if="!isModifiying">
    <!-- Attach this UI in a popup under the feature on the map -->
    <i
      class="fa fa-object-ungroup float-right"
      role="button"
      v-if="!isModifiying"
      @click="onClickDock"
      >&nbsp;</i
    >

    <!-- Spacer -->
    <div class="min-h-8" v-if="!isModifiying"></div>

    <!-- Default display feature options -->
    <div v-if="!isModifiying">
      <!-- Button edit feature: EDIT/END EDITION -->
      <button class="lux-btn-primary" v-if="!isEditingStyle">
        {{ t("Editer l'objet") }}
      </button>
      <button class="lux-btn-primary" v-else>
        {{ t('Terminer édition') }}
      </button>

      <!-- List of actions on the current feature -->
      <div class="flex text-primary items-center gap-2 float-right">
        <!-- Fit view on current feature -->
        <button @click="onSearch"><i class="fa fa-search"></i></button>

        <!-- Edit current feature -->
        <button @click="() => (isEditingInfo = true)">
          <i class="fa fa-pencil"></i>
        </button>

        <!-- Edit current feature style -->
        <button @click="() => (isEditingStyle = true)">
          <i class="fa fa-paint-brush"></i>
        </button>

        <!-- Remove feature from the map -->
        <button @click="onRemove"><i class="fa fa-trash"></i></button>

        <!-- Menu dropdown with all other possible actions on feature -->
        <MenuPopup
          :items="drawingMenuOptions"
          :direction="'up'"
          :ariaLabel="t('Drawings menu')"
        >
          <!-- Button to open the menu -->
          <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
          <!-- Loop through items for the menu -->
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
    </div>
  </template>

  <!-- UI when user is modifying feature -->
  <template v-else>
    <FeatureEditInfo v-if="isEditingInfo" />
    <FeatureEditStyle v-if="isEditingStyle" :feature="feature" />
    <FeatureDelete v-if="isDeleting" />

    <div class="text-right">
      <button class="lux-btn mr-2" @click="onCancel">{{ t('Cancel') }}</button>
      <button class="lux-btn-primary">{{ t('Validate') }}</button>
    </div>
  </template>
</template>
