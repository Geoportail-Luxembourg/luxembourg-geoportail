// https://docs.cypress.io/api/introduction/api.html

describe('Lux logo test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('header')
      .find('div')
      .find('img')
      .should('have.attr', 'src')
      .should('contain', 'gov-light')
    // cy.contains('body').contains('div').contains('div').contains('header').contains('div').contains('img')
  })
})

describe('Test existence of main components', () => {
  it('Get main components', () => {
    cy.visit('/')
    cy.get('[data-cy="selected-bg"]')
    cy.get('[data-cy="available-bgs"]')
    cy.get('[data-cy="mapContainer"]')
    cy.get('[data-cy="layerPanel"]')
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="themeSelectorButton"]')
    cy.get('[data-cy="catalog"]')
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="myLayers"]')
    cy.get('[data-cy="remoteLayerBox"]')
    cy.get('[data-cy="langSelect"]')
  })
})
