/**
 * Feature-info template rendering.
 *
 * `getfeatureinfo` is stubbed from fixtures rather than queried live. The
 * assertions here pin attribute counts, fids and rendered text, and the live
 * backend's data drifts — which is what rotted this suite into `describe.skip`
 * in the first place. Stubbing makes it a deterministic regression net for the
 * templates in `@geoportallux/feature-info-templates`, which is what it is
 * actually guarding.
 *
 * The fixtures under `cypress/fixtures/featureinfo/` are real responses
 * captured from https://migration.geoportail.lu for the permalinks below. To
 * refresh one, record the response for its permalink again and re-pin the
 * assertions to it.
 *
 * Note the layer titles do NOT come from these fixtures (`layerLabel` is null
 * in the responses) — the app fills them in from the themes catalogue, which in
 * `e2e` mode is `src/__fixtures__/themes.api.fixture.ts`, then translates them
 * through `public/assets/locales/layers.fr.json`. Both are in-repo, so the
 * titles are deterministic too.
 */

function stubFeatureInfo(fixture: string) {
  cy.intercept('GET', '**/getfeatureinfo*', {
    fixture: `featureinfo/${fixture}.json`,
  }).as('getFeatureInfo')
}

/** The slice of an OpenLayers layer this spec's readiness gate looks at. */
interface OlLayerLike {
  get(key: string): { is_queryable?: boolean } | undefined
  getVisible(): boolean
  getOpacity(): number
}

/**
 * Click the map only once it can actually answer, then wait for the query.
 *
 * A bare click straight after `cy.visit()` is racy in two ways: the map is
 * mounted asynchronously, and — the part that bit this suite — the app issues
 * NO getfeatureinfo request at all unless at least one visible, queryable layer
 * is already on the map (`feature-info.composable.ts`, `layersList.length > 0`).
 * The permalink's layers arrive after the map does, so a click in between is
 * silently swallowed and the suite fails with "No request ever occurred".
 *
 * The gate below mirrors that same predicate.
 */
function clickMapForFeatureInfo(x: number, y: number) {
  cy.window()
    .its('olMap')
    .should(map => {
      const queryable = map
        .getLayers()
        .getArray()
        .filter((layer: OlLayerLike) => {
          const metadata = layer.get('metadata')
          return (
            metadata?.is_queryable &&
            layer.getVisible() &&
            layer.getOpacity() > 0
          )
        })
      expect(
        queryable,
        'visible queryable layers on the map'
      ).to.have.length.greaterThan(0)
    })
  cy.get('div.ol-viewport').click(x, y, { force: true })
  cy.wait('@getFeatureInfo')
}

describe('Feature Info', () => {
  describe('Default template', () => {
    /**
     * Note: The following permalink path includes all types of layers displayed via the default template for manual testing:
     * /theme/main?version=3&lang=fr&X=702429&Y=6396653&zoom=16&rotation=0&features=&layers=655-2842-808-1713-1714-152-302-1813&opacities=1-0-1-1-1-1-1-1&time=--------------&bgLayer=basemap_2015_global
     */
    describe('Display basic feature info for multiple layers', () => {
      // Two blocks: layer 302 (Communes, default.html) and layer 152
      // (Adresses, adresse.html) — so this also covers the dispatcher picking
      // a non-default template for the second block.
      beforeEach(() => {
        stubFeatureInfo('default-communes-adresses')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=302-152&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(450, 350)
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature (first layer)', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'Communes')
        // name, canton, district
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .children('div')
          .should('have.length', 3)
        cy.get('[data-cy="defaultTemplateLink"]')
          .first()
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=302-152&opacities=1-1&bgLayer=orthogr_2013_global&rotation=0&features=&time=--&fid=302_0409'
          )
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature (second layer)', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .eq(1)
          .should('contain.text', 'Adresses')
        cy.get('[data-cy="defaultTemplateAttributes"]').should('exist')
        cy.get('[data-cy="defaultTemplateAttributes"] h4').should('exist')
        cy.get('[data-cy="defaultTemplateLink"]')
          .eq(1)
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=302-152&opacities=1-1&bgLayer=orthogr_2013_global&rotation=0&features=&time=--&fid=152_080C00132002075_3536_10A'
          )
      })
    })
    describe('Display profile and exports in feature info', () => {
      // The block carries `has_profile: true`, so the template renders the
      // host-injected profile component; its elevation data is stubbed too.
      beforeEach(() => {
        stubFeatureInfo('profile-pistes-cyclables')
        cy.intercept(
          { method: 'POST', pathname: '/profile.json' },
          { fixture: 'featureinfo/profile-pistes-cyclables.profile.json' }
        ).as('profile')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=808&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(320, 330)
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'Pistes cyclables nationales')
        // PC, TRONCON, SHAPE.LEN, GLOBALID
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .children('div')
          .should('have.length', 4)
        cy.get('[data-cy="defaultTemplateLink"]')
          .first()
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=808&opacities=1&bgLayer=orthogr_2013_global&rotation=0&features=&time=&fid=808_5447'
          )
      })
      it('should display profile besides basic feature info', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="featItemProfile"]').should('exist')
        cy.get('[data-cy="featItemProfileCumul"]').should(
          'contain.text',
          // Derived from the stubbed profile: cumulative +30.9 / -74.9,
          // net -44.1 over the 39 sampled points.
          'Δ+31 m Δ-75 m Δ-44 m'
        )
        cy.get('[data-cy="featItemProfile"] svg').should('exist')
        cy.get('[data-cy="featItemProfile"] svg g.grid-y > g.tick').should(
          'have.length',
          12
        )
        cy.get('[data-cy="featItemProfile"] svg g.x.axis > g.tick').should(
          'have.length',
          8
        )
        cy.get('[data-cy="featItemProfile"] svg g.y.axis > g.tick')
          .eq(5)
          .find('text')
          .should('have.text', '250')
      })
    })
    describe('Display iframe in feature info (for water level graph)', () => {
      beforeEach(() => {
        stubFeatureInfo('iframe-niveau-eau')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=655&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(355, 320)
      })
      it('should display title, attributes, link in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', "Niveau d'eau")
        // Fiche station, Nom, Photo station, Graph
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .children('div')
          .should('have.length', 4)
        cy.get('[data-cy="defaultTemplateLink"]')
          .first()
          .should('contain.text', 'Lien direct vers cet objet')
          .should('have.attr', 'href')
          .and(
            'include',
            '/theme/main?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=655&opacities=1&bgLayer=orthogr_2013_global&rotation=0&features=&time=&fid=655_816'
          )
      })
    })
    describe('Display feature info solar potential', () => {
      beforeEach(() => {
        stubFeatureInfo('solar-potentiel-solaire')
        cy.visit(
          '/?lang=fr&X=678664&Y=6412182&version=3&zoom=16&layers=1813&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(300, 300)
      })
      it('should display title, attributes and the public solar simulator link in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'Potentiel solaire')
        // hid, pv, kwhpa_suitable, kwpmax, area3d_suitable, href
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .children('div')
          .should('have.length', 6)
        cy.get('[data-cy="defaultTemplateSolarLink"]')
          .first()
          .find('button')
          .should('contain.text', 'Simulateur solaire')
        cy.get('[data-cy="defaultTemplateSolarLink"]')
          .first()
          .should('have.attr', 'href')
          .and('include', 'https://solar.klima-agence.lu/?lng=fr')
      })
      it('should not offer the economic calculator to an anonymous user', () => {
        // The second solar link is gated on the user's roleId being in
        // LuxTplContext.config.solarEconomicAllowedRoleIds. E2E runs
        // anonymously, so only the public simulator link may render.
        cy.get('[data-cy="defaultTemplateSolarLink"]').should('have.length', 1)
        cy.get('[data-cy="defaultTemplateSolarLink"]').should(
          'not.contain.text',
          "Lien direct vers le calculateur d'efficacité économique"
        )
      })
    })
    describe('Display audio in feature info', () => {
      beforeEach(() => {
        stubFeatureInfo('audio-sproochatlas')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=2842&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(355, 320)
      })
      it('should display title, attributes and an audio player in the infoPanel when clicking on a layer feature', () => {
        cy.get('[data-cy="infoPanel"]').should('exist')
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'test_sproochatlas_audio')
        // FIRST_Var, AudioURL
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .children('div')
          .should('have.length', 2)
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('a')
          .should('have.attr', 'href')
          .and('include', 'https://lod.lu/uploads/LSA/WAV/ABC_001_ab_01.wav')
        cy.get('[data-cy="defaultTemplateAttributes"]')
          .first()
          .find('audio')
          .should('exist')
      })
    })
  })

  /**
   * The templates the extraction touched most (plan phase 3): each one used to
   * reach into an app store or `import.meta.env` directly and now takes what it
   * needs from `LuxTplContext`. These cover that wiring end to end.
   */
  describe('Templates with the heaviest host coupling', () => {
    describe('casipo', () => {
      // Was: useUserManagerStore (email prefill) + useAlertNotificationsStore.
      // Now: ctx.user and ctx.notify.
      beforeEach(() => {
        stubFeatureInfo('casipo-parcelles')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=1362&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(450, 350)
      })
      it('renders the report order form', () => {
        cy.get('.lux-tpl-poi-title')
          .first()
          .should('contain.text', 'Cadastre des sites potentiellement pollués')
        cy.get('.lux-tpl-casipo-mail input').should('exist')
        cy.get('.lux-tpl-casipo-checkbox input[type="checkbox"]').should(
          'exist'
        )
        // 'Commander rapport' has no `tooltips` entry — it resolves only
        // because installTooltipFallbackTranslations() hydrates the namespace
        // from `app`, which moved into the package with the templates.
        cy.get('.lux-tpl-casipo-form-container')
          .parent()
          .find('button')
          .should('contain.text', 'Commander le rapport')
      })
      it('prefills no email for an anonymous user', () => {
        // ctx.user is null when nobody is signed in, so the field stays empty.
        cy.get('.lux-tpl-casipo-mail input').should('have.value', '')
      })
      it('notifies through the host when the email is missing', () => {
        // Exercises ctx.notify -> the app's alert-notifications store.
        cy.get('[data-cy="notification"]').should('not.exist')
        cy.get('.lux-tpl-casipo-form-container').parent().find('button').click()
        cy.get('[data-cy="notification"]')
          .should('exist')
          .and('contain.text', 'Veuillez saisir une adresse email valide')
      })
    })

    describe('pag', () => {
      beforeEach(() => {
        stubFeatureInfo('pag-zones')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=698&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(450, 350)
      })
      it('renders the report order form', () => {
        cy.get('.lux-tpl-poi-title')
          .first()
          .should('contain.text', "Plan d'aménagement général")
        cy.get('.lux-tpl-pag-mail input').should('exist').and('have.value', '')
        cy.get('.lux-tpl-pag-checkbox input[type="checkbox"]').should('exist')
      })
      it('notifies through the host when the email is missing', () => {
        cy.get('.lux-tpl-pag-form-container').parent().find('button').click()
        cy.get('[data-cy="notification"]')
          .should('exist')
          .and('contain.text', 'Veuillez saisir une adresse email valide')
      })
    })

    describe('parcels', () => {
      // Was: InfoFeatureMeasurementModale + formatDate/url helpers + a
      // useThemeStore lookup. Now: a lib-owned modal, lib-owned helpers and
      // ctx.isThemeAvailable.
      beforeEach(() => {
        stubFeatureInfo('parcels-cadastre')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=1376&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(450, 350)
      })
      it('renders the cadastral parcel with its number', () => {
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', 'Parcelles cadastrales')
        // PF.mainNumber / PF.additionalNumber from the fixture.
        cy.get('.lux-tpl-parcels-template-h2')
          .first()
          .should('contain.text', '569/6548')
      })
      it('renders icons as inline SVG, needing no icon font from the host', () => {
        // Phase 4.5: these were <i class="fa fa-list"> / "fa-th-large", served
        // from the app's Font Awesome sheet — which a third-party host has no
        // reason to ship. They are now self-contained SVG.
        cy.get('svg.lux-tpl-icon').should('have.length.greaterThan', 0)
        // `cy.contains(selector, text)` yields the button itself; the bare
        // `.contains(text)` form would yield the inner <span>.
        cy.contains('button', 'Liens').find('svg.lux-tpl-icon').should('exist')
        cy.contains('button', 'Aperçus')
          .find('svg.lux-tpl-icon')
          .should('exist')
        cy.get('i.fa').should('not.exist')
      })
    })

    describe('mymaps', () => {
      // Was: getMymapsPath/getQRUrlForMyMaps from the app's url.utils plus
      // VITE_V3_API_HOST. Now: lib-owned helpers reading ctx.config.v3ApiHost.
      beforeEach(() => {
        stubFeatureInfo('mymaps-pistes-velo')
        // The block carries has_profile, so a profile is requested too; its
        // payload is irrelevant to what this test asserts, but stubbing it
        // keeps the test off the network.
        cy.intercept(
          { method: 'POST', pathname: '/profile.json' },
          { fixture: 'featureinfo/profile-pistes-cyclables.profile.json' }
        ).as('profile')
        cy.visit(
          '/?lang=fr&X=672676&Y=6412435&version=3&zoom=11&layers=512&opacities=1&bgLayer=orthogr_2013_global'
        )
        clickMapForFeatureInfo(450, 350)
      })
      it('renders the mymaps feature with its layer title', () => {
        cy.get('[data-cy="defaultTemplateTitle"]')
          .first()
          .should('contain.text', "Réseau d'itinéraires cyclables régionaux")
        cy.get('[data-cy="defaultTemplateAttributes"]').should('exist')
      })
      it('renders the elevation profile injected by the host', () => {
        // has_profile: true -> the template renders ctx.profileComponent.
        cy.get('[data-cy="featItemProfile"]').should('exist')
      })
    })
  })
})
