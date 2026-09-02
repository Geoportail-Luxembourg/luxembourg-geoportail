import { mount } from '@vue/test-utils'
import type { TFunction } from 'i18next'
import i18nextSingleton from 'i18next'

import { LUX_TPL_I18N } from '../../i18n'
import type { Attributes, FeatureInfoJSON } from '../../models'
import AdresseTemplate from './adresse-template.vue'
import AutomaticSolsTemplate from './automatic-sols-template.vue'
import DefaultAttachmentNoPrefixTemplate from './default-attachment-no-prefix-template.vue'
import DefaultAttachmentTemplate from './default-attachment-template.vue'
import DefaultTableNoPrefixTemplate from './default-table-no-prefix-template.vue'
import DefaultTableTemplate from './default-table-template.vue'
import DefaultTemplate from './default-template.vue'

/**
 * These templates render server-supplied HTML. They must sanitize it
 * *themselves* — mounted here with no directive registered anywhere, which is
 * what every host except the geoportail provides.
 *
 * That is the whole point of this file: the templates used to rely on
 * `v-dompurify-html`, a global the geoportail installs app-wide in `main.ts`.
 * Inside the app it silently worked; anywhere else the values rendered blank
 * with nothing but a dev-only "Failed to resolve directive" warning, and no
 * test caught it — the e2e suite runs against the app, which registers the
 * global. A plain `mount()` is the environment that tells the truth.
 */

/** Deterministic `t`, so assertions do not depend on i18next's init state. */
const i18nStub = {
  i18next: i18nextSingleton,
  getFixedT: () => ((key: string) => key) as unknown as TFunction,
}

const mountOptions = {
  global: {
    provide: { [LUX_TPL_I18N as symbol]: i18nStub },
  },
}

function layersWith(attributes: Partial<Attributes>): FeatureInfoJSON {
  return {
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [] },
        fid: '1234_1',
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
    template: 'default.html',
    layer: '1234',
    ordered: false,
    has_profile: false,
    total_features_count: 1,
    features_count: 1,
    layerLabel: 'Test layer',
  }
}

const DANGEROUS = '<img src=x onerror="alert(1)"><script>alert(2)</scr' + 'ipt>'

/**
 * The six templates that render an attribute *value* as HTML. They all reach
 * it the same way: a non-empty, non-link attribute lands in a `<span>`.
 */
const attributeValueTemplates = [
  ['automatic-sols', AutomaticSolsTemplate],
  ['default', DefaultTemplate],
  ['default-table', DefaultTableTemplate],
  ['default-table-no-prefix', DefaultTableNoPrefixTemplate],
  ['default-attachment', DefaultAttachmentTemplate],
  ['default-attachment-no-prefix', DefaultAttachmentNoPrefixTemplate],
] as const

describe.each(attributeValueTemplates)('%s template', (_name, Component) => {
  const render = (description: string) =>
    mount(Component, {
      ...mountOptions,
      props: {
        layers: layersWith({ description }),
        currentUrl: 'https://map.geoportail.lu/?lang=fr',
      },
    })

  it('renders markup in an attribute value', () => {
    // Fails without a lib-owned directive: the span renders empty.
    expect(render('<b>Bold</b> text').html()).toContain('<b>Bold</b>')
  })

  it('strips dangerous markup from an attribute value', () => {
    const html = render(`${DANGEROUS}<b>safe</b>`).html()
    expect(html).toContain('<b>safe</b>') // not simply swallowing everything
    expect(html).not.toContain('onerror')
    expect(html).not.toContain('alert(1)')
    expect(html).not.toContain('<script')
  })

  it('resolves every directive it uses', () => {
    // Structural guard: catches ANY future template that references a
    // directive the package does not own, not just this one.
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    render('<b>x</b>')
    expect(warn.mock.calls.flat().join(' ')).not.toContain(
      'Failed to resolve directive'
    )
    warn.mockRestore()
  })
})

describe('adresse template', () => {
  // This one renders `feature.attributes.label` — also server-supplied — but
  // through a raw `v-html` rather than the directive.
  const render = (label: string) =>
    mount(AdresseTemplate, {
      ...mountOptions,
      props: {
        layers: layersWith({ label }),
        currentUrl: 'https://map.geoportail.lu/?lang=fr',
      },
    })

  it('renders the line breaks its formatter produces', () => {
    expect(render('Rue de Test 1\n1234 Luxembourg').html()).toContain('<br>')
  })

  it('strips dangerous markup from the label', () => {
    const html = render(`${DANGEROUS}Rue de Test`).html()
    expect(html).toContain('Rue de Test')
    expect(html).not.toContain('onerror')
    expect(html).not.toContain('alert(1)')
    expect(html).not.toContain('<script')
  })
})
