describe('Permalink/State persistor - Expanded nodes', () => {
  beforeEach(() => {
    cy.visit('/theme/main')
    cy.get('[data-cy="catalogButton"]').click()
  })

  describe('Default state', () => {
    it('uses server defaults and does not add expandedNodes to the URL', () => {
      // 2841 "Couches populaires" — is_expanded: true
      cy.get('[data-cy="parentLayerLabel-2841"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'true')
      // 2846 "Couches récentes" — is_expanded: false
      cy.get('[data-cy="parentLayerLabel-2846"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'false')
      cy.url().should('not.contain', 'expandedNodes')
    })
  })

  describe('Expand a collapsed node', () => {
    it('expands the node in the catalog', () => {
      // 2846 is collapsed by default — expand it
      cy.get('[data-cy="parentLayerLabel-2846"]').find('button').click()
      cy.get('[data-cy="parentLayerLabel-2846"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'true')
    })
  })

  describe('Collapse an expanded node', () => {
    it('collapses the node in the catalog', () => {
      // 2841 is expanded by default — collapse it
      cy.get('[data-cy="parentLayerLabel-2841"]').find('button').click()
      cy.get('[data-cy="parentLayerLabel-2841"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'false')
    })
  })

  describe('URL permalink restore', () => {
    it('restores expanded state from expandedNodes URL param', () => {
      // 2846 is collapsed by default — URL overrides it to expanded
      cy.visit('/theme/main?expandedNodes=2846')
      cy.get('[data-cy="parentLayerLabel-2846"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'true')
    })

    it('restores collapsed state from prefixed expandedNodes URL param', () => {
      // 2841 is expanded by default — URL overrides it to collapsed
      cy.visit('/theme/main?expandedNodes=-2841')
      cy.get('[data-cy="parentLayerLabel-2841"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'false')
    })
  })
})
