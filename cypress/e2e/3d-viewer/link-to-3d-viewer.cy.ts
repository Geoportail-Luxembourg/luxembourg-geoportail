describe('Link to 3D Viewer', () => {
  beforeEach(() => {
    cy.visit(`/?rotation=${Math.PI / 2}`)
  })

  describe('When user arrives on the page', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="parentLayerLabel-242"]').find('button').first().click()
      cy.get('[data-cy="parentLayerLabel-309"]').click()
      cy.get('[data-cy="layerLabel-269"]').click()
      cy.get('[data-cy="layerLabel-349"]').click()
      cy.get('[data-cy="layerLabel-329"]').click()
    })

    it('The 3D button is an external link that opens the 3D viewer in a predefined tab named "lux3d", automatically loading the current coordinates (x, y, z), inverse rotation transformed to degrees and selected layers for seamless continuation of the session', () => {
      cy.get('[data-cy="3dViewerLink"] > a')
        .should(
          'have.attr',
          'href',
          'https://geoportail-luxembourg.github.io/3dviewer/lux/?state=%5B%5B%5B6.000000496232584%2C49.69999815293053%2C350000%5D%2C%5B6.000000496232584%2C49.69999815293053%2C350000%5D%2C300%2C-90%2C-90%2C0%5D%2C%22cesium%22%2C%5B%22catalogConfig%22%2C%22LuxConfig%22%5D%2C%5B%5B%22basemap_2015_global%22%2C1%2C0%5D%2C%5B%22communes_labels%22%2C1%2C0%5D%2C%5B%22country%22%2C1%2C0%5D%2C%5B%22cantons%22%2C1%2C0%5D%5D%2C%5B%5D%2C0%5D'
        )
        .and('have.attr', 'target', 'lux3d')
    })
  })
})
