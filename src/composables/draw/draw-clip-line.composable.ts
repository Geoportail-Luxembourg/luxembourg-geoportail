import { storeToRefs } from 'pinia'
import { nextTick, onMounted, watch } from 'vue'
import { useTranslation } from 'i18next-vue'
import { useDrawStore } from '@/stores/draw.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import OlInteractionClipLine from '@/services/ol-interaction/ol-interaction-clipline'
import useMap from '../map/map.composable'
import useDrawnFeatures from './drawn-features.composable'

export default function useClipLine() {
  const { t } = useTranslation()
  const drawStore = useDrawStore()
  const map = useMap().getOlMap()
  const { addNotification } = useAlertNotificationsStore()
  const { clipLineActive, queueAddedDrawnFeatures, drawnFeatures, activeFeatureId } = storeToRefs(drawStore)
  const { generateDrawnFeature } = useDrawnFeatures()
  const clipLineInteraction = new OlInteractionClipLine()

  onMounted(() => {
    map.addLayer(clipLineInteraction.overlay)
    map.addInteraction(clipLineInteraction)
    
    // Listen to clickmiss event when user clicks but misses the line
    clipLineInteraction.on('clickmiss', () => {
      // Only show notification if clip mode is actually active
      if (clipLineActive.value) {
        addNotification(
          t(
            'Vous êtes en mode découpage.<br> Veuillez cliquer sur une ligne pour la couper en deux.'
          )
        )
      }
    })
    
    // Listen to modifyend event when a line is cut
    clipLineInteraction.on('modifyend', (evt: any) => {
      const features = evt.features.getArray()
      
      if (features.length >= 3) {
        // features[0] and features[1] are the two new line segments
        // features[2] is the original feature that was removed
        const [feature1, feature2, originalFeature] = features
        
        // Get the original feature ID that was stored before cloning
        const originalFeatureId = originalFeature.get('originalFeatureId')
        
        if (!originalFeatureId) {
          console.error('[ClipLine] Could not find original feature ID')
          return
        }
        
        // Copy properties from original to new features (except id and geometry)
        const originalProps = originalFeature.getProperties()
        Object.keys(originalProps).forEach(key => {
          if (key !== 'geometry' && key !== 'id' && key !== 'originalFeatureId') {
            feature1.set(key, originalProps[key])
            feature2.set(key, originalProps[key])
          }
        })
        
        // Get the draw layer source and remove the original feature immediately
        const drawLayers = map.getAllLayers().filter(
          (layer: any) => layer.get && layer.get('cyLayerType') === 'interactionDrawLayer'
        )
        if (drawLayers.length > 0) {
          const drawLayer = drawLayers[0] as any
          const source = drawLayer.getSource()
          if (source) {
            source.removeFeature(originalFeature)
          }
        }
        
        // Remove the original feature from the store
        drawStore.removeFeature(originalFeatureId)
        
        // Add the two new features to the store
        const drawnFeature1 = generateDrawnFeature(feature1)
        const drawnFeature2 = generateDrawnFeature(feature2)
        
        drawStore.addDrawnFeatureToCollection(drawnFeature1)
        drawStore.addDrawnFeatureToCollection(drawnFeature2)
        
        // Deactivate clip mode after cutting
        clipLineActive.value = false
      }
    })
  })

  watch(clipLineActive, active => {
    clipLineInteraction.setActive(active)

    if (active) {
      addNotification(
        t(
          'Vous êtes en mode découpage.<br> Veuillez cliquer sur une ligne pour la couper en deux.'
        )
      )
    }
  })

  watch(queueAddedDrawnFeatures, drawFeatures => {
    if (drawFeatures.length === 0) return

    nextTick(() => {
      drawFeatures.forEach(f => {
        // Add feature to the interaction's features collection only if clip mode is active
        if (clipLineActive.value) {
          const collection = (clipLineInteraction as any).features_
          if (collection && !collection.getArray().includes(f)) {
            collection.push(f)
          }
        }
      })
      queueAddedDrawnFeatures.value = []
    })
  })

  // Watch for feature selection when clip mode is active
  watch(activeFeatureId, (featureId) => {
    if (!clipLineActive.value || !featureId) return
    
    const collection = (clipLineInteraction as any).features_
    if (!collection) return
    
    // Find the selected feature in ALL drawn features (including MyMaps)
    const selectedFeature = drawnFeatures.value.find(f => f.id === featureId)
    if (selectedFeature && selectedFeature.featureType === 'drawnLine') {
      // Add to collection if not already present
      if (!collection.getArray().includes(selectedFeature)) {
        collection.push(selectedFeature)
      }
    }
  })

  // When clip mode is activated, add the currently selected feature if it's a line
  watch(clipLineActive, (active) => {
    const collection = (clipLineInteraction as any).features_
    if (!collection) return
    
    if (active) {
      // Add currently selected feature if it's a line
      if (activeFeatureId.value) {
        const selectedFeature = drawnFeatures.value.find(f => f.id === activeFeatureId.value)
        if (selectedFeature && selectedFeature.featureType === 'drawnLine') {
          if (!collection.getArray().includes(selectedFeature)) {
            collection.push(selectedFeature)
          }
        }
      }
    } else {
      // Remove all features when deactivating
      collection.clear()
    }
  })

  function toggle(active?: boolean) {
    clipLineActive.value = active ?? !clipLineActive.value
  }

  return {
    toggle,
  }
}
