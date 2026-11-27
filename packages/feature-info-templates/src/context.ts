import { inject, provide, ref, type InjectionKey, type Ref } from 'vue'
import type { FeatureJSON } from './models'

/**
 * Notification severity understood by the templates. The host maps these onto
 * its own notification system (e.g. the geoportail alert store, or the VC Map
 * notifier in the 3D viewer).
 */
export type LuxTplNotifyType = 'info' | 'warning' | 'error'

/** Minimal, host-agnostic view of the authenticated user the templates need. */
export interface LuxTplUser {
  mail?: string
  roleId?: number
}

/**
 * The single dependency-injection surface the feature-info templates rely on.
 * Provided by the host via {@link provideLuxTplContext}, consumed by templates
 * via {@link injectLuxTplContext}.
 */
export interface LuxTplContext {
  /**
   * 2D geoportal URL, for map links (`?map_id=`) and as the base of the
   * relative URLs from the env; unset, they stay relative to the host.
   */
  geoportalUrl?: string
  /** Currently authenticated user, or `null` when anonymous. Reactive. */
  user: Ref<LuxTplUser | null>
  /** Emit a notification/toast through the host's notification system. */
  notify: (message: string, type?: LuxTplNotifyType) => void
  /**
   * The host map's part of the elevation profile shown for features with
   * `has_profile`. Hosts without it show no profile.
   */
  profileMapAdapter?: LuxTplProfileMapAdapter
  /** Direct link to a feature from its fid (the 2D `fid` param); unset hides the link. */
  featureLink?: (fid: string) => string
  /** Writes a feature as KML or GPX; unset hides the profile's export buttons. */
  exportFeature?: (feature: FeatureJSON, format: 'kml' | 'gpx') => void
  /** Whether a given theme is available in the host. Defaults to always false. */
  isThemeAvailable?: (name: string) => boolean
}

/** Coordinates are EPSG:2169, like the profile. */
export interface LuxTplProfileMapAdapter {
  /** Shows the profile position marker; undefined hides it. */
  setPosition(xy?: number[]): void
  /**
   * Calls back on pointer moves over the map with the position and the
   * metres per pixel there. Returns the unlisten function.
   */
  onPointerMove(cb: (xy: number[], resolution: number) => void): () => void
  /** EPSG:2169 → lon/lat, for the CSV. */
  toLonLat(xy: number[]): number[]
}

export const LUX_TPL_CONTEXT: InjectionKey<LuxTplContext> =
  Symbol('lux-tpl-context')

/**
 * Fallback used when no host provided a context. Keeps templates rendering
 * (rather than throwing) in isolation, e.g. in unit tests or Storybook.
 */
const fallbackContext: LuxTplContext = {
  user: ref(null),
  notify: () => {},
}

/** Provide the template context. Call from a component `setup()` in the host. */
export function provideLuxTplContext(ctx: LuxTplContext): void {
  provide(LUX_TPL_CONTEXT, ctx)
}

/** Consume the template context from within a template's `setup()`. */
export function injectLuxTplContext(): LuxTplContext {
  return inject(LUX_TPL_CONTEXT, fallbackContext)
}
