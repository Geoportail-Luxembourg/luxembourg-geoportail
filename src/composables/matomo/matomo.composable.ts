/**
 * Matomo Analytics Composable
 * Centralized tracking service for the geoportal application
 *
 * Based on v3 implementation patterns from:
 * - MainController.js
 * - Theme.js
 * - Various controller files
 */

import { watch } from 'vue'
import { useThemeStore } from '@/stores/config.store'
import {
  getMatomoSiteId,
  type MatomoTracker,
  type MatomoCategory,
} from './matomo.model'

class MatomoService {
  private initialized = false
  private themeStore = null as ReturnType<typeof useThemeStore> | null

  /**
   * Get the theme store (lazy initialization)
   */
  private getThemeStore() {
    if (!this.themeStore) {
      this.themeStore = useThemeStore()
    }
    return this.themeStore
  }

  /**
   * Get the Matomo tracker instance
   */
  private get tracker(): MatomoTracker | undefined {
    if (typeof window === 'undefined') return undefined

    // Ensure _paq is an array so pushes are queued until the Matomo script runs.
    // Using the array preserves queued calls made before the tracker is loaded.
    if (!window._paq || !Array.isArray(window._paq)) {
      ;(window as any)._paq = window._paq || []
    }

    return window._paq as unknown as MatomoTracker
  }

  /**
   * Initialize Matomo tracking with current theme
   */
  init() {
    if (this.initialized) return
    this.initialized = true

    // Watch for theme changes and update site ID
    // Based on Theme.js setCurrentTheme() (lines 47-113)
    watch(
      () => this.getThemeStore().themeName,
      newTheme => {
        this.setThemeAndTrack(newTheme)
      },
      { immediate: true }
    )
  }

  /**
   * Set the Matomo site ID based on current theme and track the change
   * Based on Theme.js setCurrentTheme() method
   * Applies embedded/app/fallback logic from v3
   */
  private setThemeAndTrack(themeName: string) {
    const siteId = getMatomoSiteId(themeName)
    if (siteId && this.tracker) {
      this.tracker.push(['setSiteId', siteId])
      this.tracker.push(['setDocumentTitle', themeName])
      this.tracker.push(['trackPageView'])
    }
  }

  /**
   * Track a page view with optional custom title
   * Based on MainController.js lines 1404-1409, 2025-2028
   */
  trackPageView(customTitle?: string) {
    if (!this.tracker) return

    if (customTitle) {
      this.tracker.push(['setDocumentTitle', customTitle])
    }
    this.tracker.push(['trackPageView'])
  }

  /**
   * Track a custom event
   * Generic method for all event tracking
   */
  trackEvent(
    category: MatomoCategory,
    action: string,
    name?: string,
    value?: number
  ) {
    if (!this.tracker) return

    const args: (string | number)[] = ['trackEvent', category, action]
    if (name !== undefined) args.push(name)
    if (value !== undefined) args.push(value)

    this.tracker.push(args)
  }

  /**
   * Track a link/download event
   * Based on PrintController.js lines 622-628
   */
  trackLink(url: string, linkType: 'link' | 'download' = 'link') {
    if (!this.tracker) return
    this.tracker.push(['trackLink', url, linkType])
  }

  // ========== Specific Tracking Methods (based on v3 patterns) ==========

  /**
   * Track layer addition
   * Based on v3 layer add tracking
   * Tracks: 'LayersAdded/{layerName}'
   */
  trackLayerAdd(layerName: string) {
    this.trackPageView(`LayersAdded/${layerName}`)
  }

  /**
   * Track background layer change
   * Based on MainController.js lines 1417-1426
   */
  trackBackgroundLayer(layerName: string) {
    this.trackPageView(`BackgroundAdded/${layerName}`)
  }

  /**
   * Track Lidar panel opening
   * Based on MainController.js lines 1446-1449
   */
  trackLidarOpen() {
    this.trackPageView('openLidarPanel')
  }

  /**
   * Track Lidar graph generation
   * Based on gmf-lidar-panel.ts lines 178-181
   */
  trackLidarGraph() {
    this.trackPageView('LidarGeneratePlot')
  }

  /**
   * Track Lidar CSV export
   * Based on gmf-lidar-panel.ts lines 192-195
   */
  trackLidarExportCsv() {
    this.trackPageView('LidarExportCsv')
  }

  /**
   * Track Lidar PNG export
   * Based on gmf-lidar-panel.ts lines 201-204
   */
  trackLidarExportPng() {
    this.trackPageView('LidarExportPNG')
  }

  /**
   * Track Lidar LAS export
   * Based on gmf-lidar-panel.ts lines 218-221
   */
  trackLidarExportLas() {
    this.trackPageView('LidarExportLAS')
  }

  /**
   * Track 3D activation
   * Based on MainController.js lines 1741-1744
   */
  track3DActivation() {
    this.trackPageView('enable3d')
  }

  /**
   * Track language change
   * Based on MainController.js lines 2057-2061
   * Uses setCustomVariable to track language as a custom dimension
   */
  trackLanguageChange(language: string) {
    if (!this.tracker) return
    // Set language as custom variable (index 1, visit scope)
    this.tracker.push(['setCustomVariable', 1, 'Language', language, 'visit'])
  }

  /**
   * Track Street View opening
   * Based on StreetviewController.js lines 247-252
   */
  trackStreetView() {
    this.trackPageView('activateStreetview')
  }

  /**
   * Track print action
   * Based on PrintController.js lines 622-628
   * Constructs URL: http://{theme}.geoportail.lu/print/{layout}
   */
  trackPrint(layout: string) {
    if (!this.tracker) return

    const theme = this.getThemeStore().themeName
    const normalizedLayout = layout.replace(/ /g, '/')
    const piwikUrl = `http://${theme}.geoportail.lu/print/${normalizedLayout}`

    this.tracker.push(['trackLink', piwikUrl, 'download'])
  }

  /**
   * Track offline download
   * Based on OfflineDownloader.js lines 48-54
   */
  trackOfflineDownload() {
    this.trackPageView('saveOfflineMap')
  }
}

// Export singleton instance
const matomoService = new MatomoService()

/**
 * Use Matomo tracking in your components
 *
 * @example
 * ```typescript
 * const matomo = useMatomo()
 *
 * // Initialize in App.vue
 * matomo.init()
 *
 * // Track events
 * matomo.trackLidarExportCsv()
 * matomo.trackPageView('Custom Page')
 * matomo.trackEvent('Category', 'Action', 'Name', 123)
 * ```
 */
export function useMatomo() {
  return matomoService
}
