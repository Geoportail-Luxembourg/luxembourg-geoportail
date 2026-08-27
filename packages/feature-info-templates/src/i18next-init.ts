import type { i18n as I18n, InitOptions } from 'i18next'

import { installTooltipFallbackTranslations } from './tooltip-fallback'

/** Namespaces the geoportail translation files are published under. */
export const LUX_TPL_NAMESPACES = [
  'app',
  'layers',
  'legends',
  'server',
  'tooltips',
] as const

/** Languages the geoportail publishes translations for. */
export const LUX_TPL_LANGUAGES = ['de', 'en', 'fr', 'lb'] as const

/**
 * The exact i18next init contract the templates expect, as used by the
 * geoportail app. Notably `nsSeparator`/`keySeparator` are off: some keys
 * contain `:` and keys are literal strings rather than dotted paths, so leaving
 * the separators on makes i18next fail to find them.
 */
export function luxTplI18nextOptions(loadPath: string): InitOptions {
  return {
    lng: 'fr',
    debug: false,
    defaultNS: 'app',
    fallbackNS: 'app',
    returnEmptyString: false,
    supportedLngs: [...LUX_TPL_LANGUAGES],
    ns: [...LUX_TPL_NAMESPACES],
    fallbackLng: 'en',
    backend: { loadPath },
    // ! force separator off because some i18n keys have ':'
    nsSeparator: false,
    keySeparator: false,
  }
}

/**
 * Initialise an i18next instance for the feature-info templates and hydrate the
 * `tooltips` namespace from `app` (see {@link installTooltipFallbackTranslations}).
 *
 * For hosts that do not already run i18next — the 3D viewer plugin. The
 * geoportail keeps its own init in `src/main.ts` and passes that instance to
 * `createLuxTplI18n` instead.
 *
 * The caller supplies the instance so it stays in control of the backend
 * plugin, e.g.:
 *
 * ```ts
 * import i18next from 'i18next'
 * import backend from 'i18next-http-backend'
 *
 * await createLuxTplI18next(i18next.use(backend), '/assets/locales/{{ns}}.{{lng}}.json')
 * ```
 */
export async function createLuxTplI18next(
  instance: I18n,
  loadPath: string,
  overrides: InitOptions = {}
): Promise<I18n> {
  await instance.init({ ...luxTplI18nextOptions(loadPath), ...overrides })
  installTooltipFallbackTranslations(instance)
  return instance
}
