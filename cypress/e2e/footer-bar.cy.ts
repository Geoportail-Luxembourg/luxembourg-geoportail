describe('Footer bar', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Draw button', () => {
    it('toggles the ToolbarDraw', () => {
      cy.get('[data-cy="toolbarDraw"]').should('not.exist')
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('[data-cy="toolbarDraw"]').should('exist')
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('[data-cy="toolbarDraw"]').should('not.exist')
    })

    it('toggles the followRoads input depending on the drawLineButton', () => {
      cy.get('[data-cy="followRoads"]').should('not.exist')
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.get('[data-cy="followRoads"]').should('exist')
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.get('[data-cy="followRoads"]').should('not.exist')
    })
  })

  describe('Layers button', () => {
    describe('When opening style panel', () => {
      beforeEach(() => {
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('.fa-pencil').click()
      })

      it('style panel is shown', () => {
        cy.get('[data-cy="styleSelector"]').should('exist')
      })

      describe('When clicking on layers button', () => {
        beforeEach(() => {
          cy.get('[data-cy="layersOpenClose"]').find('button').click()
        })

        it('closes the style selector and goes back to layer panel', () => {
          cy.get('[data-cy="styleSelector"]').should('not.exist')
          cy.get('[data-cy="layerPanel"]').should('exist')
        })
      })
    })
  })
})
