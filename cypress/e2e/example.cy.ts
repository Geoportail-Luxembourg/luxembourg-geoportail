// https://docs.cypress.io/api/introduction/api.html

describe('Lux logo test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.get('header').find('div').find('img').should('have.attr', 'src').should('contain', 'gov-light')
    // cy.contains('body').contains('div').contains('div').contains('header').contains('div').contains('img')
  })
})

describe('Test existence of main components', () => {
  it('Check for BG selector component', () => {
    cy.visit('/')
    cy.get('[data-cy="selected-bg"]').find('button').should('not.be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('be.hidden')
    cy.get('[data-cy="selected-bg"]').find('button').click()
    cy.get('[data-cy="selected-bg"]').find('button').should('be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('not.be.hidden')
  })
})
