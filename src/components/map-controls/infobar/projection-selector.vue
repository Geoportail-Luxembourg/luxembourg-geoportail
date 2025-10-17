<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useTranslation } from 'i18next-vue'
import useMap from '@/composables/map/map.composable'
import MousePosition from 'ol/control/MousePosition'
import { useCoordinateString } from '@/services/search/coordinate.service'

const { t } = useTranslation()
const { getOlMap } = useMap()
const map = getOlMap()
const { coordinateString } = useCoordinateString()

const isOpen = ref(false)
const dropdownButton = ref<HTMLElement | null>(null)
const dropdownMenu = ref<HTMLElement | null>(null)
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

  // Return focus to button
  nextTick(() => {
    dropdownButton.value?.focus()
  })
}

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    // Focus first item when opening
    nextTick(() => {
      const firstLink = dropdownMenu.value?.querySelector('a') as HTMLElement
      firstLink?.focus()
    })
  }
}

// Handle keyboard events on button
const handleButtonKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    event.stopPropagation()
    toggleDropdown()
  } else if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    event.stopPropagation()
    isOpen.value = false
  } else if (event.key === 'ArrowDown' && !isOpen.value) {
    event.preventDefault()
    event.stopPropagation()
    toggleDropdown()
  }
}

// Handle keyboard navigation in dropdown
const handleDropdownKeydown = (event: KeyboardEvent) => {
  const links = Array.from(
    dropdownMenu.value?.querySelectorAll('a') || []
  ) as HTMLElement[]
  const currentIndex = links.findIndex(link => link === document.activeElement)

  if (event.key === 'Escape') {
    event.preventDefault()
    event.stopPropagation()
    isOpen.value = false
    dropdownButton.value?.focus()
  } else if (event.key === 'ArrowDown') {
    event.preventDefault()
    event.stopPropagation()
    const nextIndex = (currentIndex + 1) % links.length
    links[nextIndex]?.focus()
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    event.stopPropagation()
    const prevIndex = currentIndex <= 0 ? links.length - 1 : currentIndex - 1
    links[prevIndex]?.focus()
  } else if (event.key === 'Home') {
    event.preventDefault()
    event.stopPropagation()
    links[0]?.focus()
  } else if (event.key === 'End') {
    event.preventDefault()
    event.stopPropagation()
    links[links.length - 1]?.focus()
  } else if (event.key === 'Tab') {
    // Close on tab out
    isOpen.value = false
  }
}

// Close dropdown when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (
    dropdownButton.value &&
    !dropdownButton.value.contains(target) &&
    dropdownMenu.value &&
    !dropdownMenu.value.contains(target)
  ) {
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
        @keydown="handleButtonKeydown"
        ref="dropdownButton"
        :aria-label="t('Select projection') + ': ' + projectionLabel"
        :aria-expanded="isOpen"
        aria-haspopup="true"
        :aria-controls="isOpen ? 'projection-menu' : undefined"
      >
        <span class="projection-label" aria-hidden="true">{{
          projectionLabel
        }}</span>
        <span class="caret" aria-hidden="true"></span>
      </button>
      <ul
        v-show="isOpen"
        ref="dropdownMenu"
        id="projection-menu"
        class="projection-dropdown"
        role="menu"
        @keydown="handleDropdownKeydown"
        :aria-labelledby="dropdownButton ? 'projection-button' : undefined"
      >
        <li v-for="option in projectionOptions" :key="option.value" role="none">
          <a
            href="#"
            role="menuitem"
            @click.prevent="switchProjection(option)"
            :class="{ active: option.value === selectedProjection.value }"
            :aria-current="
              option.value === selectedProjection.value ? 'true' : undefined
            "
            tabindex="0"
          >
            {{ option.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Mouse coordinates display -->
    <div
      ref="mousePositionContainer"
      class="mouse-position"
      role="status"
      aria-live="polite"
      :aria-label="t('Current coordinates')"
    ></div>
  </div>
</template>

<style scoped>
.projection-selector-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-family: 'DINNextLTPro-Condensed', Arial, sans-serif;
  font-size: 1rem;
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
  font-family: 'DINNextLTPro-Condensed', Arial, sans-serif;
  font-size: 1rem;
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

.projection-button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
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
  margin-left: 2px;
  vertical-align: middle;
  border-bottom: 4px solid;
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
  font-family: 'DINNextLTPro-Condensed', Arial, sans-serif;
  font-size: 1rem;
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
  outline: none;
}

.projection-dropdown li a:focus {
  background-color: var(--color-primary);
  color: white;
}

.projection-dropdown li a.active {
  background-color: var(--color-primary);
  color: white;
}

.mouse-position {
  font-family: 'DINNextLTPro-Condensed', Arial, sans-serif;
  font-size: 1rem;
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
  font-family: 'DINNextLTPro-Condensed', Arial, sans-serif;
  font-size: 1rem;
  color: var(--color-primary);
}
</style>
