import i18next from 'i18next'

import { hydrateTooltipFallbackTranslations } from './tooltip-fallback'

describe('hydrateTooltipFallbackTranslations', () => {
  it('fills missing tooltip translations from app namespace', async () => {
    const instance = i18next.createInstance()

    await instance.init({
      lng: 'fr',
      fallbackLng: false,
      defaultNS: 'tooltips',
      ns: ['tooltips', 'app'],
      nsSeparator: false,
      keySeparator: false,
      resources: {
        fr: {
          app: {
            bat_100: 'Bâtiment administratif',
          },
          tooltips: {},
        },
      },
    })

    hydrateTooltipFallbackTranslations(instance)

    expect(instance.t('bat_100', { ns: 'tooltips' })).toBe(
      'Bâtiment administratif'
    )
  })

  it('replaces untranslated tooltip values when app has a label', async () => {
    const instance = i18next.createInstance()

    await instance.init({
      lng: 'fr',
      fallbackLng: false,
      defaultNS: 'tooltips',
      ns: ['tooltips', 'app'],
      nsSeparator: false,
      keySeparator: false,
      resources: {
        fr: {
          app: {
            f_description: 'Description',
          },
          tooltips: {
            f_description: 'f_description',
          },
        },
      },
    })

    hydrateTooltipFallbackTranslations(instance)

    expect(instance.t('f_description', { ns: 'tooltips' })).toBe('Description')
  })

  it('keeps dedicated tooltip translations unchanged', async () => {
    const instance = i18next.createInstance()

    await instance.init({
      lng: 'fr',
      fallbackLng: false,
      defaultNS: 'tooltips',
      ns: ['tooltips', 'app'],
      nsSeparator: false,
      keySeparator: false,
      resources: {
        fr: {
          app: {
            Type: 'Type appli',
          },
          tooltips: {
            Type: 'Type tooltip',
          },
        },
      },
    })

    hydrateTooltipFallbackTranslations(instance)

    expect(instance.t('Type', { ns: 'tooltips' })).toBe('Type tooltip')
  })
})
