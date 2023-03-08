describe('Permalink/State persistor - Version in url', () => {
  describe('Version 2 in url', () => {
    beforeEach(() => {
      cy.visit(
        '/?zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,1,1&layers_visibility=true,true,true&bgOpacity=22'
      )
    })

    it('sets the layers in the catalog', () => {})
  })
})
