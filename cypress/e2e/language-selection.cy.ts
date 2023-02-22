describe('Language selector', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the language selector properly', () => {
    cy.get('[data-cy="langSelect"] .lux-dropdown-btn').should('not.be.hidden')
    cy.get('[data-cy="langSelect"] .lux-dropdown-list').should('be.hidden')
    cy.get('[data-cy="langSelect"] .lux-dropdown-list li').should(
      'have.length',
      4
    )
  })

  it('toggles dropdown when click on icon', () => {
    cy.get('[data-cy="langSelect"] .lux-dropdown-btn').click()
    cy.get('[data-cy="langSelect"] .lux-dropdown-list').should('not.be.hidden')
  })

  it('changes the language from FR to DE when selecting a lang', () => {
    cy.get('.lux-panel-title').contains('Couches')
    cy.get('[data-cy="myLayersButton"]').contains('Mes couches')
    cy.get('[data-cy="catalogButton"]').contains('Catalogue')

    cy.get('[data-cy="langSelect"] .lux-dropdown-btn').click()
    cy.get('[data-cy="langSelect"] [data-value="de"]').click()

    cy.get('.lux-panel-title').contains('Layer')
    cy.get('[data-cy="myLayersButton"]').contains('Meine Layer')
    cy.get('[data-cy="catalogButton"]').contains('Katalog')
    cy.get('[data-cy="langSelect"] .lux-dropdown-btn').should('not.be.hidden')
    cy.get('[data-cy="langSelect"] .lux-dropdown-list').should('be.hidden')
  })

  it('updates the lang param in the url when switching from FR to LB', () => {
    cy.url().should('contains', 'lang=fr')

    cy.get('[data-cy="langSelect"] .lux-dropdown-btn').click()
    cy.get('[data-cy="langSelect"] [data-value="lb"]').click()

    cy.url().should('contains', 'lang=lb')
  })

  it('updates the lang param in the localstorage when switching from FR to LB', () => {
    expect(localStorage.getItem('lang')).to.eq('fr')

    cy.get('[data-cy="langSelect"] .lux-dropdown-btn').click()
    cy.get('[data-cy="langSelect"] [data-value="lb"]')
      .click()
      .should(() => {
        expect(localStorage.getItem('lang')).to.eq('lb')
      })
  })
})
