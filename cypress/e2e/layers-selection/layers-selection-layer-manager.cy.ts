describe('LayerManager', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens catalog when clicking button "+ Add layer"', () => {
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="addLayer"]').click()
    cy.get('[data-cy="catalog"]').should('be.visible')
  })

  it('clears all layers when clicking "Clear all layers"', () => {
    // Add a layer from the catalog
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="parentLayerLabel-242"]').find('button').first().click()
    cy.get('[data-cy="parentLayerLabel-309"]').click()
    cy.get('[data-cy="layerLabel-269"]').click()

    // Open "Mes couches" and verify layer is present
    cy.get('[data-cy="myLayersButton"]').click({ force: true })
    cy.get('[data-cy="myLayer"]').should('have.length', 1)

    // Click "Clear all layers"
    cy.get('[data-cy="clearLayers"]').click()

    // Verify no layers remain
    cy.get('[data-cy="myLayer"]').should('not.exist')
  })
})
