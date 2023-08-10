describe('Header bar', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/')
  })

  describe('When clicking on the theme button', () => {
    describe('When side panel is already opened', () => {
      describe('When side panel is on the "My Layers" tab', () => {
        it('shows the catalog tab and opens the theme grid', () => {
          cy.get('[data-cy="selectedThemeIcon"]').click()
          cy.get('[data-cy="themeGrid"]').should('be.visible')
        })
      })

      describe('When side panel is already on the "Catalog" tab', () => {
        beforeEach(() => {
          cy.get('[data-cy="catalogButton"]').click()
          cy.get('[data-cy="selectedThemeIcon"]').click()
        })

        it('shows the catalog tab and opens the theme grid', () => {
          cy.get('[data-cy="themeGrid"]').should('be.visible')
        })
      })

      describe('When side panel is already on the "Catalog" tab and the grid is already opened', () => {
        beforeEach(() => {
          cy.get('[data-cy="catalogButton"]').click()
          cy.get('[data-cy="themeSelectorButton"]').click()
          cy.get('[data-cy="selectedThemeIcon"]').click()
        })

        it('closes the whole side panel', () => {
          cy.get('[data-cy="layerPanel"]').should('not.exist')
        })
      })
    })

    describe('When side panel is NOT opened', () => {
      beforeEach(() => {
        window.localStorage.setItem('layersOpen', 'false')
      })

      it('shows the catalog tab and opens the theme grid', () => {
        cy.get('[data-cy="selectedThemeIcon"]').click()
        cy.get('[data-cy="themeGrid"]').should('be.visible')
      })
    })
  })
})
