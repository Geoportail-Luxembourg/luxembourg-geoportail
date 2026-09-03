import { i18n as I18n, InitOptions } from 'i18next';
/** Namespaces the geoportail translation files are published under. */
export declare const LUX_TPL_NAMESPACES: readonly ["app", "layers", "legends", "server", "tooltips"];
/** Languages the geoportail publishes translations for. */
export declare const LUX_TPL_LANGUAGES: readonly ["de", "en", "fr", "lb"];
/**
 * The exact i18next init contract the templates expect, as used by the
 * geoportail app. Notably `nsSeparator`/`keySeparator` are off: some keys
 * contain `:` and keys are literal strings rather than dotted paths, so leaving
 * the separators on makes i18next fail to find them.
 */
export declare function luxTplI18nextOptions(loadPath: string): InitOptions;
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
export declare function createLuxTplI18next(instance: I18n, loadPath: string, overrides?: InitOptions): Promise<I18n>;
