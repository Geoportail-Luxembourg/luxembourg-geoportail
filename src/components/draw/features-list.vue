<script setup lang="ts">
import { useTemplateRef, watch, ref, nextTick, onMounted, onUnmounted, onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'

import useSortable from '@/composables/sortable'
import useDrawUtils from '@/composables/draw/draw-utils.composable'
import { useDrawStore } from '@/stores/draw.store'
import {
  DrawnFeature,
  DrawnFeatureId,
} from '@/services/ol-feature/ol-feature-drawn'
import { EditStateActive } from '@/stores/draw.store.model'

import FeatureItem from './feature-item.vue'

// Accept features prop from parent component
const { features, idPrefix } = defineProps<{
  features: DrawnFeature[]
  idPrefix?: string
}>()

const drawStore = useDrawStore()
const drawUtils = useDrawUtils()
const { activeFeatureId, editingFeatureId, editStateActive, featureEditionDocked, drawnFeatures } =
  storeToRefs(drawStore)

const focusedFeatureId = ref<string | number | undefined>()

const sortableFeatures = useTemplateRef('sortableFeatures')
let sortElement: ReturnType<typeof useSortable> | undefined = undefined

function onListFocus() {
  if (!focusedFeatureId.value) {
    focusedFeatureId.value = activeFeatureId.value || (features.length ? features[0].id : undefined)
  }
  // Don't auto-focus child element - let Tab navigation work naturally
}

function onLiFocus(featureId: string | number) {
  focusedFeatureId.value = featureId
}

function onListBlur() {
  console.log('onListBlur called for idPrefix:', idPrefix)
  // Only clear if we're not moving to another element in the same list
  setTimeout(() => {
    const activeElement = document.activeElement
    const isStillInList = activeElement && activeElement.closest('.sortable-features') === sortableFeatures.value
    if (!isStillInList) {
      activeListIdPrefix.value = undefined
      console.log('Cleared activeListIdPrefix')
    }
  }, 0)
}

function onListKeydown(e: KeyboardEvent) {
  // Let Tab navigate naturally - don't intercept it
  if (e.key === 'Tab') return

  let currentIdx = features.findIndex(f => f.id === focusedFeatureId.value)
  if (currentIdx === -1) currentIdx = 0 // If none focused, start from first
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    e.stopImmediatePropagation()
    const nextIdx = (currentIdx + 1) % features.length
    focusedFeatureId.value = features[nextIdx].id
    nextTick(() => document.getElementById(`${idPrefix}-${focusedFeatureId.value}`)?.focus())
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    e.stopImmediatePropagation()
    const prevIdx = (currentIdx - 1 + features.length) % features.length
    focusedFeatureId.value = features[prevIdx].id
    nextTick(() => document.getElementById(`${idPrefix}-${focusedFeatureId.value}`)?.focus())
  } else if (e.key === ' ') {
    e.preventDefault()
    e.stopImmediatePropagation()
    if (focusedFeatureId.value) {
      activeFeatureId.value = activeFeatureId.value === focusedFeatureId.value ? undefined : focusedFeatureId.value
    }
  }
}

function onContinueLine(feature: DrawnFeature) {
  feature.fit()
  drawUtils.continueLine(feature)
}

function onToggleFeatureSub(featureId: string | number, isOpen: boolean) {
  // Only one feature details is displayed at once
  activeFeatureId.value = isOpen ? featureId : undefined
  editingFeatureId.value = undefined
  focusedFeatureId.value = isOpen ? featureId : undefined
  if (isOpen) {
    nextTick(() => {
      document.getElementById(`${idPrefix}-${featureId}`)?.focus()
    })
  }
}

function ontoggleEditFeature(featureId: string | number, isEditing: boolean) {
  if (isEditing) {
    // Already editing this feature? Ignore
    if (editingFeatureId.value === featureId) {
      return
    }
    
    // Set activeFeatureId to sync with draw-select watcher
    activeFeatureId.value = featureId
    focusedFeatureId.value = featureId
    
    const feature = drawnFeatures.value.find(f => f.id === featureId)
    if (feature) {
      editingFeatureId.value = featureId
      editStateActive.value = <EditStateActive>(
        feature.featureType.replace('drawn', 'edit').replace('Continue', '')
      )
    }
  } else {
    // Not editing anything? Ignore
    if (editingFeatureId.value === undefined) {
      return
    }
    
    // Unmark feature when exiting edit mode
    const feature = drawnFeatures.value.find(f => f.id === featureId)
    if (feature) {
      // Feature remains selected and visible
      feature.changed() // Trigger re-render
    }
    
    editingFeatureId.value = undefined
    editStateActive.value = undefined
  }
}

function onSubmitNewConcentricCircle(payload: {
  baseFeature: DrawnFeature
  radius: number
}) {
  const { baseFeature, radius } = payload
  const newDrawnFeature = drawUtils.createConcentricCircle(baseFeature, radius)

  drawStore.addDrawnFeatureToCollection(newDrawnFeature)
  drawStore.selectDrawnFeature(newDrawnFeature)
}

function sortFunction(elements: HTMLCollection) {
  const featureIds = [...elements].map(val => val.id)
  drawStore.reorderFeatures(featureIds)
}

watch(sortableFeatures, elem => {
  if (elem) {
    sortElement = useSortable(elem, {
      onSort: sortFunction,
    })
  } else {
    sortElement?.destroy()
    sortElement = undefined
  }
})</script>

<template>
  <ul
    class="mx-1 sortable-features"
    ref="sortableFeatures"
    v-if="features.length"
    role="listbox"
    aria-label="Liste des objets dessinés"
    :aria-activedescendant="focusedFeatureId ? `${idPrefix}-${focusedFeatureId}` : undefined"
    @keydown="onListKeydown"
  >
    <li
      class="lux-drawing-item"
      v-for="(feature, idx) in features"
      :id="`${idPrefix}-${feature.id}`"
      :key="feature.id"
      role="option"
      :tabindex="activeFeatureId === feature.id ? 0 : -1"
      :aria-selected="activeFeatureId === feature.id"
      @focus="() => onLiFocus(feature.id)"
    >
      <FeatureItem
        :isDocked="featureEditionDocked"
        :isEditing="editingFeatureId === feature.id"
        :isOpen="activeFeatureId === feature.id"
        :feature="<DrawnFeature>feature"
        @toggleFeatureSub="onToggleFeatureSub"
        @toggleEditFeature="ontoggleEditFeature"
        @toggleDock="() => (featureEditionDocked = !featureEditionDocked)"
        @closePopup="() => (featureEditionDocked = false)"
        @clickDelete="(featureId: DrawnFeatureId) => drawStore.removeFeature(featureId)"
        @continueLine="() => onContinueLine(<DrawnFeature>feature)"
        @submitFeature="(feature: DrawnFeature) => drawStore.updateDrawnFeature(feature)"
        @submitNewConcentricCircle="onSubmitNewConcentricCircle"
      />
    </li>
  </ul>
</template>
