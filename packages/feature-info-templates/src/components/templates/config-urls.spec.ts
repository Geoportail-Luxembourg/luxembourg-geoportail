import { mount } from '@vue/test-utils'
import { createInstance } from 'i18next'
import { ref } from 'vue'

import { LUX_TPL_CONTEXT } from '../../context'
import { LUX_TPL_I18N } from '../../i18n'
import type { FeatureInfoJSON } from '../../models'
import PagTemplate from './pag-template.vue'

describe('templates take their URLs from the env', () => {
  it('the PAG terms link to the file server of the env', async () => {
    const i18next = createInstance()
    await i18next.init({ lng: 'fr', resources: {} })
    const html = mount(PagTemplate, {
      props: {
        layers: {
          layerLabel: 'pag',
          features: [],
        } as unknown as FeatureInfoJSON,
      },
      global: {
        provide: {
          [LUX_TPL_I18N as symbol]: {
            i18next,
            getFixedT: () => i18next.t,
          },
          [LUX_TPL_CONTEXT as symbol]: {
            config: {},
            user: ref(null),
            notify: () => {},
          },
        },
      },
    }).html()

    // The URL is interpolated into the translated terms, not part of the key.
    expect(html).to.match(
      /href="https:(\/|&#x2F;){2}files\.geoportail\.lu(\/|&#x2F;)pag(\/|&#x2F;)Disclaimer\.pdf"/
    )
  })
})
