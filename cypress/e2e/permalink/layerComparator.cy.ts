describe('Permalink/State persistor - Layer comparator (lc & sliderRatio)', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="catalog"]').find('button').first().click()
    cy.get('[data-cy="catalog"]').find('button').eq(1).click()
    cy.get('[data-cy="catalog"]').find('button').eq(3).click()
    cy.get('[data-cy="catalog"]').find('button').eq(5).click()
    cy.get('[data-cy="catalog"]').find('button').eq(7).click()
    cy.get('[data-cy="myLayersButton"]').click()
  })

  describe('initial state', () => {
    describe('when expanding layer item in layer manager', () => {
      it('displays a button to toggle the comparator for the top layer only', () => {
        cy.get('button[data-cy="myLayerItemLabel-346"]').click()
        cy.get('#layer-manager-item-content-346 button:last-child').should(
          'have.class',
          'fa-circle'
        )
        cy.get('button[data-cy="myLayerItemLabel-302"]').click()
        cy.get('#layer-manager-item-content-302 button:last-child').should(
          'not.exist'
        )
        cy.get('button[data-cy="myLayerItemLabel-269"]').click()
        cy.get('#layer-manager-item-content-269 button:last-child').should(
          'not.exist'
        )
      })
    })

    describe('when clicking the toggle layer comparator button', () => {
      it('toggles the button display', () => {
        cy.get('button[data-cy="myLayerItemLabel-346"]').click()
        cy.get('#layer-manager-item-content-346 button:last-child').should(
          'have.class',
          'fa-circle'
        )
        cy.get('#layer-manager-item-content-346 button:last-child')
          .click()
          .should('have.class', 'fa-adjust')
      })

      it('updates the permalink parameter "lc"', () => {
        cy.get('button[data-cy="myLayerItemLabel-346"]').click()
        cy.url().should('not.contain', 'lc=true')
        cy.get('#layer-manager-item-content-346 button:last-child').click()
        cy.url().should('contains', 'lc=true')
      })

      it('updates the permalink parameter "sliderRatio" with default value 0.5', () => {
        cy.get('button[data-cy="myLayerItemLabel-346"]').click()
        cy.url().should('not.contain', 'sliderRatio')
        cy.get('#layer-manager-item-content-346 button:last-child').click()
        cy.url().should('contains', 'sliderRatio=0.5')
      })
    })
  })
})
