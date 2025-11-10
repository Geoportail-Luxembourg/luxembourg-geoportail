/**
 * Service Worker Type Definitions
 *
 * Extends global types for Service Worker functionality
 */

interface ServiceWorkerMessage {
  type: 'CLEAR_CACHE' | 'GET_CACHE_SIZE' | 'SKIP_WAITING'
}

interface ServiceWorkerResponse {
  success?: boolean
  error?: string
  size?: {
    entries: number
    caches: number
  }
}

// Extend ServiceWorkerGlobalScope for SW file context
declare const self: ServiceWorkerGlobalScope

// Extend Window for custom SW events
interface WindowEventMap {
  'sw-update-available': CustomEvent
}
