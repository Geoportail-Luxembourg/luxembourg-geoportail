<script setup lang="ts">
import { computed } from 'vue'

import { useLayer } from '@/composables/layer'
import { Layer } from '@/stores/map.store.model'
import { IBackgroundLayer } from '@/composables/background-layer/background-layer.model'
import useOffline from '@/composables/offline/offline.composable'

const props = defineProps<{
  showEditButton: boolean
  layer: Layer | IBackgroundLayer
}>()
const emit = defineEmits<{
  (e: 'clickEdit'): void
  (e: 'clickInfo'): void
}>()
const { t, onClickInfo } = useLayer(props.layer, { emit })

const txtTitleLabel = computed(() =>
  t('Display informations for "{{layerName}}"', {
    ns: 'app',
    layerName: getLabel(),
  })
)
const showInfoButton = computed(() => !useOffline().isOffLine.value)

function getLabel() {
  // TODO: use getLabel from useLayer? not working as composable is not updated
  return t(props.layer.name, { ns: 'client' })
}
</script>

<template>
  <div class="lux-layer-manager-item mt-2.5">
    <button
      v-if="showInfoButton"
      class="fa fa-info w-3"
      :title="txtTitleLabel"
      @click="onClickInfo"
    ></button>
    <span class="flex-1 text-left cursor-default">{{ getLabel() }}</span>
    <button
      v-if="showEditButton"
      class="fa fa-pencil"
      :aria-label="t('Open editor panel', { ns: 'app' })"
      :title="t('Open editor panel', { ns: 'app' })"
      @click="$emit('clickEdit')"
    ></button>
  </div>
</template>
