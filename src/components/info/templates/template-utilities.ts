import { useTranslation } from 'i18next-vue'
import {
  AttributeEntry,
  Attributes,
  FeatureJSON,
} from '@/services/info/feature-info.model'
import { sanitizeUrl } from '@braintree/sanitize-url'
import { useThemeStore } from '@/stores/config.store'
import { storeToRefs } from 'pinia'

export function sortedAttributeEntries(
  attributes: Attributes,
  ordered: boolean,
  prefix: string = 'f_'
): AttributeEntry[] {
  return Object.entries(attributes)
    .filter(([key]) => key !== 'showProfile')
    .map(([key, value]) => ({ key: prefix + key, value }))
    .sort((a, b) => (ordered ? 0 : a.key.localeCompare(b.key)))
}

export function hasAttributes(feature: FeatureJSON): boolean {
  return (
    feature.attributes !== undefined &&
    Object.keys(feature.attributes).length > 0
  )
}
/**
 * Check if the feature has a property with the given key and a minimum length.
 * @param key The property key to check.
 * @param feature The feature to check against.
 * @param minLength The minimum length of the property value (default is 0).
 * @returns True if the property exists and its value length is greater than minLength, false otherwise.
 * */
export function hasProperty(
  key: string,
  feature: FeatureJSON,
  minLength: number
): boolean {
  if (minLength == undefined) {
    minLength = 0
  }
  return (
    key in feature.attributes &&
    ('' + feature.attributes[key]).length > minLength
  )
}

export function isEmptyString(value: string | undefined | null): boolean {
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
// note: not used yet, available for bus templates
export function getTrustedUrlByLang(
  urlFr: string,
  urlDe: string | null | undefined,
  urlEn: string | null | undefined,
  urlLb: string | null | undefined
): string {
  const { i18next } = useTranslation()
  switch (i18next.language) {
    case 'de':
      return sanitizeUrl(urlDe ?? urlFr)
    case 'en':
      return sanitizeUrl(urlEn ?? urlFr)
    case 'lb':
      return sanitizeUrl(urlLb ?? urlFr)
    case 'fr':
    default:
      return sanitizeUrl(urlFr)
  }
}

/**
 * Join all attributes 'attr' from feature list
 * @param features The feature
 * @param attr Attribute to join
 * @param sep The join separator (default is ',')
 * @returns The string with joined attributes
 */
export function joinAttributes(
  features: FeatureJSON[],
  attr: string,
  sep = ','
) {
  return features.map(feature => feature.attributes[attr]).join(sep)
}

/**
 * Translate and join the elements of the array
 * @param textArray
 * @param prefix
 */
export function translateAndjoin(textArray: string[], prefix: string) {
  if (typeof textArray === undefined) {
    return ''
  }

  const { t } = useTranslation()

  return textArray.map(elem => t(prefix + '_' + elem)).join(', ')
}

/**
 * Return true if the theme is available in app themes
 * @param themeName The theme to find in theme list, eg. 'go'
 */
export function isThemeAvailable(themeName: string) {
  const { themes } = storeToRefs(useThemeStore())
  return themes.value?.some(t => t.name === themeName)
}
