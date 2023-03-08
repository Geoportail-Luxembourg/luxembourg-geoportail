<script setup lang="ts">
import { useLayer } from '@/composables/layer'
import { Layer } from '@/stores/map.store.model'
import { IBackgroundLayer } from '@/composables/background-layer/background-layer.model'

const props = defineProps<{
  showEditButton: boolean
  layer: Layer | IBackgroundLayer
}>()
const emit = defineEmits<{
  (e: 'clickEdit'): void
  (e: 'clickInfo'): void
}>()
const { t, onClickInfo } = useLayer(props.layer, { emit })

const txtTitleLabel = t('Display informations for "{{layerName}}"', {
  ns: 'client',
  layerName: getLabel(),
})

function getLabel() {
  // TODO: use getLabel from useLayer? not working as composable is not updated
  return t(props.layer.name, { ns: 'client' })
}
</script>

<template>
  <div class="lux-layer-manager-item mt-2.5">
    <button
      class="fa fa-info w-3"
      :title="txtTitleLabel"
      @click="onClickInfo"
    ></button>
    <span class="flex-1 text-left cursor-default">{{ getLabel() }}</span>
    <button
      v-if="showEditButton"
      class="fa fa-pencil"
      :title="t('Open editor panel', { ns: 'client' })"
      @click="$emit('clickEdit')"
    ></button>
  </div>
</template>
