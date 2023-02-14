describe('Background selector', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the background selector properly', () => {
    cy.get('[data-cy="selected-bg"]').find('button').should('not.be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('be.hidden')
  })

  it('opens the selector and shows all available backgrounds', () => {
    cy.get('[data-cy="selected-bg"]').find('button').click()
    cy.get('[data-cy="selected-bg"]').find('button').should('be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('not.be.hidden')
  })

  it('updates the layer manager and the map when selecting a background layer', () => {
    cy.get('[data-cy="selected-bg"]').find('button').click()
    cy.get('[data-cy="available-bgs"]')
      .find('button')
      .filter('[title*="topo_bw"]')
      .click()
    cy.get('.lux-layer-manager-item')
      .last()
      .contains('Carte topographique N/B')
      .should('be.visible')
    cy.wait(1000) // wait tiles to be fully loaded
    cy.get('[data-cy="mapContainer"]').matchImageSnapshot('select-topo_bw')
  })
})
