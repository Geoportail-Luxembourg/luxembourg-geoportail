<script setup lang="ts">
import { inject, Ref } from 'vue'
import FeatureEditSymbol from './feature-edit-symbol.vue'

const popupOpen: Ref<boolean> = inject('popupOpen')!
</script>

<template>
  <div v-if="popupOpen">
    <FeatureEditSymbol>
      <!-- Propagate color template one level lower -->
      <template v-slot:symbolcolor>
        <slot name="color"></slot>
      </template>
    </FeatureEditSymbol>
  </div>
  <template v-else>
    <slot name="color"></slot>
    <slot name="symbole"></slot>
    <slot name="size" :maxsize="900"></slot>
  </template>
</template>
