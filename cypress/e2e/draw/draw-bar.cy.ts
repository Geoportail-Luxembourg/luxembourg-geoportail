import {
  checkDrawInteractionActive,
  checkModifyInteractionActive,
  testFeatItem,
} from './draw-feat.utils'

describe('Map controls', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
  })

  describe('When clicking button to open draw tools', () => {
    it('displays the "My Maps" panel', () => {
      cy.get('div[data-cy="myMapsPanel"]').should('exist')
    })
  })

  describe('When clicking button to close draw tools', () => {
    it('should deactivate active ol draw interaction', () => {
      cy.get('button[data-cy="drawPointButton"]').click()
      checkDrawInteractionActive('Point')
      cy.get('button[data-cy="drawButton"]').click()
      cy.getDrawInteractions().then(drawInteractions => {
        const activeInteractions = drawInteractions.filter(interaction => {
          return interaction.getActive() === true
        })
        expect(activeInteractions).to.have.length(0)
      })
    })
  })

  describe('when clicking button to draw point', () => {
    beforeEach(() => {
      cy.get('button[data-cy="drawPointButton"]').click()
    })
    it('activates ol Draw interaction in mode Point', () => {
      checkDrawInteractionActive('Point')
    })

    describe('When drawing the point on the map', () => {
      beforeEach(() => {
        cy.get('div.ol-viewport').click(100, 100, { force: true })
      })

      it('displays the draw Panel', () => {
        cy.get('div[data-cy="drawPanel"]').should('exist')
      })

      it('activates edition in panel and on map (ol modify interaction)', () => {
        checkModifyInteractionActive(true)
        testFeatItem()
      })

      it('does not display a tooltip overlay when clicking on the map', () => {
        cy.get('div.lux-tooltip').should('not.exist')
      })
    })
  })

  describe('when clicking button to draw label', () => {
    beforeEach(() => {
      cy.get('button[data-cy="drawLabelButton"]').click()
    })

    it('activates ol Draw interaction in mode Point', () => {
      checkDrawInteractionActive('Point')
    })

    describe('When drawing the label on the map', () => {
      beforeEach(() => {
        cy.get('div.ol-viewport').click(100, 100, { force: true })
      })

      it('displays the draw Panel', () => {
        cy.get('div[data-cy="drawPanel"]').should('exist')
      })

      it('activates edition in panel and on map (ol modify interaction)', () => {
        checkModifyInteractionActive(true)
        testFeatItem()
      })

      it('does not display a tooltip overlay when clicking on the map', () => {
        cy.get('div.lux-tooltip').should('not.exist')
      })
    })
  })

  describe('when clicking button to draw line', () => {
    beforeEach(() => {
      cy.get('button[data-cy="drawLineButton"]').click()
    })

    it('activates ol Draw interaction in mode LineString', () => {
      checkDrawInteractionActive('LineString')
    })

    it('displays a tooltip when clicking on the map and hides it on draw end (second point double click)', () => {
      cy.get('div.ol-viewport').click(100, 100, { force: true })
      cy.get('div.lux-tooltip').should('exist')
      cy.get('div.ol-viewport').dblclick(200, 200, { force: true })
      cy.get('div.lux-tooltip').should('not.exist')
    })

    describe('When drawing the line on the map', () => {
      beforeEach(() => {
        cy.get('div.ol-viewport').click(100, 100, { force: true })
        cy.get('div.ol-viewport').dblclick(200, 200, { force: true })
      })

      it('displays the draw Panel', () => {
        cy.get('div[data-cy="drawPanel"]').should('exist')
      })

      it('activates edition in panel and on map (ol modify interaction)', () => {
        checkModifyInteractionActive(true)
        testFeatItem()
      })
    })
  })

  describe('when clicking button to draw polygon', () => {
    beforeEach(() => {
      cy.get('button[data-cy="drawPolygonButton"]').click()
    })

    it('activates ol Draw interaction in mode Polygon', () => {
      checkDrawInteractionActive('Polygon')
    })

    it('displays a tooltip when clicking on the map and hides it on draw end (third point double click)', () => {
      cy.get('div.ol-viewport').click(100, 100, { force: true })
      cy.get('div.lux-tooltip').should('exist')
      cy.get('div.ol-viewport').click(100, 200, { force: true })
      cy.get('div.ol-viewport').dblclick(200, 200, { force: true })
      cy.get('div.lux-tooltip').should('not.exist')
    })

    describe('When drawing the polygon on the map', () => {
      beforeEach(() => {
        cy.get('div.ol-viewport').click(100, 100, { force: true })
        cy.get('div.ol-viewport').click(100, 200, { force: true })
        cy.get('div.ol-viewport').dblclick(200, 200, { force: true })
      })

      it('displays the draw Panel', () => {
        cy.get('div[data-cy="drawPanel"]').should('exist')
      })

      it('activates edition in panel and on map (ol modify interaction)', () => {
        checkModifyInteractionActive(true)
        testFeatItem()
      })
    })
  })

  describe('when clicking button to draw circle', () => {
    beforeEach(() => {
      cy.get('button[data-cy="drawCircleButton"]').click()
    })

    it('activates ol Draw interaction in mode Circle', () => {
      checkDrawInteractionActive('Circle')
    })

    it('displays a tooltip when clicking on the map and hides it on draw end (second point simple click)', () => {
      cy.get('div.ol-viewport').click(100, 100)
      cy.get('div.lux-tooltip').should('exist')
      cy.get('div.ol-viewport').click(200, 200)
      cy.get('div.lux-tooltip').should('not.exist')
    })

    describe('When drawing the polygon on the map', () => {
      beforeEach(() => {
        cy.get('div.ol-viewport').click(100, 100)
        cy.get('div.ol-viewport').dblclick(200, 200)
      })

      it('displays the draw Panel', () => {
        cy.get('div[data-cy="drawPanel"]').should('exist')
      })

      it('activates edition in panel and on map (ol modify interaction)', () => {
        checkModifyInteractionActive(true)
        testFeatItem()
      })
    })
  })
})
