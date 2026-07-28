<script setup lang="ts">
import { useMapStore } from '@/stores/map.store'
import { computed } from 'vue'

const mapStore = useMapStore()

const attributions = computed(() => {
  const allAttributions: string[] = []

  // Ajouter l'attribution de la couche d'arrière-plan si elle existe
  if (mapStore.bgLayer?.metadata?.attribution) {
    allAttributions.push(mapStore.bgLayer.metadata.attribution)
  }

  // Ajouter les attributions des couches superposées actives
  mapStore.layers.forEach(layer => {
    if (layer.metadata?.attribution) {
      allAttributions.push(layer.metadata.attribution)
    }
  })
  return allAttributions
})

const combinedAttribution = computed(() => {
  return attributions.value.join(' | ')
})
</script>

<template>
  <div
    data-cy="attributionControl"
    class="absolute bottom-0 z-10 text-[0.8em] px-[4px] text-[#6b818f] bg-[#ffffffb3]"
    v-if="combinedAttribution"
    v-dompurify-html="combinedAttribution"
  ></div>
</template>
