<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import MenuPopup from '@/components/common/menu-popup.vue'

import FeatureDelete from './feature-delete.vue'
import FeatureEditInfo from './feature-edit-info.vue'
import FeatureEditStyle from './feature-edit-style.vue'

const { t } = useTranslation()
const props = defineProps<{
  isEditing: boolean
  feature: string
}>()

const isEditingInfo = ref(false)
const isEditingStyle = ref(false)
const isDeleting = ref(false)
const isModifiying = computed(
  () => isEditingInfo.value || isEditingStyle.value || isDeleting.value
)

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
</script>

<template>
  <template v-if="!isModifiying">
    <i
      class="fa fa-object-ungroup float-right"
      role="button"
      v-if="!isModifiying"
      >&nbsp;</i
    >

    <div class="min-h-8" v-if="!isModifiying"></div>

    <!-- Default display feature options -->
    <div v-if="!isModifiying">
      <button class="lux-btn-primary" v-if="!isEditingStyle">
        {{ t("Editer l'objet") }}
      </button>
      <button class="lux-btn-primary" v-else>
        {{ t('Terminer édition') }}
      </button>

      <div class="flex text-primary items-center gap-2 float-right">
        <button @click="onSearch"><i class="fa fa-search"></i></button>
        <button @click="() => (isEditingInfo = true)">
          <i class="fa fa-pencil"></i>
        </button>
        <button @click="() => (isEditingStyle = true)">
          <i class="fa fa-paint-brush"></i>
        </button>
        <button @click="onRemove"><i class="fa fa-trash"></i></button>
        
        <MenuPopup :options="['toto']" :direction="'down'" />
      </div>
    </div>
  </template>

  <!-- Is modifying feature -->
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
