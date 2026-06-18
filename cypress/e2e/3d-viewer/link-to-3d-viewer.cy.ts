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
          'https://3d.geoportail.lu/?state=%5B%5B%5B%5D%2C%5B6.000000496232584%2C49.69999815293053%2C300%5D%2C350000%2C-90%2C%22-30%22%2C0%5D%2C%22cesium%22%2C%5B%22LuxConfig%22%2C%228bbdc4b3-691e-466e-9e91-2b0d57a9a53e%22%2C%22c627c247-8017-483a-a32e-1ff0ad5f0536%22%2C%220fa7c853-d866-486c-8c2d-3470f401d44c%22%2C%221f9cb759-c3dc-44ba-9253-7299701499a3%22%2C%22f7791a73-5132-4282-b3c4-1adb1abce06a%22%2C%22catalogConfig%22%5D%2C%5B%22%5B%5C%22basemap_2015_global%5C%22%2C1%2C0%5D%22%2C%22%5B%5C%22communes_labels%5C%22%2C1%2C0%5D%22%2C%22%5B%5C%22country%5C%22%2C1%2C0%5D%22%2C%22%5B%5C%22cantons%5C%22%2C1%2C0%5D%22%5D%2C%5B%5D%2C%5B%5B%22%40geoportallux%2Flux-3dviewer-themesync%22%2C%7B%22prop%22%3A%22*%22%7D%5D%2C%5B%22%40geoportallux%2Flux-3dviewer-plugin-back-to-2d-portal%22%2C%7B%22prop%22%3A%22*%22%7D%5D%5D%2C0%5D'
        )
        .and('have.attr', 'target', 'lux3d')
    })

    it('The pitch in the 3D viewer URL reflects the value configured via VITE_LUX_VCS_PITCH', () => {
      cy.get('[data-cy="3dViewerLink"] > a')
        .invoke('attr', 'href')
        .should('include', '%22-30%22')
        .and('not.include', '%22-45%22')
    })
  })
})
