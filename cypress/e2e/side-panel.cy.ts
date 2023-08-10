describe('Side panel', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('opening / closing panel', () => {
    describe('when clicking cross', () => {
      it('closes layerPanel', () => {
        cy.visit('/')
        cy.get('[data-cy="layerPanel"]').should('exist')
        cy.get('[data-cy="layerPanel"]').find('button').first().click()
        cy.get('[data-cy="layerPanel"]').should('not.exist')
      })
    })
  })
})
