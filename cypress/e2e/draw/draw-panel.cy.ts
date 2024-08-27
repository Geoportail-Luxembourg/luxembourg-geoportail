describe('Draw panel', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawPointButton"]').click()
    cy.get('div.ol-viewport').click(100, 100)
  })

  describe('When clicking button to draw Point', () => {
    it('displays the draw panel', () => {
      cy.get('[data-cy="drawPanel"] h5').should('have.text', 'Dessins')
      cy.get('[data-cy="drawPanelMenuPopup"]').should('exist')
    })
  })

  describe('When clicking the dropdown menu icon', () => {
    it('displays the dropdown menu content', () => {
      cy.get('[data-cy="drawPanelMenuPopup"] > button').should('exist')
      cy.get('[data-cy="drawPanelMenuPopup"] > button').click()

      cy.get('[data-cy="drawPanelMenuPopupItem"]').as('menuItem')
      cy.get('@menuItem').eq(0).should('contain.text', 'Copier dans ma carte')
      cy.get('@menuItem')
        .eq(1)
        .should('contain.text', 'Effacer tous les dessins')
      cy.get('@menuItem')
        .eq(2)
        .should(
          'contain.text',
          'Créer une nouvelle carte à partir de ces dessins'
        )
      cy.get('@menuItem').eq(3).should('contain.text', 'Fusionner des lignes')
      cy.get('@menuItem').eq(4).should('contain.text', 'Couper une ligne')
    })
  })
})
