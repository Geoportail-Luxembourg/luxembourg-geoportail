import { useTranslation } from 'i18next-vue'
import { DateTime } from 'luxon'

export enum TimeResolution {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
  SECOND = 'second',
}

/**
 * Format time regarding a resolution (comming from i18n)
 *
 * @param time (in ms format) timestamp to format
 * @param resolution resolution to use
 * @param useISOFormat True to a ISO-8601 date string that can be used as a WMS-T Parameter. Otherwise, use a localized date format.
 * @param toUTC to get the UTC date
 *
 * @returns Date string regarding the resolution
 */
export function formatTimeValue(
  time: number | string | Date,
  resolution: TimeResolution = TimeResolution.SECOND,
  useISOFormat?: boolean,
  toUTC?: boolean
) {
  const { t } = useTranslation()
  const dateISOString = new Date(time).toISOString()

  const resolutionPatterns = {
    [TimeResolution.YEAR]: t('yyyy'),
    [TimeResolution.MONTH]: t('M/yyyy'),
    [TimeResolution.DAY]: t('M/d/yyyy'),
    [TimeResolution.SECOND]: t('M/d/yyyy HH:mm:ss'),
  }
  const resolutionPatternsISO = {
    [TimeResolution.YEAR]: 'yyyy',
    [TimeResolution.MONTH]: 'yyyy-MM',
    [TimeResolution.DAY]: 'yyyy-MM-dd',
    [TimeResolution.SECOND]: undefined,
  }

  const resolutionPattern = (
    useISOFormat ? resolutionPatternsISO : resolutionPatterns
  )[resolution]

  return resolutionPattern
    ? DateTime.fromISO(dateISOString).toFormat(
        `${toUTC ? 'UTC:' : ''}${resolutionPattern}`
      )
    : dateISOString.replace(/\.\d{3}/, '')
}

/**
 * Format a date string or timestamp to ISO date,
 * ! but with only 2 digits before the zulu
 *
 * @param date  The date string or timestamp
 * @returns The corresponding date string ISO
 */
export function dateToISOString(date: string | number) {
  return new Date(date).toISOString().split('.')[0] + 'Z'
}

/**
 * Format an ISO date string to be used as a value for <input type="date" />
 *
 * @param dateISO - The date ISO string
 * @returns The date string formatted as 'yyyy-MM-dd' for input date
 *
 * @example
 * formatDateForInput('2014-08-31T12:43:47Z')
 */
export function formatDateForInput(dateISO: string) {
  return DateTime.fromISO(dateISO).toFormat('yyyy-MM-dd')
}
