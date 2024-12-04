import i18next from 'i18next'

export type FormatMeasureType = 'elevation' | 'length' | 'area'

/**
 * Note: Formatting utils can be used via directives in HTML templates.
 * <span v-format-measure:2.area="value"></span>
 * <span v-format-measure.length="value"></span>
 * <span v-format-measure.elevation="value"></span>
 */

export function formatDate(dateString: string, language: string = 'fr-FR') {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat(language).format(date)
}

/**
 * Format a measure value, it can be formatted to "elevation" (always in m),
 * length (in m and km if up to 1000) or area (in m² or km² if up to 1000000)
 * @param value The value to format
 * @param digits The digits to fixed
 * @param type The formatter, can be: "elevation" | "length" | "area"
 * @returns The formatted value, or the original value if invalid number
 */
export function formatMeasure(
  value: number | null,
  digits?: number,
  type?: FormatMeasureType
) {
  if (value == null || isNaN(value)) {
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

/**
 * Format a value in meters (no km), 0 digit by default
 * @param value The value (in m) to format
 * @param digits The digits to fixed
 * @returns The formatted value, or the original value if invalid number
 */
export function formatElevation(value: number | string, digits = 0): string {
  return <string>(
    (isNaN(+value) ? value : `${(<number>+value).toFixed(digits)} m`)
  )
}

/**
 * Format a value in meters (or km if up to 1000), 2 digits by default
 * @param value The value (in m) to format
 * @param digits The digits to fixed
 * @returns The formatted value, or the original value if invalid number
 */
export function formatLength(value: number | null, digits = 2): string {
  // null covers API errors or unavailable data (eg. elevation)
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

/**
 * Format a value in meters² (or km² if up to 1000000), 2 digits by default
 * @param value The value (in m²) to format
 * @param digits The digits to fixed
 * @returns The formatted value, or the original value if invalid number
 */
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
