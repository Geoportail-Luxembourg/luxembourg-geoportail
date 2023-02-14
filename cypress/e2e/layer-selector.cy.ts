import { last } from "cypress/types/lodash"

describe('Test layer selector', () => {
  it('Check selector menu and select themes', () => {
    cy.visit('/')
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="catalog"]').find('button').first().click()
    cy.get('[data-cy="catalog"]').find('button').eq(1).click()
    cy.get('[data-cy="catalog"]').find('button').eq(3).click()
    cy.get('[data-cy="catalog"]').find('button').eq(5).click()
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="myLayers"]').find('button').eq(2).click()
    cy.get('[data-cy="myLayers"]').find('button').eq(5).click()
    cy.get('[data-cy="remoteLayerBox"]').find('button').first().click()
    cy.get('[data-cy="remoteLayerBox"]').find('button').eq(1).click()    
  })
})
