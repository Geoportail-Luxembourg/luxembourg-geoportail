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
    data-cy="attributionControl"
    class="absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
    v-if="attribution"
    v-dompurify-html="attribution"
  ></div>
</template>
