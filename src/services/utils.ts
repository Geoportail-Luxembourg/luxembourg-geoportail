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
        item !== null && !isNaN(item as any) ? parseFloat(item) : undefined
      ) || []
  )
}

export function stringToBooleans(
  text: string | null,
  separator: string
): (boolean | undefined)[] {
  return (
    text
      ?.split(separator)
      .map(item =>
        item === 'true' ? true : item === 'false' ? false : undefined
      ) || []
  )
}
