/**
 * Public API. Pulls in `templates-styles.css` but not the Tailwind directives
 * — those live in `lib-entry.ts`, so source consumers get no duplicate layer.
 */
import './templates-styles.css'

// Dispatcher. The template components themselves are internal.
export * from './templates'

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

// The single host dependency surface.
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

// Lib-owned i18n, so the package needs no i18next-vue.
export { LUX_TPL_I18N, createLuxTplI18n, useLuxTranslation } from './i18n'
export type { LuxTplI18n } from './i18n'
export { createLuxTplI18next } from './i18next-init'
export {
  hydrateTooltipFallbackTranslations,
  installTooltipFallbackTranslations,
} from './tooltip-fallback'

export type {
  FeatureJSON,
  FeatureInfoJSON,
  GeometryJSON,
  Attributes,
  FeatureMeasurement,
  AttributeEntry,
} from './models'
