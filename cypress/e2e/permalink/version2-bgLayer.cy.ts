describe('Version 2 in url - Background layer', () => {
  describe('When given "webbasemap" background layer in url', () => {
    it('convert the bg layer "webbasemap" to v3 and updates the url in v3', () => {
      cy.visit(
        '/?bgLayer=webbasemap&bgOpacity=22&zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,0.5,0.25&layers_visibility=false,true,true'
      )
      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('.lux-layer-manager-item').last().contains('Carte routière')
      cy.url().should('contains', 'bgLayer=basemap_2015_global')
    })
  })

  describe('When given "pixelmaps-color" background layer in url', () => {
    it('convert the bg layer "pixelmaps-color" to v3 and updates the url in v3', () => {
      cy.visit(
        '/?bgLayer=pixelmaps-color&bgOpacity=22&zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,0.5,0.25&layers_visibility=false,true,true'
      )
      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('.lux-layer-manager-item').last().contains('Carte topographique')
      cy.url().should('contains', 'bgLayer=topogr_global')
    })
  })

  describe('When given "pixelmaps-gray" background layer in url', () => {
    it('convert the bg layer "pixelmaps-gray" to v3 and updates the url in v3', () => {
      cy.visit(
        '/?bgLayer=pixelmaps-gray&bgOpacity=22&zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,0.5,0.25&layers_visibility=false,true,true'
      )
      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('.lux-layer-manager-item').last().contains('Carte topographique')
      cy.url().should('contains', 'bgLayer=topo_bw_jpeg')
    })
  })

  describe('When given "streets" background layer in url', () => {
    it('convert the bg layer "streets" to v3 and updates the url in v3', () => {
      cy.visit(
        '/?bgLayer=streets&bgOpacity=22&zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,0.5,0.25&layers_visibility=false,true,true'
      )
      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('.lux-layer-manager-item').last().contains('Carte hybride')
      cy.url().should('contains', 'bgLayer=streets_jpeg')
    })
  })

  describe('When given "voidlayer" background layer in url', () => {
    it('convert the bg layer "voidlayer" to v3 and updates the url in v3', () => {
      cy.visit(
        '/?bgLayer=voidlayer&bgOpacity=22&zoom=11&X=74204.10937&Y=77809.20313&layers=communes_labels,cantons_labels,districts_labels&layers_indices=5,6,7&layers_opacity=1,0.5,0.25&layers_visibility=false,true,true'
      )
      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('.lux-layer-manager-item').last().contains('Fond blanc')
      cy.url().should('contains', 'bgLayer=blank')
    })
  })
})
