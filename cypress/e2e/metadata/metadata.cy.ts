describe('Metadata', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When user displays layer info', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="layerMetadata-698"]').click()
    })

    it('it show the popup with the layer metadata', () => {
      cy.get('[data-cy="metadata"]').find('span').eq(0).contains('Nom')
      cy.get('[data-cy="metadata"] .lux-legend')
        .find('h4')
        .eq(0)
        .contains('avec légende')
    })
  })
})
