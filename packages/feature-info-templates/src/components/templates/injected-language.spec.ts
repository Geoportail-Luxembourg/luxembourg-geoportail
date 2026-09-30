import { mount } from '@vue/test-utils'
import type { TFunction, i18n as I18n } from 'i18next'

import { LUX_TPL_I18N } from '../../i18n'
import type { Attributes, FeatureInfoJSON } from '../../models'
import ParcelsTemplate from './parcels-template.vue'
import DefaultTemplate from './default-template.vue'

/**
 * Templates must read the current language from the i18n surface the HOST
 * injected, never from the `i18next` module singleton.
 *
 * The geoportail initialises that singleton, so reading it there happens to
 * work. The VC Map plugin deliberately builds its own instance with
 * `createInstance()` — so it does not clobber the viewer's own i18n — leaving
 * the singleton uninitialised and `i18next.language` undefined. Links were
 * being rendered with `lang=undefined`, and every language-conditional block
 * (`v-if="i18next.language == 'de'"`) silently matched nothing.
 *
 * Mounting with no global i18next init, as below, is the environment a
 * non-geoportail host provides. E2E cannot catch this: it runs against the app,
 * where the singleton is live.
 */

const LANGUAGE = 'de'

/** Stands in for the host's instance; deliberately NOT the module singleton. */
const i18nStub = {
  i18next: { language: LANGUAGE } as unknown as I18n,
  getFixedT: () => ((key: string) => key) as unknown as TFunction,
}

const mountOptions = {
  global: { provide: { [LUX_TPL_I18N as symbol]: i18nStub } },
}

function layersWith(attributes: Partial<Attributes>): FeatureInfoJSON {
  return {
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [] },
        fid: '1376_1',
        id: '1',
        alias: {},
        attributes: {
          label: '',
          name: '',
          measurements: [],
          K_KATASTERGEMEINDE: '',
          K_MEASUREMENTNUMBER: '',
          ...attributes,
        } as Attributes,
      },
    ],
    remote_template: false,
    template: 'parcels.html',
    layer: '1376',
    ordered: false,
    has_profile: false,
    total_features_count: 1,
    features_count: 1,
    layerLabel: 'Parcelles cadastrales',
  }
}

describe('language comes from the injected instance', () => {
  it('parcels builds its order links with the host language', () => {
    const html = mount(ParcelsTemplate, {
      ...mountOptions,
      props: {
        layers: layersWith({
          textstring: '1234',
          PF: { mainNumber: 1, additionalNumber: 2 },
        }),
        currentUrl: 'https://map.geoportail.lu/',
      },
    }).html()

    expect(html).to.contain(`lang=${LANGUAGE}`)
    // The symptom this guards: an uninitialised module singleton stringifies
    // into the URL instead of a language code.
    expect(html).not.to.contain('lang=undefined')
  })

  it('the default template builds its solar link with the host language', () => {
    const html = mount(DefaultTemplate, {
      ...mountOptions,
      props: {
        layers: {
          ...layersWith({ href: 'https://maps.tetraeder.solar/x' }),
          layerLabel: 'myenergy_solarkataster_luxemburg_solar_potentials',
        },
        currentUrl: 'https://map.geoportail.lu/',
      },
    }).html()

    expect(html).not.to.contain('lng=undefined')
  })
})
