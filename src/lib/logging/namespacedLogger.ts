export interface NamespacedLogger {
  log: (...args: unknown[]) => void
  info: (...args: unknown[]) => void
  warn: (...args: unknown[]) => void
  error: (...args: unknown[]) => void
  debug: (...args: unknown[]) => void
}

export function createLogger(
  prefix: string,
  consoleRef: Console = console
): NamespacedLogger {
  const normalizedPrefix = prefix.startsWith('[') ? prefix : `[${prefix}]`

  const withPrefix = (method: keyof Console) => {
    const consoleMethod =
      typeof consoleRef[method] === 'function'
        ? (consoleRef[method] as (...args: unknown[]) => void)
        : consoleRef.log

    const bound = consoleMethod.bind(consoleRef)

    return (...args: unknown[]) => {
      bound(normalizedPrefix, ...args)
    }
  }

  return {
    log: withPrefix('log'),
    info: withPrefix('info'),
    warn: withPrefix('warn'),
    error: withPrefix('error'),
    debug: withPrefix('debug'),
  }
}
