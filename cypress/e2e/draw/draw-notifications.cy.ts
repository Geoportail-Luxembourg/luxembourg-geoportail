describe('Draw notifications', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
  })

  describe('When clicking button to draw point', () => {
    it('show a helper message', () => {
      cy.get('[data-cy="notification"]').should('not.exist')
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('[data-cy="notification"]').should('have.length', 1)
      cy.get('[data-cy="notification"]').should(
        'have.text',
        'Cliquez pour placer le point'
      )
    })
  })

  describe('When clicking button to draw label', () => {
    it('show a helper message', () => {
      cy.get('[data-cy="notification"]').should('not.exist')
      cy.get('button[data-cy="drawLabelButton"]').click()
      cy.get('[data-cy="notification"]').should('have.length', 1)
      cy.get('[data-cy="notification"]').should(
        'have.text',
        "Cliquez pour placer l'étiquette"
      )
    })
  })

  describe('When clicking button to draw line', () => {
    it('show a helper message', () => {
      cy.get('[data-cy="notification"]').should('not.exist')
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.get('[data-cy="notification"]').should('have.length', 1)
      cy.get('[data-cy="notification"]').should(
        'have.text',
        'Cliquez pour commencer à dessiner la ligneFaites un double-clic ou ESC pour terminer. Tapez ⌫ pour enlever le dernier point dessinéActivez la coche "suivre les routes" pour faire coller votre ligne au réseau routier existant'
      )
    })
  })

  describe('When clicking button to draw polygon', () => {
    it('show a helper message', () => {
      cy.get('[data-cy="notification"]').should('not.exist')
      cy.get('button[data-cy="drawPolygonButton"]').click()
      cy.get('[data-cy="notification"]').should('have.length', 1)
      cy.get('[data-cy="notification"]').should(
        'have.text',
        'Cliquez pour commencer à dessiner le polygoneFaites un double-clic, typez ESC ou cliquez sur le dernier point pour terminerTapez ⌫ pour enlever le dernier point dessiné'
      )
    })
  })

  describe('When clicking button to draw circle', () => {
    it('show a helper message', () => {
      cy.get('[data-cy="notification"]').should('not.exist')
      cy.get('button[data-cy="drawCircleButton"]').click()
      cy.get('[data-cy="notification"]').should('have.length', 1)
      cy.get('[data-cy="notification"]').should(
        'have.text',
        'Cliquez pour commencer à dessiner un cercle'
      )
    })
  })
})
