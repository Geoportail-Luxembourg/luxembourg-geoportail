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
})
