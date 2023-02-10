export function debounce(fn: Function, delay: number) {
  let timeoutID: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      fn.apply(args)
    }, delay)
  }
}

export function stringToNumber(text: string | null) {
  return text?.trim() && !isNaN(Number(text)) ? Number(text) : undefined
}
