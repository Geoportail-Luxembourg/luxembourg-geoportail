<script setup lang="ts">
import { useTemplateRef, watch, ref, nextTick } from 'vue'
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
const {
  activeFeatureId,
  editingFeatureId,
  editStateActive,
  featureEditionDocked,
  drawnFeatures,
} = storeToRefs(drawStore)

const focusedFeatureId = ref<string | number | undefined>()

const sortableFeatures = useTemplateRef<HTMLElement>('sortableFeatures')
let sortElement: ReturnType<typeof useSortable> | undefined = undefined

function onLiFocus(featureId: string | number) {
  focusedFeatureId.value = featureId
}

function onListKeydown(e: KeyboardEvent) {
  // Let Tab navigate naturally - don't intercept it
  if (e.key === 'Tab') return
  if (!['ArrowDown', 'ArrowUp', ' '].includes(e.key)) return

  e.preventDefault()
  e.stopImmediatePropagation()

  if (e.key === ' ') {
    if (focusedFeatureId.value) {
      activeFeatureId.value =
        activeFeatureId.value === focusedFeatureId.value
          ? undefined
          : focusedFeatureId.value
    }
    return
  }

  const currentIdx = features.findIndex(f => f.id === focusedFeatureId.value)
  const validIdx = currentIdx === -1 ? 0 : currentIdx

  if (e.key === 'ArrowDown') {
    const nextIdx = (validIdx + 1) % features.length
    focusedFeatureId.value = features[nextIdx].id
  } else {
    const prevIdx = (validIdx - 1 + features.length) % features.length
    focusedFeatureId.value = features[prevIdx].id
  }

  nextTick(() =>
    document.getElementById(`${idPrefix}-${focusedFeatureId.value}`)?.focus()
  )
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
})
</script>

<template>
  <ul
    class="mx-1 sortable-features"
    ref="sortableFeatures"
    v-if="features.length"
    role="listbox"
    aria-label="Liste des objets dessinés"
    :aria-activedescendant="
      focusedFeatureId ? `${idPrefix}-${focusedFeatureId}` : undefined
    "
    @keydown="onListKeydown"
  >
    <li
      class="lux-drawing-item"
      v-for="feature in features"
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
