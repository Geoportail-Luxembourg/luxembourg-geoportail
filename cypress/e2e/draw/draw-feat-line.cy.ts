import { testFeatItem, testFeatItemDocking } from './draw-feat.utils'

function testFeatItemMeasurements() {
  cy.get('*[data-cy="featItemLength"]').should('exist')
  cy.get('*[data-cy="featItemArea"]').should('not.exist')
  cy.get('*[data-cy="featItemRadius"]').should('not.exist')
  cy.get('*[data-cy="featItemElevation"]').should('not.exist')
  cy.get('*[data-cy="featItemProfile"]').should('exist')
  cy.get('*[data-cy="featItemProfileCSV"]').should('exist')
}

describe('Draw "Line"', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawLineButton"]').click()
    cy.get('div.ol-viewport').click(100, 100, { force: true })
    cy.get('div.ol-viewport').dblclick(200, 200, { force: true })
  })

  describe('When clicking button to draw Line', () => {
    it('displays a new feature item in the draw panel', () => {
      cy.get('*[data-cy="featItemName"]').should('exist')
    })

    it('displays measurements for Line', () => {
      testFeatItemMeasurements()
    })

    it('updates length measurement when editing geometry', () => {
      cy.get('*[data-cy="featItemLength"]').should('contain.text', '55.4 km')
      cy.dragVertexOnMap(200, 200, 300, 300)
      cy.get('*[data-cy="featItemLength"]').should('contain.text', '111 km')
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
    it('displays the dropdown menu content for "Line"', () => {
      cy.get('[data-cy="featMenuPopup"] > button').should('exist')
      cy.get('[data-cy="featMenuPopup"] > button').click()

      cy.get('[data-cy="featMenuPopupItem"]').as('menuItem')
      cy.get('@menuItem').should('have.length', 5)
      cy.get('@menuItem').eq(0).should('contain.text', 'Exporter un GPX')
      cy.get('@menuItem').eq(1).should('contain.text', 'Exporter un KML')
      cy.get('@menuItem').eq(2).should('contain.text', 'Exporter un Shapefile')
      cy.get('@menuItem').eq(3).should('contain.text', 'Continuer la ligne')
      cy.get('@menuItem')
        .eq(4)
        .should('contain.text', 'Changer le sens de la ligne')
    })
  })
})
