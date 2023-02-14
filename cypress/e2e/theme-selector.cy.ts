describe('Theme selector', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('checks the panel having the default bg color', () => {
    cy.get('[data-cy="layerPanel"]')
      .parent()
      .should('have.css', 'background-color', 'rgb(151, 187, 211)')
  })

  it('updates the colors of the whole app while switching theme', () => {
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="themeSelectorButton"]').click()
    cy.get('[data-cy="themeSelectorButton"]')
      .parent()
      .find('Button')
      .contains('Tourisme')
      .click()
    cy.get('[data-cy="layerPanel"]')
      .parent()
      .should('have.css', 'background-color', 'rgb(232, 140, 131)')
  })
})
