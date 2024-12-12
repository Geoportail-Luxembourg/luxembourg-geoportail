<script setup lang="ts">
import { ref } from 'vue'
import { DrawnFeature } from '@/services/draw/drawn-feature'

defineProps<{
  feature: DrawnFeature
}>()

const isOpenEditIcon = ref(false)

function closeEditIcon() {
  isOpenEditIcon.value = false
}
</script>

<template>
  <!-- Default symbol styling @see FeatureEditStyleSymbol -->
  <template v-if="!isOpenEditIcon">
    <slot name="title"></slot>
    <slot name="color"></slot>
    <slot
      name="styleSymbol"
      :openEditIcon="() => (isOpenEditIcon = true)"
    ></slot>
    <slot name="size" :maxsize="900"></slot>
    <slot name="angle"></slot>
    <slot name="footer"></slot>
  </template>

  <!-- Symbol Icon styling @see FeatureEditSymbolIcon -->
  <template v-else>
    <slot name="symbolIcon" :closeEditIcon="closeEditIcon">
      <slot name="symbolcolor"></slot>
    </slot>
  </template>
</template>
