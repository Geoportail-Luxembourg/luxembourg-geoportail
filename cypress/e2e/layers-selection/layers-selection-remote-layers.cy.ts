describe('Remote layers', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.skip('adds layers from the remote layers modale', () => {
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="addRemoteLayer"]').click()
    cy.get('[data-cy="remoteLayerModalContent"]').find('button').eq(0).click()
    cy.get('[data-cy="remoteLayerModalContent"]').find('button').eq(1).click()
    cy.get('[data-cy^="parentLayerLabel-WMS||http://wmts1.geoportail.lu/"]')
      .first()
      .click({ force: true })
    cy.get('[data-cy^="layerLabel-WMS||http://wmts1.geoportail.lu/"]')
      .first()
      .click({ force: true })
    cy.get('[data-cy="myLayers"] > ul > li').should('have.length', 1)
  })
})
