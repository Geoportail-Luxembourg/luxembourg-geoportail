// Each var must be read as a literal `import.meta.env.VITE_*` for Vite to
// replace it statically in the published build.

export function resolveUrl(url: string | undefined, base?: string): string {
  if (!url) {
    return ''
  }
  return base ? new URL(url, base).href : url
}

/**
 * The templates' URLs from the root env files. Relative ones are resolved
 * against `base`, the host's geoportal URL, and stay relative without it.
 */
export function luxTplUrls(base?: string) {
  return {
    casipoUrl: resolveUrl(import.meta.env.VITE_CASIPO_PROD_URL, base),
    forageVirtuelUrl: resolveUrl(
      import.meta.env.VITE_FORAGE_VIRTUEL_PROD_URL,
      base
    ),
    pagUrl: resolveUrl(import.meta.env.VITE_PAG_PROD_URL, base),
    pdsUrl: resolveUrl(import.meta.env.VITE_PDS_PROD_URL, base),
    busWidgetUrl: resolveUrl(import.meta.env.VITE_BUS_WIDGET_URL, base),
    downloadPdfUrl: resolveUrl(import.meta.env.VITE_DOWNLOAD_PDF_URL, base),
    downloadSketchUrl: resolveUrl(
      import.meta.env.VITE_DOWNLOAD_SKETCH_URL,
      base
    ),
    downloadSketchNewUrl: resolveUrl(
      import.meta.env.VITE_DOWNLOAD_SKETCH_NEW_URL,
      base
    ),
    downloadMeasurementUrl: resolveUrl(
      import.meta.env.VITE_DOWNLOAD_MEASUREMENT_URL,
      base
    ),
    thumbnailMeasurementUrl: resolveUrl(
      import.meta.env.VITE_THUMBNAIL_MEASUREMENT_URL,
      base
    ),
    downloadPagReportUrl: resolveUrl(
      import.meta.env.VITE_DOWNLOAD_PAGREPORT_URL,
      base
    ),
    downloadResourceUrl: resolveUrl(
      import.meta.env.VITE_DOWNLOAD_RESOURCE_URL,
      base
    ),
    downloadPreviewUrl: resolveUrl(
      import.meta.env.VITE_DOWNLOAD_PREVIEW_URL,
      base
    ),
    profileUrl: resolveUrl(import.meta.env.VITE_PROFILE_URL, base),
    qrUrl: resolveUrl(import.meta.env.VITE_QR_URL, base),
    v3ApiHost: resolveUrl(import.meta.env.VITE_V3_API_HOST, base),
  }
}

export function parseRoleIds(raw: string | undefined): number[] {
  return (raw || '')
    .split(',')
    .map(id => Number.parseInt(id.trim(), 10))
    .filter(id => !Number.isNaN(id))
}

/** Role ids allowed to access the solar economic calculator. */
export const solarEconomicAllowedRoleIds = parseRoleIds(
  import.meta.env.VITE_SOLAR_ECONOMIC_ALLOWED_ROLE_IDS
)
