<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTranslation } from 'i18next-vue'

import ModalDialog from '@/components/common/modal-dialog.vue'
import DropdownList from '@/components/common/dropdown-list.vue'
import { createMyMaps } from '@/services/api/api-mymaps.service'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'select', uuid: string): void
}>()

const { t } = useTranslation()
const mapIsPublic = ref(false)
const mapTitle = ref(t('Map without Title'))
const mapDescription = ref('')
const category = ref<string | undefined>(undefined)
const categories = computed(() => [
  {
    label: t('Aucune catégorie'),
    value: '999',
  },
])

async function onClickSave() {
  const catId = category.value ? parseInt(category.value, 10) : 999
  const createdResponse = await createMyMaps(
    mapTitle.value,
    mapDescription.value,
    catId,
    mapIsPublic.value
  )

  if (createdResponse.success) {
    emit('confirm', createdResponse.uuid)
  } else {
    emit('cancel')
  }
}
</script>

<template>
  <ModalDialog :title="t('Ouvrir une carte')" @close="emit('cancel')">
    <template v-slot:content>
      <DropdownList
        class="min-w-36"
        :placeholder="t('Please select a Category')"
        :options="categories"
        v-model="category"
        @change="v => (category = v)"
      ></DropdownList>
      <DropdownList
        class="min-w-36"
        :placeholder="t('Please select a Category')"
        :options="categories"
        v-model="category"
        @change="v => (category = v)"
      ></DropdownList>
    </template>

    <template v-slot:footer>
      <div class="flex flex-row justify-end gap-2">
        <button class="lux-btn" data-dismiss="modal" @click="emit('cancel')">
          {{ t('Annuler') }}
        </button>
      </div>
    </template>
  </ModalDialog>
</template>
