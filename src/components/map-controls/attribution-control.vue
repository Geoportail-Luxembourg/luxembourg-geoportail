<script setup lang="ts">
import { useMapStore } from '@/stores/map.store'
import { watchEffect, ref } from 'vue'

const mapStore = useMapStore()
const attribution = ref('')

watchEffect(() => {
  attribution.value = mapStore.bgLayer?.metadata?.attribution || ''
})
</script>

<template>
  <div
    class="lux-attribution"
    v-if="attribution"
    v-dompurify-html="attribution"
  ></div>
</template>
