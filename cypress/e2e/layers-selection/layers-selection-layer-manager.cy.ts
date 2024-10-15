describe('LayerManager', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('opens catalog when clicking button "+ Add layer"', () => {
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="addLayer"]').click()
    cy.get('[data-cy="catalog"]').should('be.visible')
  })
})
