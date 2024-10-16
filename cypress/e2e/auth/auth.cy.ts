describe('Authentification', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When user arrives on the page', () => {
    it('the authentification icon is located in the header', () => {
      cy.get('header [data-cy="authFormIcon"]').should('exist')
    })
  })

  describe('When user clicks on the auth icon in the header', () => {
    it('displays the authentification form correctly', () => {
      cy.get('header [data-cy="authFormIcon"]').click()
      cy.get('header [data-cy="authForm"]').should('exist')
      cy.get('header [data-cy="authForm"] form input[name="userName"]').should(
        'exist'
      )
      cy.get(
        'header [data-cy="authForm"] form input[name="userPassword"]'
      ).should('exist')
      cy.get(
        'header [data-cy="authForm"] form a[data-cy="authFormLostPwd"]'
      ).should('contain.text', "J'ai perdu mon mot de passe")
      cy.get(
        'header [data-cy="authForm"] form a[data-cy="authFormNewAccount"]'
      ).should('contain.text', 'Créer un nouvel utilisateur')
    })

    describe('When user clicks again', () => {
      it('hides the authentification form', () => {
        cy.get('header [data-cy="authFormIcon"]').click()
        cy.get('header [data-cy="authForm"]').should('exist')
        cy.get('header [data-cy="authFormIcon"]').click()
        cy.get('header [data-cy="authForm"]').should('not.be.visible')
      })
    })
  })
})
