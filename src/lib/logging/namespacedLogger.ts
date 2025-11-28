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

  const invokeConsoleMethod = (method: keyof Console, args: unknown[]) => {
    const prefixedArgs = [normalizedPrefix, ...args]

    try {
      if (typeof consoleRef[method] === 'function') {
        ;(consoleRef[method] as (...callArgs: unknown[]) => void)(
          ...prefixedArgs
        )
        return
      }
    } catch {
      // Attempt fallback below
    }

    try {
      if (typeof consoleRef.log === 'function') {
        consoleRef.log(...prefixedArgs)
      }
    } catch {
      // Ignore logging failures inside worker contexts
    }
  }

  const withPrefix = (method: keyof Console) => {
    return (...args: unknown[]) => {
      invokeConsoleMethod(method, args)
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
