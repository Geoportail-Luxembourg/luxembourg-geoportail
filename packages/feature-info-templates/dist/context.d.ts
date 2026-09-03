import { Component, InjectionKey, Ref } from 'vue';
/**
 * Notification severity understood by the templates. The host maps these onto
 * its own notification system (e.g. the geoportail alert store, or the VC Map
 * notifier in the 3D viewer).
 */
export type LuxTplNotifyType = 'info' | 'warning' | 'error';
/** Minimal, host-agnostic view of the authenticated user the templates need. */
export interface LuxTplUser {
    mail?: string;
    roleId?: number;
}
/**
 * All environment-dependent URLs and values the templates need, injected by the
 * host so the templates carry no `import.meta.env` coupling. Every field is
 * optional: a host that does not wire a given URL simply disables the feature
 * that depends on it.
 */
export interface LuxTplConfig {
    /** CASIPO report service base URL (VITE_CASIPO_PROD_URL). */
    casipoUrl?: string;
    /** Forage virtuel report service base URL (VITE_FORAGE_VIRTUEL_PROD_URL). */
    forageVirtuelUrl?: string;
    /** PAG report service base URL (VITE_PAG_PROD_URL). */
    pagUrl?: string;
    /** PDS report service base URL (VITE_PDS_PROD_URL). */
    pdsUrl?: string;
    /** Shop base URL for GML orders (VITE_SHOP_URL). */
    shopUrl?: string;
    /** Shop base URL for IPv6 hosts (VITE_SHOP_IPV6_URL). */
    shopIpv6Url?: string;
    /** Bus schedule widget base URL (VITE_BUS_WIDGET_URL). */
    busWidgetUrl?: string;
    /** Sketch/report PDF download base URL (VITE_DOWNLOAD_PDF_URL). */
    downloadPdfUrl?: string;
    /** Croquis download base URL (VITE_DOWNLOAD_SKETCH_URL). */
    downloadSketchUrl?: string;
    /** Measurement document download base URL (VITE_DOWNLOAD_MEASUREMENT_URL). */
    downloadMeasurementUrl?: string;
    /** Measurement thumbnail base URL (VITE_THUMBNAIL_MEASUREMENT_URL). */
    thumbnailMeasurementUrl?: string;
    /** PAG report download base URL (VITE_DOWNLOAD_PAGREPORT_URL). */
    downloadPagReportUrl?: string;
    /** Generic resource download base URL (VITE_DOWNLOAD_RESOURCE_URL). */
    downloadResourceUrl?: string;
    /** Measurement preview base URL (VITE_DOWNLOAD_PREVIEW_URL). */
    downloadPreviewUrl?: string;
    /** QR code service base URL (VITE_QR_URL). */
    qrUrl?: string;
    /** Legacy v3 API host, used to resolve mymaps resource paths (VITE_V3_API_HOST). */
    v3ApiHost?: string;
    /** Role ids allowed to access the solar economic calculator (parsed from VITE_SOLAR_ECONOMIC_ALLOWED_ROLE_IDS). */
    solarEconomicAllowedRoleIds?: number[];
}
/**
 * The single dependency-injection surface the feature-info templates rely on.
 * Provided by the host via {@link provideLuxTplContext} (or the default Vue
 * plugin `install`), consumed by templates via {@link useLuxTplContext}.
 */
export interface LuxTplContext {
    config: LuxTplConfig;
    /** Currently authenticated user, or `null` when anonymous. Reactive. */
    user: Ref<LuxTplUser | null>;
    /** Emit a notification/toast through the host's notification system. */
    notify: (message: string, type?: LuxTplNotifyType) => void;
    /**
     * Elevation-profile component rendered when a feature has `has_profile`.
     * Left undefined by hosts (e.g. the 3D viewer) that do not support profiles.
     */
    profileComponent?: Component;
    /** Whether a given theme is available in the host. Defaults to always false. */
    isThemeAvailable?: (name: string) => boolean;
}
export declare const LUX_TPL_CONTEXT: InjectionKey<LuxTplContext>;
/** Provide the template context. Call from a component `setup()` in the host. */
export declare function provideLuxTplContext(ctx: LuxTplContext): void;
/** Consume the template context from within a template's `setup()`. */
export declare function useLuxTplContext(): LuxTplContext;
