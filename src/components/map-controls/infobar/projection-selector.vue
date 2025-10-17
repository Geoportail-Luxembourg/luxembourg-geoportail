<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import useMap from '@/composables/map/map.composable'
import MousePosition from 'ol/control/MousePosition'
import { useCoordinateString } from '@/services/search/coordinate.service'

const { getOlMap } = useMap()
const map = getOlMap()
const { coordinateString } = useCoordinateString()

const isOpen = ref(false)
const dropdownButton = ref<HTMLElement | null>(null)
const mousePositionContainer = ref<HTMLElement | null>(null)
let mousePositionControl: MousePosition | null = null

interface ProjectionOption {
  label: string
  value: string
}

// Projection options
const projectionOptions: ProjectionOption[] = [
  { label: 'LUREF', value: 'EPSG:2169' },
  { label: 'Lon/Lat WGS84', value: 'EPSG:4326' },
  { label: 'Lon/Lat WGS84 DMS', value: 'EPSG:4326:DMS' },
  { label: 'Lon/Lat WGS84 DM', value: 'EPSG:4326:DMm' },
  { label: 'WGS84 UTM 32|31', value: 'EPSG:3263*' },
]

const selectedProjection = ref<ProjectionOption>(projectionOptions[0])

// Current projection display label
const projectionLabel = computed(() => selectedProjection.value.label)

// Mouse coordinate format function
const mouseCoordinateFormat = (coord: number[] | undefined): string => {
  if (!coord) return ''

  const mapEpsgCode = map.getView().getProjection().getCode()
  const projValue = selectedProjection.value.value

  if (projValue === 'EPSG:4326:DMS') {
    return coordinateString(coord, mapEpsgCode, 'EPSG:4326', true, false)
  } else if (projValue === 'EPSG:4326:DMm') {
    return coordinateString(coord, mapEpsgCode, 'EPSG:4326', false, true)
  } else {
    return coordinateString(coord, mapEpsgCode, projValue, false, false)
  }
}

// Switch projection
const switchProjection = (option: ProjectionOption) => {
  selectedProjection.value = option
  isOpen.value = false

  // Update mouse position control coordinate format
  if (mousePositionControl) {
    mousePositionControl.setCoordinateFormat(mouseCoordinateFormat)
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
  if (mousePositionContainer.value) {
    // Create MousePosition control
    mousePositionControl = new MousePosition({
      className: 'custom-mouse-coordinates',
      target: mousePositionContainer.value,
      coordinateFormat: mouseCoordinateFormat,
      projection: undefined, // Use map projection
    })

    // Add to map
    map.addControl(mousePositionControl)
  }

  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

// Cleanup
onBeforeUnmount(() => {
  if (mousePositionControl) {
    map.removeControl(mousePositionControl)
    mousePositionControl = null
  }
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="projection-selector-wrapper">
    <!-- Projection selector dropdown -->
    <div class="projection-selector dropup">
      <button
        type="button"
        class="projection-button"
        @click="toggleDropdown"
        ref="dropdownButton"
        :title="projectionLabel"
      >
        <span class="projection-label">{{ projectionLabel }}</span>
        <span class="caret"></span>
      </button>
      <ul class="projection-dropdown" role="menu" v-show="isOpen">
        <li v-for="option in projectionOptions" :key="option.value">
          <a
            href="#"
            @click.prevent="switchProjection(option)"
            :class="{ active: option.value === selectedProjection.value }"
          >
            {{ option.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Mouse coordinates display -->
    <div ref="mousePositionContainer" class="mouse-position"></div>
  </div>
</template>

<style scoped>
.projection-selector-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.projection-selector {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}

.projection-selector.dropup .projection-dropdown {
  bottom: 100%;
  top: auto;
  margin-bottom: 4px;
}

.projection-button {
  background-color: white;
  border: 1px solid var(--color-border-default);
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 2px;
  width: 140px;
}

.projection-button:hover {
  background-color: #f0f0f0;
}

.projection-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  text-align: left;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border-top: 4px solid;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  color: var(--color-primary);
  flex-shrink: 0;
}

.projection-dropdown {
  position: absolute;
  z-index: 1000;
  min-width: 160px;
  padding: 5px 0;
  font-size: 12px;
  text-align: left;
  list-style: none;
  background-color: white;
  border: 1px solid var(--color-border-default);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  left: 0;
  margin: 0;
}

.projection-dropdown li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.projection-dropdown li a {
  display: block;
  padding: 6px 12px;
  color: var(--color-primary);
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
}

.projection-dropdown li a:hover,
.projection-dropdown li a:focus {
  background-color: #f5f5f5;
}

.projection-dropdown li a.active {
  background-color: var(--color-primary);
  color: white;
}

.mouse-position {
  font-size: 12px;
  color: var(--color-primary);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 110px;
}

/* Style the OpenLayers mouse position control */
.mouse-position :deep(.custom-mouse-coordinates) {
  position: relative;
  background: transparent;
  padding: 0;
  margin: 0;
  font-size: 12px;
  color: var(--color-primary);
}
</style>
