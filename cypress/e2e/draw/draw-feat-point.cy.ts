import { testFeatItem, testFeatItemDocking } from './draw-feat.utils'

function testFeatItemMeasurements() {
  cy.get('*[data-cy="featItemLength"]').should('not.exist')
  cy.get('*[data-cy="featItemArea"]').should('not.exist')
  cy.get('*[data-cy="featItemRadius"]').should('not.exist')
  cy.get('*[data-cy="featItemElevation"]').should('exist')
  cy.get('*[data-cy="featItemProfile"]').should('not.exist')
}

function testFeatStyleEditionTabContent(withAngle: boolean) {
  cy.get('*[data-cy="featStyleColor"]').should('exist')
  cy.get('*[data-cy="featStyleSize"]').should('exist')
  cy.get('*[data-cy="featStyleAngle"]').should(
    withAngle ? 'exist' : 'not.exist'
  )
  cy.get('*[data-cy="featStyleSymbol"]').should('exist')
  cy.get('*[data-cy="featStyleLineStyle"]').should('not.exist')
  cy.get('*[data-cy="featStyleLineWidth"]').should('not.exist')
  cy.get('*[data-cy="featStyleOpacity"]').should('not.exist')
  cy.get('*[data-cy="featStyleOrientation"]').should('not.exist')
}

describe('Draw "Point"', () => {
  beforeEach(() => {
    // mocks for 100x100, 200x200, 300x300 clicks
    cy.intercept(
      'GET',
      '/raster?lon=-25877.619036593664&lat=154433.4715351454',
      {
        statusCode: 200,
        body: {
          dhm: null,
        },
      }
    )
    cy.intercept(
      'GET',
      '/raster?lon=12756.103097272688&lat=114635.74032468312',
      {
        statusCode: 200,
        body: {
          dhm: 333.13,
        },
      }
    )
    cy.intercept('GET', '/raster?lon=51966.98676810359&lat=74839.09999860045', {
      statusCode: 500,
      body: {},
    })

    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawPointButton"]').click()
    cy.get('div.ol-viewport').click(100, 100)
  })

  describe('When clicking button to draw Point', () => {
    it('displays a new feature item in the draw panel', () => {
      cy.get('*[data-cy="featItemName"]').should('exist')
    })

    it('displays measurements for Point', () => {
      testFeatItemMeasurements()
    })

    it('displays N/A elevation for Point if data is null', () => {
      cy.get('*[data-cy="featItemElevation"]').should('contain.text', 'N/A')
    })

    it('displays elevation for new Point', () => {
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('div.ol-viewport').click(200, 200)
      cy.get('*[data-cy="featItemElevation"]').should(
        'contain.text',
        '333.13 m'
      )
    })

    it('displays N/A elevation for new Point if response has error', () => {
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('div.ol-viewport').click(300, 300)
      cy.get('*[data-cy="featItemElevation"]').should('contain.text', 'N/A')
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
    it('displays the dropdown menu content for "Point"', () => {
      cy.get('[data-cy="featMenuPopup"] > button').should('exist')
      cy.get('[data-cy="featMenuPopup"] > button').click()

      cy.get('[data-cy="featMenuPopupItem"]').as('menuItem')
      cy.get('@menuItem').should('have.length', 3)
      cy.get('@menuItem').eq(0).should('contain.text', 'Exporter un GPX')
      cy.get('@menuItem').eq(1).should('contain.text', 'Exporter un KML')
      cy.get('@menuItem').eq(2).should('contain.text', 'Exporter un Shapefile')
    })
  })

  describe('When editing feature style', () => {
    beforeEach(() => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
    })

    it('displays the style edition tab for "Point"', () => {
      const withAngle = false
      testFeatStyleEditionTabContent(withAngle)
    })

    describe('When editing symbol', () => {
      beforeEach(() => {
        cy.get('[data-cy="featStyleSymbolEdit"]').click()
      })

      it('displays the symbol edition tab', () => {
        cy.get('[data-cy="featStyleColor"]').should('exist')
        cy.get('[data-cy^="featStyleSymbol_"]').should('have.length', 4)
      })

      describe('When browsing public symbols', () => {
        beforeEach(() => {
          cy.get('[data-cy="featStyleSymbolTab"]').eq(1).click()
        })

        it('displays the public symbol list', () => {
          cy.get('[data-cy="featStyleSymbolFilterList"]').should('exist')
          cy.get('[data-cy="featStyleSymbolIcon"]').should('have.length', 81)
        })

        describe('When filtering public symbols', () => {
          it('displays the public symbol list', () => {
            cy.get('[data-cy="featStyleSymbolFilterList"]').type('pin1')
            cy.get('[data-cy="featStyleSymbolIcon"]').should('have.length', 2)
          })
        })

        describe('When choosing a symbol', () => {
          it('should close the list', () => {
            cy.get('[data-cy="featStyleSymbolFilterList"]').should('exist')
            cy.get('[data-cy="featStyleSymbolIcon"]').eq(1).click()
            cy.get('[data-cy="featStyleSymbolFilterList"]').should('not.exist')

            const withAngle = true
            testFeatStyleEditionTabContent(withAngle)
          })
        })
      })

      describe('When clicking close button', () => {
        it('returns to style edition tab', () => {
          cy.get('[data-cy="featClosePopup"]').click()

          const withAngle = false
          testFeatStyleEditionTabContent(withAngle)
        })
      })
    })
  })
})
