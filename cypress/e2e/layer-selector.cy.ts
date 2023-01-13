

describe('Test theme selector', () => {
  it('Check selector menu and select themes', () => {
    cy.visit('/')
    // cy.root().should('have.css', 'background-color', '#2980b9')
    cy.window().its('mapStore.layers').should('have.lengthOf', 0)
    
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="catalog"]').find('button').first().click()
    cy.get('[data-cy="catalog"]').find('button').eq(1).click()
    cy.get('[data-cy="catalog"]').find('button').eq(3).click()
    cy.window().its('mapStore.layers').should('have.lengthOf', 1)
    cy.get('[data-cy="catalog"]').find('button').eq(5).click()
    cy.get('[data-cy="myLayersButton"]').click()
    cy.window().its('mapStore.layers').should('have.lengthOf', 2)
    cy.get('[data-cy="myLayers"]').find('button').eq(2).click()
    cy.get('[data-cy="myLayers"]').find('button').eq(5).click()
    cy.get('[data-cy="remoteLayerBox"]').find('button').first().click()
    cy.get('[data-cy="remoteLayerBox"]').find('button').eq(1).click()
  })
})
