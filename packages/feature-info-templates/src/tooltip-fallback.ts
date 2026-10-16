import type { i18n } from 'i18next'

const TOOLTIPS_NAMESPACE = 'tooltips'
const APP_NAMESPACE = 'app'

function getSupportedLanguages(instance: i18n): string[] {
  const supportedLngs = instance.options.supportedLngs
  const configured = Array.isArray(supportedLngs)
    ? supportedLngs.filter((lang: string) => lang && lang !== 'cimode')
    : undefined

  if (configured && configured.length > 0) {
    return configured
  }

  return Object.keys(instance.store.data)
}

export function hydrateTooltipFallbackTranslations(instance: i18n) {
  for (const language of getSupportedLanguages(instance)) {
    const appTranslations = instance.getResourceBundle(language, APP_NAMESPACE)

    if (!appTranslations || typeof appTranslations !== 'object') {
      continue
    }

    const tooltipTranslations =
      instance.getResourceBundle(language, TOOLTIPS_NAMESPACE) ?? {}
    const mergedTranslations: Record<string, unknown> = {
      ...tooltipTranslations,
    }

    let changed = false

    for (const [key, value] of Object.entries(appTranslations)) {
      if (typeof value !== 'string') {
        continue
      }

      const currentValue = mergedTranslations[key]
      if (
        currentValue === undefined ||
        currentValue === null ||
        currentValue === '' ||
        currentValue === key
      ) {
        mergedTranslations[key] = value
        changed = true
      }
    }

    if (changed) {
      instance.addResourceBundle(
        language,
        TOOLTIPS_NAMESPACE,
        mergedTranslations,
        true,
        true
      )
    }
  }
}

export function installTooltipFallbackTranslations(instance: i18n) {
  const sync = () => hydrateTooltipFallbackTranslations(instance)

  sync()
  instance.on('loaded', sync)
  instance.on('languageChanged', sync)

  return () => {
    instance.off('loaded', sync)
    instance.off('languageChanged', sync)
  }
}
