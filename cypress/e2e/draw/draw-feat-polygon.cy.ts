import { testFeatItem, testFeatItemDocking } from './draw-feat.utils'

function testFeatItemMeasurements() {
  cy.get('*[data-cy="featItemLength"]').should('exist')
  cy.get('*[data-cy="featItemArea"]').should('exist')
  cy.get('*[data-cy="featItemRadius"]').should('not.exist')
  cy.get('*[data-cy="featItemElevation"]').should('not.exist')
  cy.get('*[data-cy="featItemProfile"]').should('not.exist')
}

describe('Draw "Polygon"', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawPolygonButton"]').click()
    cy.get('div.ol-viewport').click(100, 100, { force: true })
    cy.get('div.ol-viewport').click(100, 200, { force: true })
    cy.get('div.ol-viewport').dblclick(200, 200, { force: true })
  })

  describe('When clicking button to draw Polygon', () => {
    it('displays a new feature item in the draw panel', () => {
      cy.get('*[data-cy="featItemName"]').should('exist')
    })

    it('displays measurements for Polygon', () => {
      testFeatItemMeasurements()
    })

    it('updates length and area measurements when editing geometry', () => {
      cy.get('*[data-cy="featItemLength"]').should('contain.text', '133.81 km')
      cy.get('*[data-cy="featItemArea"]').should('contain.text', '766.33 km²')
      cy.dragVertexOnMap(200, 200, 300, 300)
      cy.get('*[data-cy="featItemLength"]').should('contain.text', '238.47 km')
      // there is a strange behaviour in CI:
      // - chrome and chromium browsers give different decimals in measurements
      // - therefore only the int part of the surface is checked
      cy.get('*[data-cy="featItemArea"]')
        .should('contain.text', 'Surface:\u00A01532.')
        .and('contain.text', ' km²')
    })

    it('displays the possible actions for the feature', () => {
      testFeatItem()
    })
  })

  describe('When clicking button dock', () => {
    it('displays the feature info in the map popup', () => {
      testFeatItemDocking()
      testFeatItemMeasurements()
    })
  })

  describe('When clicking button dropdown menu', () => {
    it('displays the dropdown menu content for "Label"', () => {
      cy.get('[data-cy="featMenuPopup"] > button').should('exist')
      cy.get('[data-cy="featMenuPopup"] > button').click()

      cy.get('[data-cy="featMenuPopupItem"]').as('menuItem')
      cy.get('@menuItem').should('have.length', 3)
      cy.get('@menuItem').eq(0).should('contain.text', 'Exporter un GPX')
      cy.get('@menuItem').eq(1).should('contain.text', 'Exporter un KML')
      cy.get('@menuItem').eq(2).should('contain.text', 'Exporter un Shapefile')
    })
  })
})
