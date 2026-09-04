import { Geometry } from 'ol/geom'
import { Layer } from 'ol/layer'
import VectorSource from 'ol/source/Vector'

function getDrawFeatures() {
  return cy
    .window()
    .its('olMap')
    .then(olMap => {
      const featureLayers = olMap
        .getLayers()
        .getArray()
        .filter((l: Layer) => l.get('cyLayerType') === 'interactionDrawLayer')
      const features = featureLayers
        .map((l: Layer) =>
          (l.getSource() as VectorSource<Geometry>)?.getFeatures()
        )
        .flat()
      return cy.wrap(features)
    })
}

function resolveFeatureStyles(feature: any) {
  const styleFn = feature.getStyleFunction()
  return styleFn ? styleFn(feature, 1) : []
}

describe('Draw feature visibility', () => {
  describe('Point feature', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('div.ol-viewport').click(400, 300, { force: true })
      cy.get('button[data-cy="featItemToggleEdit"]').click()
    })

    describe('Visibility toggle button', () => {
      it('shows fa-eye icon by default', () => {
        cy.get('[data-cy="featItemActionVisibility"] i')
          .should('have.class', 'fa-eye')
          .and('not.have.class', 'fa-eye-slash')
      })

      it('toggles to fa-eye-slash when clicked', () => {
        cy.get('[data-cy="featItemActionVisibility"]').click()
        cy.get('[data-cy="featItemActionVisibility"] i')
          .should('have.class', 'fa-eye-slash')
          .and('not.have.class', 'fa-eye')
      })

      it('toggles back to fa-eye when clicked twice', () => {
        cy.get('[data-cy="featItemActionVisibility"]').click()
        cy.get('[data-cy="featItemActionVisibility"]').click()
        cy.get('[data-cy="featItemActionVisibility"] i')
          .should('have.class', 'fa-eye')
          .and('not.have.class', 'fa-eye-slash')
      })
    })

    describe('Feature state on map', () => {
      it('sets isVisible to false on the feature when toggled off', () => {
        cy.get('[data-cy="featItemActionVisibility"]').click()
        getDrawFeatures().then(features => {
          const ff = features[0]
          cy.wrap(ff.featureStyle.isVisible).should('equal', false)
        })
      })

      it('sets isVisible to true on the feature when toggled on', () => {
        cy.get('[data-cy="featItemActionVisibility"]').click()
        cy.get('[data-cy="featItemActionVisibility"]').click()
        getDrawFeatures().then(features => {
          const ff = features[0]
          cy.wrap(ff.featureStyle.isVisible).should('equal', true)
        })
      })

      it('returns empty styles when feature is hidden', () => {
        cy.get('[data-cy="featItemActionVisibility"]').click()
        getDrawFeatures().then(features => {
          const ff = features[0]
          cy.wrap(resolveFeatureStyles(ff)).should('have.length', 0)
        })
      })

      it('returns styles when feature is visible', () => {
        getDrawFeatures().then(features => {
          const ff = features[0]
          cy.wrap(resolveFeatureStyles(ff)).should('have.length.greaterThan', 0)
        })
      })
    })

    describe('Visibility persists across panel interaction', () => {
      it('persists when feature item is collapsed and expanded', () => {
        cy.get('[data-cy="featItemActionVisibility"]').click()
        cy.get('[data-cy="featItemActionVisibility"] i').should(
          'have.class',
          'fa-eye-slash'
        )

        cy.get('[data-cy="featItemName"]').click()
        cy.get('[data-cy="featItemName"]').click()

        cy.get('[data-cy="featItemActionVisibility"] i').should(
          'have.class',
          'fa-eye-slash'
        )
      })
    })
  })

  describe('Line feature', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.get('div.ol-viewport').click(200, 400, { force: true })
      cy.get('div.ol-viewport').click(300, 300, { force: true })
      cy.get('div.ol-viewport').dblclick(400, 400, { force: true })
      cy.get('[data-cy="featItemActionVisibility"]').should('exist')
      cy.get('button[data-cy="featItemToggleEdit"]').click()
    })

    it('toggles visibility for LineString feature', () => {
      cy.get('[data-cy="featItemActionVisibility"]').click()
      cy.get('[data-cy="featItemActionVisibility"] i').should(
        'have.class',
        'fa-eye-slash'
      )
      getDrawFeatures().then(features => {
        const ff = features[0]
        cy.wrap(ff.featureType).should('equal', 'drawnLine')
        cy.wrap(ff.featureStyle.isVisible).should('equal', false)
        cy.wrap(resolveFeatureStyles(ff)).should('have.length', 0)
      })
    })
  })
})
