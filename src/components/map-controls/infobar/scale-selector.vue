<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useTranslation } from 'i18next-vue'
import useMap from '@/composables/map/map.composable'
import { EventsKey } from 'ol/events'
import { unByKey } from 'ol/Observable'

const { t } = useTranslation()
const { getOlMap } = useMap()
const map = getOlMap()

const isOpen = ref(false)
const dropdownButton = ref<HTMLElement | null>(null)
let resolutionChangeKey: EventsKey | null = null

// Scales mapping (zoom level to display string)
const scales: Record<number, string> = {
  8: "1&nbsp;:&nbsp;1'500'000",
  9: "1&nbsp;:&nbsp;750'000",
  10: "1&nbsp;:&nbsp;400'000",
  11: "1&nbsp;:&nbsp;200'000",
  12: "1&nbsp;:&nbsp;100'000",
  13: "1&nbsp;:&nbsp;50'000",
  14: "1&nbsp;:&nbsp;25'000",
  15: "1&nbsp;:&nbsp;12'000",
  16: "1&nbsp;:&nbsp;6'000",
  17: "1&nbsp;:&nbsp;3'000",
  18: "1&nbsp;:&nbsp;1'500",
  19: '1&nbsp;:&nbsp;750',
  20: '1&nbsp;:&nbsp;400',
  21: '1&nbsp;:&nbsp;200',
}

const currentScale = ref<string | undefined>(undefined)

// Computed property for available zoom levels (sorted)
const zoomLevels = computed(() => {
  return Object.keys(scales)
    .map(Number)
    .sort((a, b) => a - b)
})

// Get scale label for a given zoom level
const getScaleLabel = (zoom: number): string => {
  return scales[zoom] || ''
}

// Current scale display label
const currentScaleLabel = computed(() => {
  return currentScale.value !== undefined ? currentScale.value : ''
})

// Change zoom level
const changeZoom = (zoom: number) => {
  const view = map.getView()
  if (view) {
    view.setZoom(zoom)
    isOpen.value = false
  }
}

// Handle resolution changes
const handleResolutionChange = () => {
  const view = map.getView()
  if (!view) return

  const zoom = Math.round(view.getZoom() || 0)
  const scale = scales[zoom]

  if (scale !== undefined) {
    currentScale.value = scale
  }
}

// Register resolution change listener
const registerResolutionChangeListener = () => {
  // Unregister previous listener if exists
  if (resolutionChangeKey !== null) {
    unByKey(resolutionChangeKey)
  }

  const view = map.getView()
  if (view) {
    resolutionChangeKey = view.on('change:resolution', handleResolutionChange)
  }
}

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (dropdownButton.value && !dropdownButton.value.contains(target)) {
    isOpen.value = false
  }
}

// Initialize
onMounted(() => {
  const view = map.getView()
  if (view) {
    const currentZoom = view.getZoom()
    if (currentZoom !== undefined) {
      currentScale.value = scales[Math.round(currentZoom)]
    }
  }

  registerResolutionChangeListener()

  // Listen for view changes
  view.on('change', () => {
    registerResolutionChangeListener()
    handleResolutionChange()
  })

  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

// Cleanup
onBeforeUnmount(() => {
  if (resolutionChangeKey !== null) {
    unByKey(resolutionChangeKey)
  }
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="scale-selector dropup">
    <button
      type="button"
      class="scale-button"
      @click="toggleDropdown"
      ref="dropdownButton"
      :title="t('Select scale')"
    >
      <span v-html="currentScaleLabel"></span>&nbsp;<span class="caret"></span>
    </button>
    <ul
      class="scale-dropdown"
      role="menu"
      :class="{ show: isOpen }"
      v-show="isOpen"
    >
      <li v-for="zoomLevel in zoomLevels" :key="zoomLevel">
        <a
          href="#"
          @click.prevent="changeZoom(zoomLevel)"
          v-html="getScaleLabel(zoomLevel)"
        ></a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.scale-selector {
  position: relative;
  display: inline-block;
}

.scale-selector.dropup .scale-dropdown {
  bottom: 100%;
  top: auto;
  margin-bottom: 4px;
}

.scale-button {
  background-color: white;
  border: 1px solid var(--color-border-default);
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  border-radius: 2px;
  min-width: 150px;
  justify-content: space-between;
  text-align: left;
}

.scale-button:hover {
  background-color: #f0f0f0;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  color: var(--color-primary);
  flex-shrink: 0;
}

.scale-dropdown {
  position: absolute;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: white;
  border: 1px solid var(--color-border-default);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  left: 0;
}

.scale-dropdown li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.scale-dropdown li a {
  display: block;
  padding: 6px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: var(--color-primary);
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
}

.scale-dropdown li a:hover,
.scale-dropdown li a:focus {
  color: #262626;
  text-decoration: none;
  background-color: #f5f5f5;
}
</style>
