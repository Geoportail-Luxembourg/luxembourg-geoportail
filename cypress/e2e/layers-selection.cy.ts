describe('Catalogue', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="catalog"]').find('button').first().click()
    cy.get('[data-cy="catalog"]').find('button').eq(1).click()
    cy.get('[data-cy="catalog"]').find('button').eq(3).click()
    cy.get('[data-cy="catalog"]').find('button').eq(5).click()
  })

  it('adds selected layers to the map and to the layer manager', () => {
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="myLayers"] > li').should('have.length', 3)
  })

  it('toggles the layer visibility', () => {
    cy.url().should('contains', 'opacities=1-1')
    expect(localStorage.getItem('opacities')).to.eq('1-1')

    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="myLayers"]').find('button').eq(2).click()
    cy.get('[data-cy="myLayers"]')
      .find('button')
      .eq(5)
      .click()
      .should(() => {
        expect(localStorage.getItem('opacities')).to.eq('1-0')
      }) // toggle button visible

    cy.url().should('contains', 'opacities=1-0')
    cy.get('[data-cy="myLayers"]')
      .find('button')
      .eq(5)
      .should('have.class', 'fa-eye-slash')
  })
})

describe('Remote layers', () => {
  it('adds layers from the remote layers modale', () => {
    cy.get('[data-cy="remoteLayerBox"]').find('button').first().click()
    cy.get('[data-cy="remoteLayerBox"]').find('button').eq(1).click()
    // TODO: continue click until adding a layer
  })
})
