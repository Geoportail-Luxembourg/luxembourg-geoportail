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

export function checkDrawInteractionActive(
  type: 'Point' | 'LineString' | 'Polygon' | 'Circle'
) {
  cy.getDrawInteractions().then(drawInteractions => {
    const activeInteractions = drawInteractions.filter(interaction => {
      return interaction.getActive() === true
    })
    expect(activeInteractions).to.have.length(1)
    expect(activeInteractions[0].mode_).to.be.equal(type)
  })
}

export function checkModifyInteractionActive(active: boolean) {
  cy.getModifyInteraction().then(modifyInteraction => {
    expect(modifyInteraction.getActive()).to.equal(active)
  })
}
