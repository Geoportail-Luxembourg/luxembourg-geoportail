describe('Map controls', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
  })

  describe('when clicking button to draw point', () => {
    it('activates ol Draw interaction in mode Point', () => {
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.getDrawInteractions().then(drawInteractions => {
        const activeInteractions = drawInteractions.filter(interaction => {
          return interaction.getActive() === true
        })
        expect(activeInteractions).to.have.length(1)
        expect(activeInteractions[0].mode_).to.be.equal('Point')
      })
    })
  })
  describe('when clicking button to draw label', () => {
    it('activates ol Draw interaction in mode Point', () => {
      cy.get('button[data-cy="drawLabelButton"]').click()
      cy.getDrawInteractions().then(drawInteractions => {
        const activeInteractions = drawInteractions.filter(interaction => {
          return interaction.getActive() === true
        })
        expect(activeInteractions).to.have.length(1)
        expect(activeInteractions[0].mode_).to.be.equal('Point')
      })
    })
  })
  describe('when clicking button to draw line', () => {
    it('activates ol Draw interaction in mode LineString', () => {
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.getDrawInteractions().then(drawInteractions => {
        const activeInteractions = drawInteractions.filter(interaction => {
          return interaction.getActive() === true
        })
        expect(activeInteractions).to.have.length(1)
        expect(activeInteractions[0].mode_).to.be.equal('LineString')
      })
    })
  })
  describe('when clicking button to draw polygon', () => {
    it('activates ol Draw interaction in mode Polygon', () => {
      cy.get('button[data-cy="drawPolygonButton"]').click()
      cy.getDrawInteractions().then(drawInteractions => {
        const activeInteractions = drawInteractions.filter(interaction => {
          return interaction.getActive() === true
        })
        expect(activeInteractions).to.have.length(1)
        expect(activeInteractions[0].mode_).to.be.equal('Polygon')
      })
    })
  })
  describe('when clicking button to draw circle', () => {
    it('activates ol Draw interaction in mode Circle', () => {
      cy.get('button[data-cy="drawCircleButton"]').click()
      cy.getDrawInteractions().then(drawInteractions => {
        const activeInteractions = drawInteractions.filter(interaction => {
          return interaction.getActive() === true
        })
        expect(activeInteractions).to.have.length(1)
        expect(activeInteractions[0].mode_).to.be.equal('Circle')
      })
    })
  })
})
