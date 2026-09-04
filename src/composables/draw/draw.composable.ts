import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import Draw from 'ol/interaction/Draw'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

import { useDrawStore } from '@/stores/draw.store'
import { DrawnFeature } from '@/services/ol-feature/ol-feature-drawn'
import { olLayerFactoryService } from '@/services/ol-layer/ol-layer-factory.service'
import { Layer } from '@/stores/map.store.model'
import {
  LOCAL_DRAW_LAYER_ID,
  MYMAP_DRAW_LAYER_PREFIX,
} from './draw-layer-sync.composable'
import useDrawInteraction from './draw-interaction.composable'

type DrawInteractions = {
  drawPoint: Draw
  drawLabel: Draw
  drawLine: Draw
  drawCircle: Draw
  drawPolygon: Draw
}

const drawSubLayers = new Map<string, VectorLayer>()

function getGroupKeyId(feature: DrawnFeature): string {
  return feature.map_id
    ? `${MYMAP_DRAW_LAYER_PREFIX}${feature.map_id}`
    : LOCAL_DRAW_LAYER_ID
}

function ensureSubLayer(groupId: string): VectorLayer {
  let subLayer = drawSubLayers.get(groupId)
  if (!subLayer) {
    const layerSpec: Layer = {
      id: groupId,
      name: '',
      layers: '',
      type: 'DRAW',
      imageType: '',
      opacity: 1,
    }
    subLayer = olLayerFactoryService.createOlLayer(layerSpec) as VectorLayer
    drawSubLayers.set(groupId, subLayer)
  }
  return subLayer
}

/**
 * This composable is mainly used to initialize the drawing functionality.
 * It sets watchers draw states and interactions, thus it should only be called once in the whole app.
 */
export default function useDraw() {
  const drawStore = useDrawStore()
  const {
    drawStateActive,
    editStateActive,
    drawnFeatures,
    currentDrawInteraction,
    editingFeatureId,
  } = storeToRefs(drawStore)
  const { createDrawInteraction } = useDrawInteraction()
  const drawInteractions = {
    drawPoint: createDrawInteraction({ type: 'Point' }),
    drawLabel: createDrawInteraction({ type: 'Point' }),
    drawLine: createDrawInteraction({ type: 'LineString' }),
    drawLineContinue: createDrawInteraction({ type: 'LineString' }, 'update'),
    drawCircle: createDrawInteraction({ type: 'Circle' }),
    drawPolygon: createDrawInteraction({ type: 'Polygon' }),
  } as DrawInteractions

  // listener to synchronize ol interaction active states with store state
  watch(drawStateActive, drawStateActive => {
    Object.keys(drawInteractions).forEach(key => {
      const interaction = drawInteractions[key as keyof DrawInteractions]
      // Only activate if we're not in edit mode
      if (
        `${[key as keyof DrawInteractions]}` === `${drawStateActive}` &&
        !editStateActive.value
      ) {
        interaction.setActive(true)
        currentDrawInteraction.value = interaction
      } else {
        interaction.setActive(false)
      }
    })
  })

  // Watch editStateActive to disable draw interactions when entering edit mode
  watch(editStateActive, isEditing => {
    if (isEditing) {
      // Disable all draw interactions when entering edit mode
      Object.values(drawInteractions).forEach(interaction => {
        interaction.setActive(false)
      })
    } else if (drawStateActive.value) {
      // Re-enable the active draw interaction when leaving edit mode
      const key = drawStateActive.value as keyof DrawInteractions
      if (drawInteractions[key]) {
        drawInteractions[key].setActive(true)
        currentDrawInteraction.value = drawInteractions[key]
      }
    }
  })

  watch(
    drawnFeatures,
    drawnFeatures => {
      addFeaturesToSource(
        drawnFeatures as DrawnFeature[],
        editingFeatureId.value
      )
    },
    { flush: 'post' }
  )

  // Also watch editingFeatureId to refresh the draw layer when entering/exiting edit mode
  watch(editingFeatureId, () => {
    addFeaturesToSource(
      drawnFeatures.value as DrawnFeature[],
      editingFeatureId.value
    )
  })

  function addFeaturesToSource(
    features: DrawnFeature[],
    excludeFeatureId?: string | number
  ) {
    // Group features by their group key
    const groupedFeatures = new Map<string, DrawnFeature[]>()
    for (const f of features) {
      const groupId = getGroupKeyId(f)
      if (!groupedFeatures.has(groupId)) {
        groupedFeatures.set(groupId, [])
      }
      groupedFeatures.get(groupId)!.push(f)
    }

    // Filter out the feature being edited (it's in editSource)
    const filteredGroupedFeatures = new Map<string, DrawnFeature[]>()
    for (const [groupId, groupFeatures] of groupedFeatures) {
      filteredGroupedFeatures.set(
        groupId,
        excludeFeatureId
          ? groupFeatures.filter(f => f.id !== excludeFeatureId)
          : groupFeatures
      )
    }

    // Sync features to each sub-layer
    for (const [groupId, groupFeatures] of filteredGroupedFeatures) {
      if (groupFeatures.length === 0) continue

      const subLayer = ensureSubLayer(groupId)
      const source = subLayer.getSource() as VectorSource
      const currentFeatures = source?.getFeatures() || []

      // Remove features that shouldn't be there
      currentFeatures.forEach(f => {
        const drawnF = f as DrawnFeature
        if (!groupFeatures.find(feat => feat.id === drawnF.id)) {
          source?.removeFeature(f)
        }
      })

      // Add features that should be there but aren't
      groupFeatures.forEach(f => {
        if (!currentFeatures.find(feat => (feat as DrawnFeature).id === f.id)) {
          f.changed()
          source?.addFeature(f)
        }
      })
    }

    // Clear sub-layers that no longer have any features in the group
    for (const [groupId, subLayer] of drawSubLayers) {
      if (
        !filteredGroupedFeatures.has(groupId) ||
        filteredGroupedFeatures.get(groupId)!.length === 0
      ) {
        const source = subLayer.getSource() as VectorSource
        source?.clear()
      }
    }
  }

  return {
    drawInteractions,
  }
}
