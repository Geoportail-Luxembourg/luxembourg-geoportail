import './index.css' // Tell Vite to build the CSS with Tailwind

import InfoFeatureLayout from './components/layouts/info-feature-layout.vue'
// Importez tous les autres composants ici

export { InfoFeatureLayout }

// Injection context — the single host dependency surface used by the templates.
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

// i18n — lib-owned translation surface (replaces the i18next-vue dependency).
export { LUX_TPL_I18N, createLuxTplI18n, useLuxTranslation } from './i18n'
export type { LuxTplI18n } from './i18n'

// Export des types pour utilisation publique
export type {
  FeatureJSON,
  FeatureInfoJSON,
  GeometryJSON,
  Attributes,
  FeatureMeasurement,
  AttributeEntry,
} from './models'

// Export d'un plugin Vue pour enregistrement global (optionnel)
import type { App } from 'vue'

const components = { InfoFeatureLayout /*, ... */ }

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  },
}
