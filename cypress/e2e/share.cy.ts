describe('Share URL Tool', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should open share toolbar when share button is clicked', () => {
    cy.get('[data-cy="shareButton"]').should('be.visible').click()
    cy.get('[data-cy="sharePanel"]').should('be.visible')
  })

  it('should display short URL by default', () => {
    cy.get('[data-cy="shareButton"]').click()
    cy.get('[data-cy="shareShortUrl"]').should('be.visible')
    cy.get('[data-cy="shareShortUrl"]').should('have.value').and('not.be.empty')
  })

  it('should toggle between short and long URL', () => {
    cy.get('[data-cy="shareButton"]').click()

    // Initially showing short URL
    cy.get('[data-cy="shareShortUrl"]').should('be.visible')
    cy.get('[data-cy="shareLongUrl"]').should('not.exist')

    // Check the "Show long url" checkbox
    cy.get('[data-cy="showLongUrlCheckbox"]').check()

    // Now showing long URL
    cy.get('[data-cy="shareLongUrl"]').should('be.visible')
    cy.get('[data-cy="shareShortUrl"]').should('not.exist')

    // Uncheck the checkbox
    cy.get('[data-cy="showLongUrlCheckbox"]').uncheck()

    // Back to short URL
    cy.get('[data-cy="shareShortUrl"]').should('be.visible')
    cy.get('[data-cy="shareLongUrl"]').should('not.exist')
  })

  it('should show only mymaps checkbox when map_id is present', () => {
    // Visit with a map_id parameter
    cy.visit('/?map_id=test-map-123')

    cy.get('[data-cy="shareButton"]').click()
    cy.get('[data-cy="onlyMymapsCheckbox"]').should('be.visible')
  })

  it('should close share toolbar when clicking button again', () => {
    cy.get('[data-cy="shareButton"]').click()
    cy.get('[data-cy="sharePanel"]').should('be.visible')

    // Click the share button again to close
    cy.get('[data-cy="shareButton"]').click()

    cy.get('[data-cy="sharePanel"]').should('not.exist')
  })

  it('should select text when input is clicked', () => {
    cy.get('[data-cy="shareButton"]').click()

    // Click the input to select text
    cy.get('[data-cy="shareShortUrl"]').click()

    // Verify the input is focused (text should be selected)
    cy.get('[data-cy="shareShortUrl"]').should('have.focus')
  })

  it('should not interfere with side panels', () => {
    // Open layers panel
    cy.get('[data-cy="layersOpenClose"]').click()
    cy.get('[data-cy="layersPanel"]').should('be.visible')

    // Open share toolbar
    cy.get('[data-cy="shareButton"]').click()
    cy.get('[data-cy="sharePanel"]').should('be.visible')

    // Layers panel should still be visible (toolbar doesn't close side panels)
    cy.get('[data-cy="layersPanel"]').should('be.visible')
  })
})
