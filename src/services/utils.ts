export function debounce(fn: Function, delay: number) {
  let timeoutID: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      fn.apply(args)
    }, delay)
  }
}

export function stringToNumber(text: string | null): number | undefined {
  return text?.trim() && !isNaN(Number(text)) ? Number(text) : undefined
}

export function stringToNumbers(
  text: string | null,
  separator: string
): (number | undefined)[] {
  return (
    text
      ?.split(separator)
      .map(item =>
        item !== null && !isNaN(Number(item)) ? parseFloat(item) : undefined
      ) || []
  )
}

export function stringToBooleans(
  text: string | null,
  separator: string
): (boolean | undefined)[] {
  return text?.split(separator).map(stringToBoolean) || []
}

export function stringToBoolean(text: string | null) {
  return text?.trim() === 'true'
    ? true
    : text?.trim() === 'false'
    ? false
    : undefined
}

export function isHiDpi() {
  return window.matchMedia(
    '(-webkit-min-device-pixel-ratio: 2), ' +
      '(min-device-pixel-ratio: 2), ' +
      '(min-resolution: 192dpi)'
  ).matches
}

function testUserAgent(pattern: RegExp) {
  return (
    typeof window !== 'undefined' &&
    window.navigator &&
    pattern.test(navigator.userAgent)
  )
}

/**
 * Extract the part after the URL authority.
 * @param url A URL to normalize
 * @returns The normalized string.
 */
export function normalizeURL(url: string) {
  const extractor = new RegExp('[^/]*//[^/]+/(.*)')
  const matches = url.match(extractor)

  return matches ? matches[1] : null
}

export const isFireFox = testUserAgent(/firefox/i)
export const isSafari =
  testUserAgent(/safari/i) &&
  !testUserAgent(/chrome/i) &&
  !testUserAgent(/android/i)
export const isIOS = testUserAgent(/iP(ad|od|hone)/i)
export const isChromeAndroid =
  testUserAgent(/chrome/i) && testUserAgent(/android/i)
export const isChrome = testUserAgent(/chrome/i)
export const isIE = testUserAgent(
  /(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i
)
export const isEdge = testUserAgent(/Edge/i)
