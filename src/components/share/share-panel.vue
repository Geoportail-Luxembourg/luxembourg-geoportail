<script setup lang="ts">
import ShareUrl from './share-url.vue'
import ShareEmbed from './share-embed.vue'
</script>

<template>
  <div data-cy="sharePanel">
    <div
      class="absolute bottom-full top-auto z-20 flex flex-col divide-gray-400 divide-solid box-content border-y border-x border-gray-400 bg-primary md:w-80 p-3 gap-3"
    >
      <share-url />
      <share-embed />
    </div>
  </div>
</template>
