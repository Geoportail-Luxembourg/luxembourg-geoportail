describe('Test background selector', () => {
  it('Check selector menu and select BW background', () => {
    cy.visit('/')
    cy.get('[data-cy="langSelect"]').select('fr')
    cy.get('[data-cy="layerPanel"]').contains('Mes couches')
    cy.get('[data-cy="langSelect"]').select('en')
    cy.get('[data-cy="layerPanel"]').contains('My layers')
    cy.get('[data-cy="langSelect"]').select('de')
    cy.get('[data-cy="layerPanel"]').contains('Meine Layer')
    cy.get('[data-cy="langSelect"]').select('lb')
    cy.get('[data-cy="layerPanel"]').contains('Méng Layeren')
  })
})
