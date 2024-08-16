<script setup lang="ts">
import { Ref, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import { DrawFeature } from '@/stores/draw.store.model'

import FeatureMenuPopup from './feature-menu-popup.vue'
import FeatureConfirmDelete from './feature-confirm-delete.vue'
import FeatureEditInfo from './feature-edit-info.vue'
import FeatureEditStyle from './feature-edit-style.vue'
import FeatureMeasurements from './feature-measurements.vue'

const props = defineProps<{
  isDocked: boolean
  isEditingFeature: boolean
  feature: DrawFeature
}>()
const emit = defineEmits(['toggleEditFeature', 'toggleDock', 'clickDelete'])
const { t } = useTranslation()

const editComponents = {
  FeatureEditInfo,
  FeatureEditStyle,
  FeatureConfirmDelete,
}
const currentEditCompKey: Ref<keyof typeof editComponents | undefined> =
  ref(undefined)

function onClickCancel() {
  currentEditCompKey.value = undefined
}

function onClickValidate() {
  const currentComponent =
    editComponents[currentEditCompKey.value as keyof typeof editComponents]

  if (currentComponent === FeatureConfirmDelete) {
    emit('clickDelete')
  } else {
    alert('TODO: Draw feature click onClickValidate()')
  }
}

function onClickSearch() {
  alert('TODO: Draw feature click onClickSearch()')
}
</script>

<template>
  <template v-if="!currentEditCompKey">
    <!-- Icon to attach this UI in a popup under the feature on the map -->
    <i
      v-if="!isDocked"
      class="fa fa-object-ungroup float-right"
      role="button"
      @click="() => emit('toggleDock')"
    ></i>

    <h6 v-if="isDocked">{{ feature.label }}</h6>

    <!-- Spacer -->
    <div class="min-h-3"></div>

    <FeatureMeasurements :feature="feature" />

    <!-- Default display feature options -->
    <div class="flex justify-between items-center mt-1">
      <div>
        <!-- Button edit feature: EDIT/END EDITION -->
        <button
          class="lux-btn-primary"
          @click="emit('toggleEditFeature', props.feature)"
        >
          {{ isEditingFeature ? t('Terminer édition') : t("Editer l'objet") }}
        </button>
      </div>

      <div>
        <!-- List of actions on the current feature -->
        <div class="flex text-primary items-center gap-1">
          <!-- Fit view on current feature -->
          <button @click="onClickSearch"><i class="fa fa-search"></i></button>

          <!-- Edit current feature -->
          <button @click="() => (currentEditCompKey = 'FeatureEditInfo')">
            <i class="fa fa-pencil"></i>
          </button>

          <!-- Edit current feature style -->
          <button @click="() => (currentEditCompKey = 'FeatureEditStyle')">
            <i class="fa fa-paint-brush"></i>
          </button>

          <!-- Remove feature from the map -->
          <button @click="() => (currentEditCompKey = 'FeatureConfirmDelete')">
            <i class="fa fa-trash"></i>
          </button>

          <!-- Menu dropdown with all other possible actions on feature -->
          <FeatureMenuPopup :feature="feature" />
        </div>
      </div>
    </div>
  </template>

  <!-- UI when user is modifying feature -->
  <!-- Include dynamic components: FeatureEditInfo, FeatureEditStyle or FeatureConfirmDelete -->
  <component
    v-else
    :is="editComponents[currentEditCompKey as keyof typeof editComponents]"
    :feature="feature"
  >
    <!-- Dynamic component content here -->

    <!-- Customise footer with Cancel and Validate btns -->
    <template v-slot:footer>
      <div class="mt-3 text-right">
        <button class="lux-btn mr-2" @click="onClickCancel">
          {{ t('Cancel') }}
        </button>

        <button class="lux-btn-primary" @click="onClickValidate">
          {{ t('Validate') }}
        </button>
      </div>
    </template>
  </component>
</template>
