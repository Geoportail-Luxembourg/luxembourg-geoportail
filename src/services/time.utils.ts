import { useTranslation } from 'i18next-vue'
import { DateTime } from 'luxon'

export enum TimeResolution {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
  SECOND = 'second',
}

/**
 * Format time regarding a resolution
 *
 * @param time (in ms format) timestamp to format
 * @param resolution resolution to use
 * @param useISOFormat True to a ISO-8601 date string that can be used as a WMS-T Parameter. Otherwise, use a localized date format.
 * @param toUTC to get the UTC date
 *
 * @returns Date string regarding the resolution
 */
export function formatTimeValue(
  time: number,
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
    ? DateTime.fromFormat(
        dateISOString,
        `${toUTC ? 'UTC:' : ''}${resolutionPattern}`
      )
    : dateISOString.replace(/\.\d{3}/, '')
}
