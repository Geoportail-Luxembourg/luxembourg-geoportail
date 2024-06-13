describe('Footer bar', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('toggles the ToolbarDraw', () => {
    cy.get('[data-cy="toolbarDraw"]').should('not.exist')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('[data-cy="toolbarDraw"]').should('exist')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('[data-cy="toolbarDraw"]').should('not.exist')
  })
  it('toggles the followRoads input depending on the drawLineButton', () => {
    cy.get('[data-cy="followRoads"]').should('not.exist')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawLineButton"]').click()
    cy.get('[data-cy="followRoads"]').should('exist')
    cy.get('button[data-cy="drawLineButton"]').click()
    cy.get('[data-cy="followRoads"]').should('not.exist')
  })
})
