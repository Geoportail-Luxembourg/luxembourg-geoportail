import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { useThemeStore } from '@/stores/config.store'
import useBackgroundLayer from '@/composables/background-layer/background-layer.composable'

import { SP_KEY_BGLAYER, SP_KEY_LAYERS } from './state-persistor.model'
import useLayerMapper from './state-persistor-layer.mapper'
import useStorage from './storage/storage.composable'

export default function useStatePersistor() {
    const mapStore = useMapStore()
    const themeStore = useThemeStore()
    const storage = useStorage()
    const layerMapper = useLayerMapper()
    const { setMapBackground } = useBackgroundLayer()
    const { bgLayer, layers } = storeToRefs(mapStore)

    function bootstrapLayers() {
        let stop: WatchStopHandle
        stop = watchEffect(() => {
            if (themeStore.themes) {
                loadLayersFromStorage()
                stop && stop() // test if exists, for HMR support
            }
        })

        bootstrapLayersStorage()
    }

    function bootstrapLayersStorage() {
        watch(layers, (value, oldValue) => {
            if (oldValue !== value) {
                storage.setValue(
                    SP_KEY_LAYERS,
                    value,
                    layerMapper.layersToStorage
                )
            }
        })
    }

    function bootstrapBgLayer() {
        let stop: WatchStopHandle
        stop = watchEffect(() => {
            if (themeStore.bgLayers) {
                loadBgLayerFromStorage()
                stop && stop() // test if exists, for HMR support
            }
        })

        bootstrapBgLayerStorage()
    }

    function bootstrapBgLayerStorage() {
        watch(bgLayer, (value, oldValue) => {
            if (oldValue !== value) {
                storage.setValue(
                    SP_KEY_BGLAYER,
                    value, // FIXME: No overload matches this call.
                    layerMapper.bgLayerToStorage
                )
            }
        })
    }

    function loadLayersFromStorage() {
        const layers = storage.getValue(
            SP_KEY_LAYERS,
            layerMapper.layerIdsToLayersMapper
        ) as Layer[]

        mapStore.addLayers(...layers)
    }

    function loadBgLayerFromStorage() {
        const bgLayer = storage.getValue(
            SP_KEY_BGLAYER,
            layerMapper.bgLayerIdToBgLayerMapper
        )

        // TODO: particular case when bg blank
        if (bgLayer) {
            setMapBackground(bgLayer)
        }
    }

    return {
        bootstrapLayers,
        bootstrapBgLayer,
    }
}