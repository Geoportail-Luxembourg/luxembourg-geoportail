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

  describe('Override cleanup', () => {
    it('removes the override from localStorage when re-expanded to match default', () => {
      // Collapse 2841 (expanded by default)
      cy.get('[data-cy="parentLayerLabel-2841"]').find('button').click()
      cy.window().then(win => {
        expect(win.localStorage.getItem('expandedNodes')).to.contain('-2841')
      })
      // Re-expand 2841 (back to default) — override should be removed
      cy.get('[data-cy="parentLayerLabel-2841"]').find('button').click()
      cy.window().then(win => {
        const val = win.localStorage.getItem('expandedNodes')
        expect(val === null || !val.includes('2841')).to.be.true
      })
    })
  })

  describe('localStorage persistence', () => {
    it('restores expanded state after page reload', () => {
      // Expand 2846 (collapsed by default)
      cy.get('[data-cy="parentLayerLabel-2846"]').find('button').click()
      cy.get('[data-cy="parentLayerLabel-2846"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'true')
      // Reload — override persists from localStorage
      cy.reload()
      cy.get('[data-cy="parentLayerLabel-2846"]')
        .find('button')
        .should('have.attr', 'aria-expanded', 'true')
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
  })
})
