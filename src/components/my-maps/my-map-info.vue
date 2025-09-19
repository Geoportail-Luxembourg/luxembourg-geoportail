<script setup lang="ts">
import { useTranslation } from 'i18next-vue'

import MenuPopup from '@/components/common/menu-popup/menu-popup.vue'
import MenuPopupItem from '@/components/common/menu-popup/menu-popup-item.vue'
import { MyMap } from '@/services/api/api-mymaps.service'
import { computed } from 'vue'

const { t } = useTranslation()
const emit = defineEmits(['close'])
const props = defineProps<{
  myMap: MyMap
}>()
const menuOptions = computed(() => [
  {
    label: 'Copier dans ma carte',
    action: () => alert('TODO: Draw feature click drawingMenuOptions'),
  },
])
</script>

<template>
  <div class="flex items-center">
    <h2 class="text-white font-bold grow">{{ myMap.title }}</h2>
    <button
      @click="emit('close')"
      class="text-slate-400 hover:text-slate-700 text-2xl"
      aria-label="Close"
    >
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <p class="text-white mb-2">
    <template v-if="myMap.description">{{ myMap.description }}</template>
    <span v-else class="italic">{{ t('Aucune description') }}</span>
  </p>
  <div class="flex items-center text-white mr-0.5">
    <span class="text-sm italic grow">
      <i v-if="myMap.public" class="fa fa-unlock mr-1"></i>
      <i v-else class="fa fa-lock mr-1"></i>
      {{ t('Carte créée par') }} {{ myMap.user_login }}
    </span>

    <!-- Dropdown menu -->
    <MenuPopup
      data-cy="drawPanelMenuPopup"
      :items="menuOptions"
      :direction="'down'"
      :ariaLabel="t('My Map menu')"
    >
      <i class="fa-solid fa-square-caret-down hover:text-tertiary"></i>
      <template #item="{ item }">
        <MenuPopupItem :item="item" @click="item.action">
          {{ t(item.label) }}
        </MenuPopupItem>
      </template>
    </MenuPopup>
  </div>
</template>
