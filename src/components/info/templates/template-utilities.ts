import { FeatureJSON } from '../feature-info.model'
import { sanitizeUrl } from '@braintree/sanitize-url'

export function prefixKeys(
  attributes: { [key: string]: any },
  prefix: string
): {
  key: string
  value: any
}[] {
  return Object.entries(attributes)
    .filter(([key]) => key !== 'showProfile')
    .map(([key, value]) => ({ key: prefix + key, value }))
}

export function hasAttributes(feature: FeatureJSON): boolean {
  return (
    feature.attributes !== undefined &&
    Object.keys(feature.attributes).length > 0
  )
}

export function isEmpty(value: string | undefined | null): boolean {
  return value === undefined || value === null || value.length === 0
}

export function isLink(value: any): boolean {
  const strValue = String(value).toLowerCase()
  return strValue.startsWith('http://') || strValue.startsWith('https://')
}

export function showAttributesByLang(
  elem: { [key: string]: any },
  layerid: string,
  language: string
): boolean {
  const { key } = elem
  let ok = false

  if (
    layerid === '2407' &&
    (key === 'f_Cl_erosion' ||
      key === 'f_Erosion_kl' ||
      key === 'f_Erosion_Cl' ||
      key === 'f_Erosioun_K')
  ) {
    if (language === 'fr' && key === 'f_Cl_erosion') {
      ok = true
    } else if (language === 'de' && key === 'f_Erosion_kl') {
      ok = true
    } else if (language === 'en' && key === 'f_Erosion_Cl') {
      ok = true
    } else if (language === 'lb' && key === 'f_Erosioun_K') {
      ok = true
    }
  } else if (
    layerid === '2714' &&
    (key === 'f_LABEL_eng' ||
      key === 'f_LC_class_name_fr' ||
      key === 'f_LC_class_name_de' ||
      key === 'f_LC_class_name')
  ) {
    if (language === 'fr' && key === 'f_LC_class_name_fr') {
      ok = true
    } else if (language === 'de' && key === 'f_LC_class_name_de') {
      ok = true
    } else if (language === 'en' && key === 'f_LABEL_eng') {
      ok = true
    } else if (language === 'lb' && key === 'f_LC_class_name') {
      ok = true
    }
  } else if (
    layerid === '2444' &&
    (key === 'f_Betriebsform' ||
      key === 'f_Forme_d_entreprise' ||
      key === 'f_Operation_Form' ||
      key === 'f_Form_vun_Geschaeft')
  ) {
    if (language === 'fr' && key === 'f_Forme_d_entreprise') {
      ok = true
    } else if (language === 'de' && key === 'f_Betriebsform') {
      ok = true
    } else if (language === 'en' && key === 'f_Operation_Form') {
      ok = true
    } else if (language === 'lb' && key === 'f_Form_vun_Geschaeft') {
      ok = true
    }
  } else if (
    key.endsWith('_FR') ||
    key.endsWith('_DE') ||
    key.endsWith('_EN') ||
    key.endsWith('_LU') ||
    key.endsWith('_LB')
  ) {
    if (language === 'fr' && key.endsWith('_FR')) {
      ok = true
    } else if (language === 'de' && key.endsWith('_DE')) {
      ok = true
    } else if (language === 'en' && key.endsWith('_EN')) {
      ok = true
    } else if (
      language === 'lb' &&
      (key.endsWith('_LB') || key.endsWith('_LU'))
    ) {
      ok = true
    }
  } else {
    ok = true
  }

  return ok
}

export function hasValidFID(feature: { fid?: string }): boolean {
  return 'fid' in feature && isFIDValid(feature.fid)
}

export function isFIDValid(fid: string | undefined): boolean {
  if (fid === undefined || fid === null) {
    return false
  }

  const fids = fid.split(',')
  return fids.every(curFid => !!curFid && curFid.split('_').length >= 2)
}

// maybe move to generic utils?
export function getTrustedUrl(url: string): string {
  return sanitizeUrl(url)
}
// TODO: use vue utilities for this

// export function getTrustedUrlByLang(
//   urlFr: string,
//   urlDe: string | null | undefined,
//   urlEn: string | null | undefined,
//   urlLb: string | null | undefined,
//   language: string,
//   sce: SceService
// ): any {
//   switch (language) {
//     case 'fr':
//       return sce.trustAsResourceUrl(urlFr)
//     case 'de':
//       return sce.trustAsResourceUrl(urlDe ?? urlFr)
//     case 'en':
//       return sce.trustAsResourceUrl(urlEn ?? urlFr)
//     case 'lb':
//       return sce.trustAsResourceUrl(urlLb ?? urlFr)
//     default:
//       return sce.trustAsResourceUrl(urlFr)
//   }
// }

// TODO: call v4 exports

// export function exportGpx(
//   feature: Feature,
//   name: string | undefined,
//   isTrack: boolean,
//   map: MapService,
//   appExport: ExportService
// ): void {
//   const encOpt: ExportOptions = {
//     dataProjection: 'EPSG:2169',
//     featureProjection: map.getView().getProjection(),
//   }

//   if (feature.attributes && !feature.properties) {
//     feature.properties = feature.attributes
//   }

//   const activeFeature = new olFormatGeoJSON().readFeature(feature, encOpt)
//   if (name === undefined) {
//     name = 'kml'
//   }
//   appExport.exportGpx([activeFeature], name, isTrack)
// }

// export function exportKml(
//   feature: Feature,
//   name: string | undefined,
//   appExport: ExportService
// ): void {
//   if (name === undefined) {
//     name = 'kml'
//   }
//   appExport.exportKml(feature, name)
// }
