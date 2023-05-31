describe('Permalink/State persistor - Layers', () => {
  describe('Restore layers from url', () => {
    describe('When layer opacities have values', () => {
      it('updates the url with the right opacity', () => {
        cy.visit(
          '/?lang=lb&X=762744&Y=6414661&version=3&zoom=11&layers=346-354-269&opacities=0.5-1-0.7&bgLayer=orthogr_2013_global'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .eq(0)
          .should('have.value', '75')
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .eq(1)
          .should('have.value', '100')
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .eq(2)
          .should('have.value', '50')
      })
    })

    describe('When a layer opacity is missing', () => {
      it('updates the url with a default opacity to 1', () => {
        cy.visit(
          '/?lang=lb&X=762744&Y=6414661&version=3&zoom=11&layers=346-354-269&opacities=1&bgLayer=orthogr_2013_global'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.url().should('contains', 'opacities=1-1-1')
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .should('have.length', 3)
          .each($el => {
            cy.wrap($el).should('have.value', '100')
          })
      })
    })
  })
})
