import i18next from 'i18next'

/**
 * Note: Formatting utils can be used via directives in HTML templates.
 * v-format-length="value"
 * v-format-area="value"
 */

export function formatDate(dateString: string, language: string = 'fr-FR') {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(language).format(date)
}

export function formatLength(value: number): string {
  //null covers API errors or unavailable data (eg. elevation)
  if (value === null) {
    return i18next.t('N/A', { ns: 'client' })
  } else if (value < 1000) {
    return `${value.toFixed(2)} m`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(2)} km`
  } else {
    return ''
  }
}

export function formatArea(value: number): string {
  if (value === null) {
    return i18next.t('N/A', { ns: 'client' })
  } else if (value < 1000000) {
    return `${value.toFixed(2)} m²`
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)} km²`
  } else {
    return ''
  }
}
