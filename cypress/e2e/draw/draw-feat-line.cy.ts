import { testFeatItem, testFeatItemDocking } from './draw-feat.utils'

function testFeatItemMeasurements() {
  cy.get('[data-cy="featItemLength"]').should('exist')
  cy.get('[data-cy="featItemArea"]').should('not.exist')
  cy.get('[data-cy="featItemRadius"]').should('not.exist')
  cy.get('[data-cy="featItemElevation"]').should('not.exist')
  cy.get('[data-cy="featItemProfile"]').should('exist')
  cy.get('[data-cy="featItemProfileCSV"]').should('exist')
}

describe('Draw "Line"', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'POST',
        pathname: '/profile.json',
      },
      req =>
        new Promise(r => {
          const resp = new Response(req.body, {
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
          })
          resp.formData().then(formData => {
            const geom = formData.get('geom')
            const coordinates = JSON.parse(geom as string).coordinates
            if (coordinates[0][0] > 40000) {
              r(req.body)
            } else {
              r({
                fixture: 'profile.json',
              })
            }
          })
        })
    ).as('profile-fixture')
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawLineButton"]').click()
    cy.get('div.ol-viewport').click(320, 223, { force: true })
    cy.get('div.ol-viewport').dblclick(389, 305, { force: true })
  })

  describe('When drawing a line', () => {
    it('displays a new feature item in the draw panel', () => {
      cy.get('[data-cy="featItemName"]')
        .should('exist')
        .should('contain.text', 'Ligne 1')
    })

    it('displays measurements for Line', () => {
      cy.wait('@profile-fixture')
      testFeatItemMeasurements()
    })

    it('displays the elevation profile for Line', () => {
      cy.wait('@profile-fixture')
      cy.get('[data-cy="featItemProfileCumul"]').should(
        'contain.text',
        'Δ+964 m Δ-1105 m Δ-141 m'
      )
      cy.get('[data-cy="featItemProfile"] svg').should('exist')
      cy.get('[data-cy="featItemProfile"] svg g.grid-y > g.tick').should(
        'have.length',
        7
      )
      cy.get('[data-cy="featItemProfile"] svg g.x.axis > g.tick').should(
        'have.length',
        9
      )
      cy.get('[data-cy="featItemProfile"] svg g.y.axis > g.tick')
        .eq(6)
        .find('text')
        .should('have.text', '500')
    })

    describe('When editing the line', () => {
      it('refreshes the elevation profile for Line', () => {
        cy.dragVertexOnMap(320, 223, 305, 305)
        cy.wait('@profile-fixture')
        cy.get('[data-cy="featItemProfileCumul"]').should($el => {
          const text = $el.text()
          const validValues = [
            ' Δ+429 m Δ-490 m Δ-61 m',
            ' Δ+429 m Δ-489 m Δ-61 m',
          ]
          expect(validValues).to.include(text)
        })

        cy.get('[data-cy="featItemProfile"] svg g.y.axis > g.tick')
          .eq(6)
          .find('text')
          .should('have.text', '380')
      })
    })

    it('downloads the profile elevation', () => {
      cy.wait('@profile-fixture')
      cy.get('[data-cy="featItemProfileCSV"]').click()

      const downloadPath = 'cypress/downloads/Ligne_1.csv'
      cy.readFile(downloadPath).should('exist')

      cy.readFile(downloadPath).then(content => {
        expect(content).to.contain(
          'dist,MNT,y,x,lon,lat\n0,425.3,60019.883345295,105204.558805771,5.89013672441823,49.88086129777006\n423.7,446.6,60292.742941114775,104880.43553517274,5.893949526308415,49.87795628443879\n847.4,480.9,60565.60253693456,104556.31226457447,5.897761870512693,49.875051143511975\n'
        )
        // NB. This is the first lines of the file, not the full content
      })
    })

    it('updates length measurement when editing geometry', () => {
      cy.wait('@profile-fixture')
      cy.get('[data-cy="featItemLength"]').should('contain.text', '42.31 km')
      cy.dragVertexOnMap(320, 223, 305, 305)
      cy.wait('@profile-fixture')
      cy.get('[data-cy="featItemLength"]').should('contain.text', '33.26 km')
    })

    it('displays the possible actions for the feature', () => {
      cy.wait('@profile-fixture')
      testFeatItem()
    })
  })

  describe('When clicking button dock', () => {
    it('displays the feature info in the map popup', () => {
      testFeatItemDocking()
      cy.wait('@profile-fixture')
      testFeatItemMeasurements()
    })
  })

  describe('When clicking button dropdown menu', () => {
    it('displays the dropdown menu content for "Line"', () => {
      cy.wait('@profile-fixture')
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

  describe('When using Escape key when drawing a line', () => {
    it('ends the drawing and adds a new line', () => {
      cy.get('*[data-cy="featItemName"]').should('have.length', 1)
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.get('div.ol-viewport').click(250, 250, { force: true })
      cy.get('div.ol-viewport').click(300, 300, { force: true })
      cy.get('body').type('{esc}')
      cy.get('*[data-cy="featItemName"]').should('have.length', 2)
    })
  })
})
