/**
 * Public API of `@geoportallux/feature-info-templates`.
 *
 * Note this entry pulls in `templates-styles.css` (plain CSS) but NOT the
 * Tailwind directives — those live in `lib-entry.ts`, which is what the package
 * build compiles. A host that consumes these sources through its own Tailwind
 * pipeline (the geoportail app) therefore gets no duplicate utility layer.
 */
import './templates-styles.css'

import type { App } from 'vue'

// --- Layouts -----------------------------------------------------------------
import InfoFeatureLayout from './components/layouts/info-feature-layout.vue'
import LuxTplRoot from './components/layouts/lux-tpl-root.vue'

export { InfoFeatureLayout, LuxTplRoot }

// --- Icons — inline SVG, no icon font required by the host --------------------
export { default as LuxTplIcon } from './components/common/lux-tpl-icon.vue'
export { LUX_TPL_ICON_PATHS } from './components/common/icons'
export type { LuxTplIconName } from './components/common/icons'

// --- Templates + dispatcher --------------------------------------------------
// Exports every template component by name, plus `luxTplTemplates` and
// `getTemplateComponent` — the selection logic both hosts share.
export * from './templates'

// --- Template helpers --------------------------------------------------------
export {
  sortedAttributeEntries,
  hasAttributes,
  hasProperty,
  isEmptyString,
  isLink,
  showAttributesByLang,
  hasValidFID,
  isFIDValid,
  getTrustedUrl,
  getTrustedUrlByLang,
  joinAttributes,
  translateAndjoin,
  formatDate,
  getMymapsPath,
  getQRUrlForMyMaps,
} from './components/templates/template-utilities'

// --- Injection context — the single host dependency surface ------------------
export {
  LUX_TPL_CONTEXT,
  provideLuxTplContext,
  useLuxTplContext,
} from './context'
export type {
  LuxTplContext,
  LuxTplConfig,
  LuxTplUser,
  LuxTplNotifyType,
} from './context'

// --- i18n — lib-owned translation surface (replaces the i18next-vue dep) -----
export { LUX_TPL_I18N, createLuxTplI18n, useLuxTranslation } from './i18n'
export type { LuxTplI18n } from './i18n'
export {
  createLuxTplI18next,
  luxTplI18nextOptions,
  LUX_TPL_NAMESPACES,
  LUX_TPL_LANGUAGES,
} from './i18next-init'
export {
  hydrateTooltipFallbackTranslations,
  installTooltipFallbackTranslations,
} from './tooltip-fallback'

// --- Models ------------------------------------------------------------------
export type {
  FeatureJSON,
  FeatureInfoJSON,
  GeometryJSON,
  Attributes,
  FeatureMeasurement,
  AttributeEntry,
} from './models'

// --- Optional Vue plugin -----------------------------------------------------
import type { LuxTplContext } from './context'
import { LUX_TPL_CONTEXT } from './context'

const components = { InfoFeatureLayout, LuxTplRoot }

/**
 * Convenience install: registers the layout components globally and provides
 * the template context app-wide. Hosts that cannot install a plugin (the 3D
 * viewer, which shares an app with VC Map) call `provideLuxTplContext()` from a
 * wrapper component's `setup()` instead — both paths are supported.
 */
export default {
  install(app: App, ctx?: LuxTplContext) {
    for (const [name, component] of Object.entries(components)) {
      app.component(name, component)
    }
    if (ctx) {
      app.provide(LUX_TPL_CONTEXT, ctx)
    }
  },
}
