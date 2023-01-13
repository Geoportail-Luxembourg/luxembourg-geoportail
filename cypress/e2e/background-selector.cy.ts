describe('Test background selector', () => {
  it('Check selector menu and select BW background', () => {
    cy.visit('/')
    cy.get('[data-cy="selected-bg"]').find('button').should('not.be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('be.hidden')
    cy.get('[data-cy="selected-bg"]').find('button').click()
    cy.get('[data-cy="selected-bg"]').find('button').should('be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('not.be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').filter('[title*="topo_bw"]').click()
    cy.window().its('mapStore.bgLayer.name').should('be.equal', 'topo_bw_jpeg')
  })
})
