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
    cy.get('div.ol-viewport').click(100, 100)
    cy.get('div.ol-viewport').click(100, 200)
    cy.get('div.ol-viewport').dblclick(200, 200)
  })

  describe('When clicking button to draw Polygon', () => {
    it('displays a new feature item in the draw panel', () => {
      cy.get('*[data-cy="featItemName"]').should('exist')
    })

    it('displays measurements for Polygon', () => {
      testFeatItemMeasurements()
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
