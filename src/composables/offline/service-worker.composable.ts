import { ref, Ref } from 'vue'

import { createLogger } from '@/lib/logging/namespacedLogger'

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
  const logger = createLogger('SW Composable')
  const swLog = logger.log
  const swWarn = logger.warn
  const swError = logger.error

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
      swError('Failed to get registration:', error)
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
        const timeoutId = setTimeout(() => {
          // Ensure port is closed to avoid leaks
          try {
            messageChannel.port1.close()
          } catch {
            /* ignore */
          }
          resolve({ ...defaultStats, isRegistered: true })
        }, 5000)

        messageChannel.port1.onmessage = event => {
          const { size } = event.data
          clearTimeout(timeoutId)
          try {
            messageChannel.port1.close()
          } catch {
            /* ignore */
          }
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
      })
    } catch (error) {
      swError('Failed to get cache stats:', error)
      return defaultStats
    }
  }

  /**
   * Clear all Service Worker caches
   */
  async function clearCache(): Promise<boolean> {
    if (!isSupported.value) {
      swWarn('Service Worker not supported')
      return false
    }

    try {
      const reg = await getRegistration()
      if (!reg || !reg.active) {
        swWarn('No active Service Worker found')
        return false
      }

      return new Promise<boolean>(resolve => {
        const messageChannel = new MessageChannel()
        const timeoutId = setTimeout(() => {
          swError('Clear cache timeout')
          try {
            messageChannel.port1.close()
          } catch {
            /* ignore */
          }
          resolve(false)
        }, 10000)

        messageChannel.port1.onmessage = event => {
          const { success } = event.data
          clearTimeout(timeoutId)
          if (success) {
            swLog('Cache cleared successfully')
          } else {
            swError('Failed to clear cache:', event.data.error)
          }
          try {
            messageChannel.port1.close()
          } catch {
            /* ignore */
          }
          resolve(success)
        }

        reg.active!.postMessage({ type: 'CLEAR_CACHE' }, [messageChannel.port2])
      })
    } catch (error) {
      swError('Failed to clear cache:', error)
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
        swLog('Service Worker unregistered')
        isRegistered.value = false
        registration.value = null
      }
      return success
    } catch (error) {
      swError('Failed to unregister:', error)
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
        swLog('Service Worker update check completed')
      }
    } catch (error) {
      swError('Failed to update:', error)
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
