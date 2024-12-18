describe('Authentification', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When user arrives on the page', () => {
    it('the authentication icon is located in the header', () => {
      cy.get('header [data-cy="authFormIcon"]').should('exist')
    })
  })

  describe('When user clicks on the auth icon in the header', () => {
    it('displays the authentication form correctly', () => {
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
      it('hides the authentication form', () => {
        cy.get('header [data-cy="authFormIcon"]').click()
        cy.get('header [data-cy="authForm"]').should('exist')
        cy.get('header [data-cy="authFormIcon"]').click()
        cy.get('header [data-cy="authForm"]').should('not.be.visible')
      })
    })

    describe('When user is authenticating with success', () => {
      beforeEach(() => {
        cy.login()
      })

      it('authenticates the user, hides the form and display the success notification msg', () => {
        cy.get('[data-cy="authForm"]').should('not.be.visible')
        cy.get('[data-cy="notification"]').should(
          'have.text',
          'Vous êtes maintenant correctement connecté.'
        )
      })

      it('displays the user login and mail', () => {
        cy.get('header [data-cy="authFormIcon"]').click()
        cy.get('[data-cy="authForm"]').should('contain.text', 'MyLogin')
        cy.get('[data-cy="authForm"]').should(
          'contain.text',
          'my_login@email.com'
        )
      })
    })

    describe('When user is logging out', () => {
      beforeEach(() => {
        cy.intercept('GET', '/logout', {
          statusCode: 200,
          body: {},
        })
        cy.login()
      })

      it('logs out the user and display back the login form', () => {
        cy.get('[data-cy="authFormIcon"]').click()
        cy.get('[data-cy="authForm"] button').click()
        cy.get('[data-cy="authForm"]').should('be.visible')
        cy.get('[data-cy="authForm"] input[name="userName"]').should(
          'be.visible'
        )
        cy.get('[data-cy="authForm"] input[name="userPassword"]').should(
          'be.visible'
        )
      })
    })

    describe('When user tries to authenticate with failure', () => {
      beforeEach(() => {
        cy.intercept('POST', '/login', {
          statusCode: 401,
          body: {},
        })
        cy.get('header [data-cy="authFormIcon"]').click()
        cy.get('[data-cy="authForm"] input[name="userName"]').type(
          'incorrectLogin'
        )
        cy.get('[data-cy="authForm"] input[name="userPassword"]').type(
          'Rand87321mdp'
        )
        cy.get('[data-cy="authForm"] input[type="submit"]').click()
      })

      it('does not close the form and displays a warning msg', () => {
        cy.get('[data-cy="notification"]').should('be.visible')
        cy.get('[data-cy="notification"]').should(
          'contain.text',
          'utilisateur ou mot de passe non valides'
        )
        cy.get('[data-cy="authForm"]').should('be.visible')
      })
    })
  })
})
