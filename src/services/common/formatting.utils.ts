import i18next from 'i18next'
import { AddressResult } from '@/stores/location-info.store.model'
import { transform, toLonLat } from 'ol/proj'
import { Coordinate } from 'ol/coordinate'
import { Projection } from 'ol/proj'
import { PROJECTION_WGS84 } from '@/composables/map/map.composable'

export type FormatMeasureType = 'elevation' | 'length' | 'area'

/**
 * Note: Formatting utils can be used via directives in HTML templates.
 * <span v-format-measure:2.area="value"></span>
 * <span v-format-measure.length="value"></span>
 * <span v-format-measure.elevation="value"></span>
 */

export function formatDate(dateString: string, language: string = 'fr-FR') {
  if (!dateString) {
    return ''
  }

  return new Intl.DateTimeFormat(language, {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(dateString))
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

/**
 * Format an address from reverse address lookup service
 * @param address AddressResult structure returned by the reverse search API
 * @returns The formatted address as "<number> <streetname>, <postal code> <city name>"
 */
export function formatAddress(address: AddressResult | undefined) {
  if (address === undefined) {
    return i18next.t('N/A', { ns: 'client' })
  }
  return `${address.number}, ${address.street}, ${address.postal_code} ${address.locality}`
}

/**
 * Format coordinates in different CRS as an 'xxx E | yyy N' pair
 * known targets:
 * EPSG:2169, EPSG:4326, EPSG:3263* (UTM zones 31N and 32N)
 * EPSG:4326:DMS (degree, minute, second), EPSG:4326:DMm (degree, minute.minute_decimals)
 * @param coords The coordinate pair to be formatted
 * @param fromCrs the CRS of the source coordinate pair
 * @param format output format / CSR among:
 *                EPSG:2169, EPSG:4326, EPSG:3263*
 *                EPSG:4326:DMS, EPSG:4326:DMm
 * @returns The formatted Coordinate as a string
 */
export function formatCoords(
  coords: Coordinate,
  fromCrs: Projection | string,
  format: string
) {
  const lonLanFormat = format.split(':')[2]
  let toCrs = format
  let utmZone = undefined
  if (lonLanFormat !== undefined) {
    toCrs = format.slice(0, format.lastIndexOf(':'))
  } else if (format.endsWith('*')) {
    const lonlat = toLonLat(coords, fromCrs)
    utmZone = lonlat[0] <= 6 ? 'UTM31N' : 'UTM32N'
    toCrs = format.replace('3*', utmZone.slice(3, 5))
  }
  const projectedCoords = transform(coords, fromCrs, toCrs)
  const isDegrees = toCrs === PROJECTION_WGS84
  const hemispheres = projectedCoords.map((coord: number, axis: number) => {
    const axisNegative = (isDegrees ? normalizeDegrees(coord) : coord) < 0
    return axisNegative ? 'WS'[axis] : 'EN'[axis]
  })
  const formattedCoords = projectedCoords.map(
    (coord: number) =>
      <string>(
        (isDegrees
          ? formatDegrees(coord, lonLanFormat)
          : Math.abs(Math.round(coord)).toString())
      )
  )
  if (utmZone !== undefined) {
    return `${formattedCoords.join(' | ')}  (${utmZone})`
  }
  return formattedCoords
    .map((coord: string, axis: number) => `${coord} ${hemispheres[axis]}`)
    .join(' | ')
}
export function normalizeDegrees(degrees: number) {
  return ((degrees + 180) % 360) - 180
}
export function formatDegrees(degrees: number, format: string) {
  const normalizedDegrees = ((degrees + 180) % 360) - 180
  const absDegrees = Math.abs(normalizedDegrees)
  if (format === undefined) {
    return Math.round(absDegrees * 1e6) / 1e6
  }
  const intDegrees = Math.floor(absDegrees)
  const minutes = (absDegrees % 1) * 60
  // convert to degree, minute, decimals format
  if (format === 'DMm') {
    const roundedMinutes = Math.round(minutes * 1e6) / 1e6
    return `${intDegrees}\u00b0 ${roundedMinutes}\u2032`
  }
  if (format === 'DMS') {
    // convert to degree, minute, second format
    const intMinutes = Math.floor(minutes)
    const seconds = Math.round((minutes % 1) * 600) / 10
    return `${intDegrees}\u00b0 ${intMinutes}\u2032 ${seconds}\u2033`
  }
  return 'N/A'
}
