<script setup lang="ts">
import { ref } from 'vue'

import { MyMapJson } from '@/services/api/api-mymaps.service'
import { MyMap } from '@/stores/app.store.model'

import MyMapsOpenMapList from './my-maps-open-map-list.vue'
import MyMapConfirm from './my-map-confirm.vue'

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'select', uuid: string): void
  (e: 'delete', muuid: string): void
}>()

defineProps<{
  maps: MyMapJson[]
  isLoadingMyMaps: boolean
}>()

const confirmDeleteMap = ref<MyMap | undefined>(undefined)

function onDeleteOpenConfirm(map: MyMap) {
  confirmDeleteMap.value = map
}

function onDelete(uuid: string) {
  confirmDeleteMap.value = undefined
  emit('delete', uuid)
}
</script>

<template>
  <MyMapsOpenMapList
    v-if="!confirmDeleteMap"
    :maps="maps"
    :isLoadingMyMaps="isLoadingMyMaps"
    @cancel="emit('cancel')"
    @select="emit('select', $event)"
    @delete="onDeleteOpenConfirm"
  ></MyMapsOpenMapList>

  <MyMapConfirm
    v-else
    :map="confirmDeleteMap"
    :mode="'delete'"
    @cancel="confirmDeleteMap = undefined"
    @confirm="onDelete"
  ></MyMapConfirm>
</template>
