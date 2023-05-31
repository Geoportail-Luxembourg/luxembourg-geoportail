describe('Version 2 in url - Layers, opacities, visibilities, ...', () => {
  beforeEach(() => {
    cy.visit(
      '/?zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,0.5,0.25&layers_visibility=false,true,true&bgOpacity=22'
    )
    cy.get('[data-cy="myLayersButton"]').click()
  })

  it('updates the url with version 3', () => {
    cy.url().should('contains', 'version=3')
  })

  describe('When given layers (names instead of ids) in url', () => {
    it('sets the layers in the catalog', () => {
      cy.get('[data-cy="myLayer"]').eq(0).should('have.id', '268')
      cy.get('[data-cy="myLayer"]').eq(1).should('have.id', '346')
      cy.get('[data-cy="myLayer"]').eq(2).should('have.id', '269')
    })

    it('sets the correct opacity/visibility in the catalog', () => {
      cy.get('[data-cy="myLayer"]')
        .eq(0)
        .find('input[type="range"]')
        .should('have.value', '25')
      cy.get('[data-cy="myLayer"]')
        .eq(1)
        .find('input[type="range"]')
        .should('have.value', '50')
      cy.get('[data-cy="myLayer"]')
        .eq(2)
        .find('input[type="range"]')
        .should('have.value', '0')
    })
  })
})
