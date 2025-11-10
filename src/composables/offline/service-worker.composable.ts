import { ref, Ref } from 'vue'

/**
 * Service Worker Management Composable
 *
 * Provides utilities for interacting with the Service Worker:
 * - Check SW registration status
 * - Get cache statistics
 * - Clear cached data
 * - Check if SW is supported
 *
 * Used in offline mode to manage Vector Tiles caching
 */

export interface CacheStats {
  entries: number // Total number of cached resources
  caches: number // Number of cache stores
  isSupported: boolean // Whether SW is supported
  isRegistered: boolean // Whether SW is registered
}

export default function useServiceWorker() {
  const isSupported = ref<boolean>('serviceWorker' in navigator)
  const isRegistered = ref<boolean>(false)
  const registration: Ref<ServiceWorkerRegistration | null> = ref(null)

  /**
   * Get the active Service Worker registration
   */
  async function getRegistration(): Promise<ServiceWorkerRegistration | null> {
    if (!isSupported.value) {
      return null
    }

    try {
      const reg = await navigator.serviceWorker.getRegistration()
      if (reg) {
        registration.value = reg
        isRegistered.value = true
      }
      return reg || null
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[SW Composable] Failed to get registration:', error)
      return null
    }
  }

  /**
   * Get cache statistics from the Service Worker
   */
  async function getCacheStats(): Promise<CacheStats> {
    const defaultStats: CacheStats = {
      entries: 0,
      caches: 0,
      isSupported: isSupported.value,
      isRegistered: false,
    }

    if (!isSupported.value) {
      return defaultStats
    }

    try {
      const reg = await getRegistration()
      if (!reg || !reg.active) {
        return defaultStats
      }

      return new Promise<CacheStats>(resolve => {
        const messageChannel = new MessageChannel()

        messageChannel.port1.onmessage = event => {
          const { size } = event.data
          resolve({
            entries: size?.entries || 0,
            caches: size?.caches || 0,
            isSupported: true,
            isRegistered: true,
          })
        }

        reg.active!.postMessage({ type: 'GET_CACHE_SIZE' }, [
          messageChannel.port2,
        ])

        // Timeout after 5 seconds
        setTimeout(() => {
          resolve({ ...defaultStats, isRegistered: true })
        }, 5000)
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[SW Composable] Failed to get cache stats:', error)
      return defaultStats
    }
  }

  /**
   * Clear all Service Worker caches
   */
  async function clearCache(): Promise<boolean> {
    if (!isSupported.value) {
      // eslint-disable-next-line no-console
      console.warn('[SW Composable] Service Worker not supported')
      return false
    }

    try {
      const reg = await getRegistration()
      if (!reg || !reg.active) {
        // eslint-disable-next-line no-console
        console.warn('[SW Composable] No active Service Worker found')
        return false
      }

      return new Promise<boolean>(resolve => {
        const messageChannel = new MessageChannel()

        messageChannel.port1.onmessage = event => {
          const { success } = event.data
          if (success) {
            // eslint-disable-next-line no-console
            console.log('[SW Composable] Cache cleared successfully')
          } else {
            // eslint-disable-next-line no-console
            console.error(
              '[SW Composable] Failed to clear cache:',
              event.data.error
            )
          }
          resolve(success)
        }

        reg.active!.postMessage({ type: 'CLEAR_CACHE' }, [messageChannel.port2])

        // Timeout after 10 seconds
        setTimeout(() => {
          // eslint-disable-next-line no-console
          console.error('[SW Composable] Clear cache timeout')
          resolve(false)
        }, 10000)
      })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[SW Composable] Failed to clear cache:', error)
      return false
    }
  }

  /**
   * Unregister the Service Worker
   * Warning: This will stop all caching functionality
   */
  async function unregisterServiceWorker(): Promise<boolean> {
    if (!isSupported.value) {
      return false
    }

    try {
      const reg = await getRegistration()
      if (!reg) {
        return false
      }

      const success = await reg.unregister()
      if (success) {
        // eslint-disable-next-line no-console
        console.log('[SW Composable] Service Worker unregistered')
        isRegistered.value = false
        registration.value = null
      }
      return success
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[SW Composable] Failed to unregister:', error)
      return false
    }
  }

  /**
   * Force update the Service Worker to the latest version
   */
  async function updateServiceWorker(): Promise<void> {
    if (!isSupported.value) {
      return
    }

    try {
      const reg = await getRegistration()
      if (reg) {
        await reg.update()
        // eslint-disable-next-line no-console
        console.log('[SW Composable] Service Worker update check completed')
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[SW Composable] Failed to update:', error)
    }
  }

  /**
   * Check if the Service Worker is currently caching VT resources
   * This is useful to show UI indicators
   */
  async function isVTCachingActive(): Promise<boolean> {
    if (!isSupported.value) {
      return false
    }

    const reg = await getRegistration()
    return !!(reg && reg.active)
  }

  /**
   * Format cache size for display
   * Note: SW can't easily get exact byte size, so we show entry count
   */
  function formatCacheStats(stats: CacheStats): string {
    if (!stats.isSupported) {
      return 'Service Worker not supported'
    }
    if (!stats.isRegistered) {
      return 'Service Worker not registered'
    }
    return `${stats.entries} cached resources in ${stats.caches} cache stores`
  }

  return {
    isSupported,
    isRegistered,
    registration,
    getRegistration,
    getCacheStats,
    clearCache,
    unregisterServiceWorker,
    updateServiceWorker,
    isVTCachingActive,
    formatCacheStats,
  }
}
