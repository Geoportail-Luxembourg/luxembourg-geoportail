import i18next from 'i18next'

export type TFormatMeasureType = 'elevation' | 'length' | 'area'

/**
 * Note: Formatting utils can be used via directives in HTML templates.
 * v-format-length="value"
 * v-format-area="value"
 */

export function formatDate(dateString: string, language: string = 'fr-FR') {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(language).format(date)
}

export function formatMeasure(
  value: number | null,
  digits?: number,
  type?: TFormatMeasureType
) {
  if (value === null) {
    return i18next.t('N/A', { ns: 'client' })
  }

  switch (type) {
    case 'elevation':
      return formatElevation(value, digits)
    case 'area':
      return formatArea(value, digits)
    case 'length':
    default:
      return formatLength(value, digits)
  }
}

export function formatElevation(value: number | string, digits = 0): string {
  return <string>(
    (isNaN(+value) ? value : `${(<number>value).toFixed(digits)} m`)
  )
}

export function formatLength(value: number, digits = 2): string {
  //null covers API errors or unavailable data (eg. elevation)
  if (value === null) {
    return i18next.t('N/A', { ns: 'client' })
  } else if (value < 1000) {
    return `${value.toFixed(digits)} m`
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(digits)} km`
  } else {
    return ''
  }
}

export function formatArea(value: number, digits = 2): string {
  if (value === null) {
    return i18next.t('N/A', { ns: 'client' })
  } else if (value < 1000000) {
    return `${value.toFixed(digits)} m²`
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(digits)} km²`
  } else {
    return ''
  }
}
