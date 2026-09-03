import { App } from 'vue';
import { default as InfoFeatureLayout } from './components/layouts/info-feature-layout.vue';
import { default as LuxTplRoot } from './components/layouts/lux-tpl-root.vue';
import { LuxTplContext } from './context';
export { InfoFeatureLayout, LuxTplRoot };
export { vLuxHtml } from './sanitize-html';
export { default as LuxTplIcon } from './components/common/lux-tpl-icon.vue';
export { LUX_TPL_ICON_PATHS } from './components/common/icons';
export type { LuxTplIconName } from './components/common/icons';
export * from './templates';
export { sortedAttributeEntries, hasAttributes, hasProperty, isEmptyString, isLink, showAttributesByLang, hasValidFID, isFIDValid, getTrustedUrl, getTrustedUrlByLang, joinAttributes, translateAndjoin, formatDate, getMymapsPath, getQRUrlForMyMaps, } from './components/templates/template-utilities';
export { LUX_TPL_CONTEXT, provideLuxTplContext, useLuxTplContext, } from './context';
export type { LuxTplContext, LuxTplConfig, LuxTplUser, LuxTplNotifyType, } from './context';
export { LUX_TPL_I18N, createLuxTplI18n, useLuxTranslation } from './i18n';
export type { LuxTplI18n } from './i18n';
export { createLuxTplI18next, luxTplI18nextOptions, LUX_TPL_NAMESPACES, LUX_TPL_LANGUAGES, } from './i18next-init';
export { hydrateTooltipFallbackTranslations, installTooltipFallbackTranslations, } from './tooltip-fallback';
export type { FeatureJSON, FeatureInfoJSON, GeometryJSON, Attributes, FeatureMeasurement, AttributeEntry, } from './models';
/**
 * Convenience install: registers the layout components globally and provides
 * the template context app-wide. Hosts that cannot install a plugin (the 3D
 * viewer, which shares an app with VC Map) call `provideLuxTplContext()` from a
 * wrapper component's `setup()` instead — both paths are supported.
 */
declare const _default: {
    install(app: App, ctx?: LuxTplContext): void;
};
export default _default;
