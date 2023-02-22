describe('Theme selector', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('checks the panel having the default bg color', () => {
    cy.get('[data-cy="layerPanel"]')
      .parent()
      .should('have.css', 'background-color', 'rgb(151, 187, 211)')
  })

  describe('When switching theme', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="themeSelectorButton"]').click()
      cy.get('[data-cy="themeSelectorButton"]')
        .parent()
        .find('Button')
        .contains('Tourisme')
        .click()
    })

    it('updates the colors of the whole app while switching theme', () => {
      cy.get('[data-cy="layerPanel"]')
        .parent()
        .should('have.css', 'background-color', 'rgb(232, 140, 131)')
    })

    it('updates the colors of the language selector', () => {
      cy.get('[data-cy="langSelect"] .lux-dropdown-btn')
        .click()
        .should('have.css', 'background-color', 'rgb(232, 76, 61)')

      cy.get('[data-cy="langSelect"] .lux-dropdown-list li:not(.selected)')
        .should('have.length', 3)
        .each($el => {
          cy.wrap($el).should(
            'have.css',
            'background-color',
            'rgb(232, 76, 61)'
          )
        })
    })
  })
})
