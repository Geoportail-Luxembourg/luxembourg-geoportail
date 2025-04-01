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
      const langSelectBtn = () =>
        cy.get('[data-cy="langSelect"] .lux-dropdown-btn')
      langSelectBtn().click()
      langSelectBtn().should('have.css', 'background-color', 'rgb(232, 76, 61)')

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

  describe('When using a link to an existing "non-main" theme', () => {
    it('the colors of the "geomètres officiels" theme should be loaded as 187,187,187', () => {
      cy.visit('/theme/go')
      cy.get('[data-cy="layerPanel"]')
        .parent()
        .should('have.css', 'background-color', 'rgb(187, 187, 187)')
    })

    it('the colors of a non-existing theme is the same as main theme', () => {
      cy.visit('/theme/cadastre1337')
      cy.get('[data-cy="layerPanel"]')
        .parent()
        .should('have.css', 'background-color', 'rgb(151, 187, 211)')
    })
  })
})
