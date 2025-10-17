<script setup lang="ts">
// TODO: Import child components when created
import ScaleSelector from './scale-selector.vue'
import ScaleLine from './scale-line.vue'
import ProjectionSelector from './projection-selector.vue'
import ElevationDisplay from './elevation-display.vue'
</script>

<template>
  <div class="infobar">
    <div class="infobar-item">
      <ScaleSelector />
    </div>
    <div class="infobar-separator"></div>
    <div class="infobar-item">
      <ScaleLine />
    </div>
    <div class="infobar-separator"></div>
    <div class="infobar-item">
      <ProjectionSelector />
    </div>
    <div class="infobar-separator"></div>
    <div class="infobar-item">
      <ElevationDisplay />
    </div>
  </div>
</template>

<style scoped>
.infobar {
  height: 40px;
  background-color: white;
  border: 1px solid var(--color-border-default);
  border-radius: 4px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.infobar-item {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--color-primary);
}

.infobar-separator {
  width: 1px;
  height: 24px;
  background-color: var(--color-border-default);
}
</style>
