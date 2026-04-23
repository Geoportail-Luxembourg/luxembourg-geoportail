// src/composables/network/network.composable.ts
import { ref } from 'vue'
import { useAppStore } from '@/stores/app.store'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { useTranslation } from 'i18next-vue'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'
import { createLogger } from '@/lib/logging/namespacedLogger'

export default function useNetwork() {
  const appStore = useAppStore()
  const alertStore = useAlertNotificationsStore()
  const { t } = useTranslation()
  const wasOffline = ref(false)
  let previousFocusElement: HTMLElement | null = null
  let connectivityProbeInterval: ReturnType<typeof setInterval> | undefined
  let isConnectivityProbeRunning = false
  const connectivityProbeIntervalMs = 10_000
  const { log: swLog } = createLogger('SW')

  // Set initial state IMMEDIATELY - critical for page reload while offline
  // Must execute before template renders to show correct offline UI on first load
  appStore.isOffLine = !navigator.onLine

  /**
   * Check if an element will be hidden when going offline
   */
  const willBeHiddenOffline = (element: Element): boolean => {
    // Check if element or any parent has v-if="!isOffLine" which will hide it
    let current: Element | null = element
    while (current) {
      // Check for data-cy attributes of tools that are hidden offline
      const dataCy = current.getAttribute('data-cy')
      if (dataCy) {
        const hiddenTools = [
          'infoOpenClose',
          'legendsOpenClose',
          'printOpenClose',
          'shareOpenClose',
          'feedbackOpenClose',
        ]
        if (hiddenTools.includes(dataCy)) {
          return true
        }
      }
      current = current.parentElement
    }
    return false
  }

  /**
   * Find a safe element to focus on (one that won't be hidden)
   */
  const findSafeFocusTarget = (): HTMLElement | null => {
    // Try to focus on the drawing button (always visible)
    const drawButton = document.querySelector(
      '[data-cy="drawOpenClose"]'
    ) as HTMLElement
    if (drawButton) return drawButton

    // Fallback to the map container
    const mapContainer = document.querySelector('.map-wrapper') as HTMLElement
    return mapContainer
  }

  const handleOnline = () => {
    appStore.isOffLine = false

    // Restore focus if we saved it
    if (previousFocusElement && document.contains(previousFocusElement)) {
      // Wait for DOM to update
      setTimeout(() => {
        previousFocusElement?.focus()
        previousFocusElement = null
      }, 100)
    }

    if (wasOffline.value) {
      alertStore.addNotification(
        t('Connection restored'),
        AlertNotificationType.INFO,
        3000
      )
      wasOffline.value = false
    }
  }

  const handleOffline = () => {
    swLog('[Network] Going OFFLINE - navigator.onLine:', navigator.onLine)
    appStore.isOffLine = true
    swLog('[Network] Set appStore.isOffLine to:', appStore.isOffLine)
    wasOffline.value = true

    // Save current focus and move it to a safe location if needed
    const activeElement = document.activeElement as HTMLElement
    if (activeElement && activeElement !== document.body) {
      if (willBeHiddenOffline(activeElement)) {
        // Save reference to restore later
        previousFocusElement = activeElement

        // Move focus to a safe element
        const safeFocus = findSafeFocusTarget()
        if (safeFocus) {
          // Wait for DOM to update
          setTimeout(() => {
            safeFocus.focus()
          }, 100)
        }
      }
    }
  }

  const runConnectivityProbe = async () => {
    if (isConnectivityProbeRunning) {
      return
    }

    isConnectivityProbeRunning = true

    const probeUrl =
      import.meta.env.VITE_PING_URL || `${import.meta.env.BASE_URL}favicon.ico`
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000)

    try {
      const resp = await fetch(probeUrl, {
        method: 'HEAD',
        cache: 'no-store',
        signal: controller.signal,
      })

      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`)
      }

      swLog('[Network] Connectivity test: ONLINE')
      if (appStore.isOffLine) {
        swLog('[Network] Correcting state to online')
        handleOnline()
      }
    } catch (error) {
      swLog(
        '[Network] Connectivity test: OFFLINE',
        error instanceof Error ? error.message : String(error)
      )
      // Do NOT override navigator.onLine=true: a probe failure can be caused
      // by the service worker, a slow network, or a transient error — not a
      // real disconnection. Trust the browser's own connectivity signal.
      if (!appStore.isOffLine && !navigator.onLine) {
        swLog('[Network] Correcting state to offline')
        handleOffline()
      }
    } finally {
      clearTimeout(timeoutId)
      isConnectivityProbeRunning = false
    }
  }

  const initialize = () => {
    // Set initial state immediately - critical for page load while offline
    swLog('[Network] Initialize - navigator.onLine:', navigator.onLine)
    // The composable performs an "immediate" assignment at instantiation
    // to ensure the UI shows the correct offline state before the
    // component mounts. To avoid a duplicated write/race between that
    // early assignment and this initialize() call, only update the
    // store here if the desired state differs from the current one.
    const desiredState = !navigator.onLine
    if (appStore.isOffLine !== desiredState) {
      appStore.isOffLine = desiredState
      swLog('[Network] Set initial appStore.isOffLine to:', appStore.isOffLine)
    } else {
      swLog('[Network] appStore.isOffLine already set to:', appStore.isOffLine)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Initial check - show notification if starting offline
    if (!navigator.onLine) {
      wasOffline.value = true
    }

    // Double-check after a short delay - navigator.onLine can be unreliable immediately after page load
    setTimeout(async () => {
      swLog('[Network] Delayed check - navigator.onLine:', navigator.onLine)
      // Only run the probe if the browser itself also suspects offline.
      // This avoids false positives caused by a slow/intercepted probe request
      // when navigator.onLine is already true.
      if (!navigator.onLine) {
        await runConnectivityProbe()
      }
    }, 100)

    // Only run the periodic probe when we're already offline, to attempt recovery.
    // When online, we rely on the native 'offline' browser event instead.
    connectivityProbeInterval = setInterval(() => {
      if (appStore.isOffLine) {
        void runConnectivityProbe()
      }
    }, connectivityProbeIntervalMs)
  }

  const cleanup = () => {
    window.removeEventListener('online', handleOnline)
    window.removeEventListener('offline', handleOffline)
    if (connectivityProbeInterval) {
      clearInterval(connectivityProbeInterval)
      connectivityProbeInterval = undefined
    }
  }

  return {
    initialize,
    cleanup,
  }
}
