import { watch, watchEffect, WatchStopHandle } from 'vue'
import { storeToRefs } from 'pinia'

import { useMapStore } from '@/stores/map.store'
import { Layer } from '@/stores/map.store.model'
import { useThemeStore } from '@/stores/config.store'
import i18next from 'i18next'
import { useAppStore } from '@/stores/app.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { useMatomo } from '@/composables/matomo/matomo.composable'
import useLayers from '@/composables/layers/layers.composable'
import useThemes from '@/composables/themes/themes.composable'
import { remoteLayersService } from '@/services/remote-layers/remote-layers.service'

import {
  SP_KEY_LAYERS,
  SP_KEY_TIME_SELECTIONS,
  SP_KEY_OPACITIES,
  SP_KEY_V2_BGLAYEROPACITY,
  SP_KEY_V2_LAYERSINDICIES,
  SP_KEY_V2_LAYERSOPACITIES,
  SP_KEY_V2_LAYERSVISIBILITY,
  StatePersistorService,
} from './state-persistor.model'
import { storageLayerMapper } from './state-persistor-layer.mapper'
import { storageHelper } from './storage/storage.helper'

const STORAGE_SEPARATOR = '-'

class StatePersistorLayersService implements StatePersistorService {
  bootstrap() {
    const themeStore = useThemeStore()
    let stop: WatchStopHandle
    // eslint-disable-next-line prefer-const
    stop = watchEffect(() => {
      if (themeStore.themes) {
        this.restore()
        this.persist()
        stop && stop() // test if exists, for HMR support
      }
    })
  }

  persist() {
    const mapStore = useMapStore()
    const { layers } = storeToRefs(mapStore)

    watch(
      layers,
      (value, oldValue) => {
        if (oldValue !== value) {
          storageHelper.setValue(
            SP_KEY_LAYERS,
            value,
            storageLayerMapper.layersToLayerIds
          )

          storageHelper.setValue(
            SP_KEY_OPACITIES,
            value,
            storageLayerMapper.layersToLayerOpacities
          )

          storageHelper.setValue(
            SP_KEY_TIME_SELECTIONS,
            value,
            storageLayerMapper.layersToLayerTimes
          )
        }
      },
      { immediate: true }
    )
  }

  restore() {
    const version = storageHelper.getInitialVersion()
    const mapStore = useMapStore()
    const layers = storageHelper.getValue(
      SP_KEY_LAYERS,
      version === 2
        ? storageLayerMapper.layerNamesToLayersV2
        : storageLayerMapper.layerIdsToLayers
    )

    this.restoreLayersOpacities(layers, version)
    this.restoreLayersTimes(layers)

    if (version === 2) {
      storageHelper.removeItem(SP_KEY_V2_BGLAYEROPACITY)
      storageHelper.removeItem(SP_KEY_V2_LAYERSINDICIES)
      storageHelper.removeItem(SP_KEY_V2_LAYERSOPACITIES)
      storageHelper.removeItem(SP_KEY_V2_LAYERSVISIBILITY)
    }

    const layersToAdd = (layers?.filter(layer => layer) as Layer[]) || []
    mapStore.addLayers(...layersToAdd)

    // Track initial layers in Matomo (restored from URL/storage)
    const matomo = useMatomo()
    layersToAdd.forEach(layer => {
      matomo.trackLayerAdd(layer.name)
    })

    // If some layers from the URL could not be resolved (e.g. they belong to
    // private themes only available after authentication), open the login form
    // and watch for a themes reload (triggered after a successful login) so we
    // can add the missing layers once the user is authenticated.
    if (version !== 2) {
      const rawLayersValue = <string | null>(
        storageHelper.getValue(SP_KEY_LAYERS)
      )
      if (rawLayersValue) {
        const requestedIds = rawLayersValue
          .split('%2D')
          .join('-')
          .split(STORAGE_SEPARATOR)
          .filter(id => !remoteLayersService.isRemoteLayer(id))
          .map(id => parseInt(id, 10))
          .filter(id => !isNaN(id))

        const resolvedIds = new Set(layersToAdd.map(l => l.id))
        const missingIds = requestedIds.filter(id => !resolvedIds.has(id))

        if (missingIds.length > 0) {
          // Open auth form so the user can log in
          useAppStore().toggleAuthFormOpen(true)

          // Notify the user that some layers require authentication
          useAlertNotificationsStore().addNotification(
            i18next.t(
              'Certaines couches sont protégées. Veuillez vous connecter avec un utilisateur disposant les droits de visualiser cette couche.'
            ),
            AlertNotificationType.WARNING
          )

          // Watch for themes to reload after login and add the still-missing layers
          const themeStore = useThemeStore()
          const stopWatch = watch(
            () => themeStore.themes,
            themes => {
              if (!themes) return
              // themes has changed (reloaded after login) — try to resolve the missing layers
              const themesComposable = useThemes()
              const layersComposable = useLayers()
              const nowResolved: Layer[] = []

              for (const id of missingIds) {
                const found = themesComposable.findById(id)
                if (found) {
                  const initialised = layersComposable.initLayer(
                    found as unknown as Layer
                  )
                  if (initialised) nowResolved.push(initialised)
                }
              }

              if (nowResolved.length > 0) {
                // Restore opacities for the newly added layers using the
                // original opacities string from the URL, aligned by position.
                const rawOpacities = <string | null>(
                  storageHelper.getValue(SP_KEY_OPACITIES)
                )
                const rawTimes = <string | null>(
                  storageHelper.getValue(SP_KEY_TIME_SELECTIONS)
                )
                // Reconstruct full ordered list (resolved + newly resolved) to
                // apply opacities/times at their original URL index positions.
                const allRequestedIds = rawLayersValue
                  .split('%2D')
                  .join('-')
                  .split(STORAGE_SEPARATOR)
                const opacities = rawOpacities
                  ? rawOpacities.split(STORAGE_SEPARATOR).map(Number)
                  : []
                const times = rawTimes ? rawTimes.split('--') : []

                nowResolved.forEach(layer => {
                  const idx = allRequestedIds.indexOf(String(layer.id))
                  if (idx !== -1) {
                    if (opacities[idx] !== undefined)
                      layer.opacity = opacities[idx]
                    if (times[idx]) {
                      this.restoreLayerTime(layer, times[idx])
                    }
                  }
                })

                mapStore.addLayers(...nowResolved)
                const matomo = useMatomo()
                nowResolved.forEach(l => matomo.trackLayerAdd(l.name))
              }

              stopWatch && stopWatch()
            }
          )
        }
      }
    }
  }

  restoreLayersOpacities(layers: (Layer | undefined)[], version: number) {
    const opacities =
      version === 2
        ? this.getOpacitiesFromStorageV2()
        : this.getOpacitiesFromStorage()

    if (opacities.length) {
      layers?.forEach(
        (layer, index) => layer && (layer.opacity = opacities[index] ?? 1)
      )
    }
  }

  restoreLayersTimes(layers: (Layer | undefined)[]) {
    const times = storageHelper.getValue(
      SP_KEY_TIME_SELECTIONS,
      storageLayerMapper.layerTimesToStrings
    )

    if (times.length) {
      layers?.forEach(
        (layer, index) =>
          layer && times[index] && this.restoreLayerTime(layer, times[index])
      )
    }
  }

  restoreLayerTime(layer: Layer, time: string) {
    // Legacy permalinks may contain double-encoded characters (e.g. %253A instead of :).
    // URLSearchParams.get() decodes once, leaving %3A; decode again to obtain a valid ISO date.
    let decodedTime = time
    try {
      if (/%[0-9A-Fa-f]{2}/.test(decodedTime)) {
        decodedTime = decodeURIComponent(decodedTime)
      }
    } catch {
      // If decoding fails, fall back to the original string
    }

    const defaultTimes = decodedTime.split('/')

    // Use min and max default values to restore previous state
    // Guard against empty strings coming from a misaligned permalink (e.g. a layer
    // that has since been removed shifts the time segments for remaining layers).
    if (defaultTimes[0]) layer.currentTimeMinValue = defaultTimes[0]
    if (defaultTimes[1]) layer.currentTimeMaxValue = defaultTimes[1]
  }

  getOpacitiesFromStorage() {
    return storageHelper.getValue(
      SP_KEY_OPACITIES,
      storageLayerMapper.layersOpacitiesToNumbers
    )
  }

  getOpacitiesFromStorageV2() {
    const opacities = storageHelper.getValue(
      SP_KEY_V2_LAYERSOPACITIES,
      storageLayerMapper.layersOpacitiesToNumbersV2
    )

    const visibility = storageHelper.getValue(
      SP_KEY_V2_LAYERSVISIBILITY,
      storageLayerMapper.layersVisibilitiesToBooleansV2
    )

    return opacities
      .map((opacity, index) => (visibility[index] ? opacity : 0))
      .reverse()
  }
}

export const statePersistorLayersService = new StatePersistorLayersService()
