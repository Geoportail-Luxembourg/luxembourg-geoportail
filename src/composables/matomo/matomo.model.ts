/**
 * Matomo (Piwik) Analytics Types
 * Based on v3 piwik.js implementation
 */

export interface MatomoTracker {
  push: (args: (string | number | boolean)[]) => void
  trackPageView: (customTitle?: string) => void
  trackEvent: (
    category: string,
    action: string,
    name?: string,
    value?: number
  ) => void
  trackLink: (url: string, linkType: string) => void
  setCustomUrl: (url: string) => void
  setDocumentTitle: (title: string) => void
  setSiteId: (siteId: number) => void
  setTrackerUrl: (url: string) => void
  enableLinkTracking: () => void
  setCustomVariable: (
    index: number,
    name: string,
    value: string,
    scope?: 'visit' | 'page'
  ) => void
}

declare global {
  interface Window {
    _paq?: MatomoTracker
  }
}

/**
 * Mapping des thèmes vers les IDs de sites Matomo
 * Basé sur piwikSiteIdLookup_ de Theme.js (lignes 47-113)
 * Note: map et main utilisent l'ID par défaut de VITE_MATOMO_SITE_ID (défini dans index.html)
 */
export const MATOMO_SITE_IDS: Record<string, number> = {
  eau: 6,
  tourisme: 7,
  emwelt: 8,
  agriculture: 9,
  prof: 10,
  go: 11,
  m: 12, // application mobile
  at: 16,
  map: Number(import.meta.env.VITE_MATOMO_SITE_ID) || 18,
  main: Number(import.meta.env.VITE_MATOMO_SITE_ID) || 18,
  pag: 19,
  cadastre_hertzien: 25,
  atlas_demographique: 29,
  urban_farming: 30,
  logement: 32,
  energie: 40,
  embedded: 44, // mode intégré
  geosciences: 59,
  np_our: 67,
}

/**
 * Thème par défaut pour le fallback Matomo
 */
export const DEFAULT_THEME = 'main'

/**
 * Récupère l'ID de site Matomo en fonction du contexte
 * Reproduit la logique de Theme.js setCurrentTheme()
 */
export function getMatomoSiteId(themeName: string): number {
  let siteId = MATOMO_SITE_IDS[themeName]

  // Check for embedded mode
  if (typeof window !== 'undefined') {
    const urlParams = new URL(window.location.href).searchParams
    if (urlParams.get('embedded')) {
      siteId = MATOMO_SITE_IDS['embedded']
    }
  }

  // Check for app mode (Android/iOS/applogin)
  if (typeof window !== 'undefined') {
    const search = window.location.search
    const isApp =
      search.includes('localforage=android') ||
      search.includes('localforage=ios') ||
      search.includes('applogin=yes')
    if (isApp) {
      siteId = MATOMO_SITE_IDS['m']
    }
  }

  // Fallback to default theme if undefined/null
  if (siteId === undefined || siteId === null) {
    siteId = MATOMO_SITE_IDS[DEFAULT_THEME]
  }

  return siteId
}

/**
 * Catégories d'événements Matomo
 */
export const MATOMO_CATEGORIES = {
  MAP: 'Map',
  LAYER: 'Layer',
  THEME: 'Theme',
  USER: 'User',
  SEARCH: 'Search',
  PRINT: 'Print',
  OFFLINE: 'Offline',
  LIDAR: 'Lidar',
  STREETVIEW: 'Street View',
  BACKGROUND: 'Background',
  THREED: '3D',
  LANGUAGE: 'Language',
} as const

export type MatomoCategory =
  (typeof MATOMO_CATEGORIES)[keyof typeof MATOMO_CATEGORIES]
