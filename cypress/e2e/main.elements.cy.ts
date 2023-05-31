// https://docs.cypress.io/api/introduction/api.html

describe('Lux logo test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('header')
      .find('div')
      .find('img')
      .should('be.visible')
      .should(img => {
        expect(img.get(0).naturalWidth).greaterThan(10)
      })
  })
})

describe('Test existence of main components', () => {
  it('Get main components', () => {
    cy.visit('/')
    cy.get('[data-cy="selectedBg"]')
    cy.get('[data-cy="available-bgs"]')
    cy.get('[data-cy="mapContainer"]')
    cy.get('[data-cy="layerPanel"]')
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="themeSelectorButton"]')
    cy.get('[data-cy="catalog"]')
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="myLayers"]')
    cy.get('[data-cy="addRemoteLayer"]').click()
    cy.get('[data-cy="remoteLayerBox"]')
    cy.get('[data-cy="langSelect"]')
  })
})
