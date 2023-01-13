

describe('Test theme selector', () => {
  it('Check selector menu and select themes', () => {
    cy.visit('/')
    // cy.root().should('have.css', 'background-color', '#2980b9')
    cy.get('[data-cy="layerPanel"]').parent().should('have.css', 'background-color', 'rgb(151, 187, 211)')
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="themeSelectorButton"]').click()
    cy.get('[data-cy="themeSelectorButton"]').parent().find('Button').contains('Tourisme').click()
    cy.get('[data-cy="layerPanel"]').parent().should('have.css', 'background-color', 'rgb(232, 140, 131)')
  })
})
