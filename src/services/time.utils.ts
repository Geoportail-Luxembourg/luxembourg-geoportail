import { useTranslation } from 'i18next-vue'
import { DateTime } from 'luxon'

export enum TimeResolution {
  YEAR = 'year',
  MONTH = 'month',
  DAY = 'day',
  SECOND = 'second',
}

export interface TimeOptions {
  timeValueList?: number[]
  minValue: number
  maxValue: number
  timeInterval?: number[]
}

export const DEFAULT_TIME_INTERVAL = [0, 1, 0, 0]

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

/**
 * Compute the closest available layer date from the selected timestamp
 * legacy v3: timeSliderComponent.getClosestValue_()
 * @param timestamp The selected date (timestamp formatted)
 */
export function getClosestValue(timestamp: number, timeOptions: TimeOptions) {
  if (timestamp <= timeOptions.minValue) {
    return timeOptions.minValue
  }

  if (timestamp >= timeOptions.maxValue) {
    return timeOptions.maxValue
  }

  if (timeOptions.timeValueList) {
    return getClosestValueFromList(timestamp, timeOptions)
  }

  return getClosestValueFromStartInterval(timestamp, timeOptions)
}

/**
 * Time stops are defined as a list of values
 * @param timestamp
 * @param timeOptions
 * @returns
 */
function getClosestValueFromList(timestamp: number, timeOptions: TimeOptions) {
  const timeValueList = timeOptions.timeValueList ?? []
  let index
  let leftIndex = 0
  let rightIndex = timeValueList.length - 1

  while (rightIndex - leftIndex > 1) {
    index = Math.floor((leftIndex + rightIndex) / 2)
    if (timeValueList[index] >= timestamp) {
      rightIndex = index
    } else {
      leftIndex = index
    }
  }

  const leftDistance = Math.abs(timeValueList[leftIndex] - timestamp)
  const rightDistance = Math.abs(timeValueList[rightIndex] - timestamp)

  return timeValueList[leftDistance < rightDistance ? leftIndex : rightIndex]
}

/**
 * Time stops are defined by a start date plus an interval
 * @param timestamp
 * @param timeOptions
 */
function getClosestValueFromStartInterval(
  timestamp: number,
  timeOptions: TimeOptions
) {
  const interval = timeOptions.timeInterval ?? DEFAULT_TIME_INTERVAL
  const targetDate = new Date(timestamp).getTime()
  const startDate = new Date(timeOptions.minValue)
  const maxDate = timeOptions.maxValue
  let bestDate = timeOptions.minValue
  let bestDistance = Math.abs(targetDate - bestDate)

  for (let i = 1; ; i++) {
    // The start date should always be used as a reference
    // because adding a month twice could differ from adding
    // two months at once
    const next = new Date(startDate.getTime())
    next.setFullYear(startDate.getFullYear() + i * interval[0])
    next.setMonth(
      startDate.getMonth() + i * interval[1],
      startDate.getDate() + i * interval[2]
    )
    next.setSeconds(startDate.getSeconds() + i * interval[3])

    if (next.getTime() > maxDate) {
      break
    }

    const distance = Math.abs(targetDate - next.getTime())
    if (distance <= bestDistance) {
      bestDate = next.getTime()
      bestDistance = distance
    } else {
      break
    }
  }

  return bestDate
}
