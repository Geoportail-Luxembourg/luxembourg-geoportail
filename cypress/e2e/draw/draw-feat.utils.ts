/// <reference types="cypress" />

export function testFeatItem() {
  cy.get('*[data-cy="featItemToggleEdit"]').should(
    'have.text',
    'Quitter le mode édition'
  )
  cy.get('*[data-cy="featItemActionSearch"]').should('exist')
  cy.get('*[data-cy="featItemActionEdit"]').should('exist')
  cy.get('*[data-cy="featItemActionStyle"]').should('exist')
  cy.get('*[data-cy="featItemActionDelete"]').should('exist')
}

export function testFeatItemDocking() {
  cy.get('*[data-cy="mapPopup"]').should('not.exist')
  cy.get('*[data-cy="featItemDock"]').click()
  cy.get('*[data-cy="mapPopup"]').should('exist')
}
