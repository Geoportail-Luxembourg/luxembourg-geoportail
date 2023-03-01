describe('Permalink/State persistor - Theme', () => {
  describe('Restore theme from url', () => {
    describe('When there is no theme in the url', () => {
      it('sets the default main theme', () => {
        cy.visit('/')
        cy.url().should('contains', '/theme/main')
      })
    })

    describe('When there is a theme in the url', () => {
      it('sets the given "eau" theme', () => {
        cy.visit('/theme/eau')
        cy.url().should('contains', '/theme/eau')
        cy.get('html')
          .should('have.attr', 'style')
          .then(style => {
            expect(style).to.contains('--color-primary: #03a2ac')
          })
      })

      it('sets the given "emwelt" theme', () => {
        cy.visit('/theme/emwelt')
        cy.url().should('contains', '/theme/emwelt')
        cy.get('html')
          .should('have.attr', 'style')
          .then(style => {
            expect(style).to.contains('--color-primary: #558b2f')
          })
      })

      it('updates the theme icon in the navbar header', () => {
        cy.visit('/theme/eau')
        cy.get('[data-cy="selectedThemeIcon"]')
          .should('have.class', 'before:content-eau')
          .find('span')
          .should('have.html', 'Eau')
        cy.visit('/theme/tourisme')
        cy.get('[data-cy="selectedThemeIcon"]')
          .should('have.class', 'before:content-tourisme')
          .find('span')
          .should('have.html', 'Tourisme')
      })
    })

    describe('When switching theme and then switching lang', () => {
      it('translations still load correctly', () => {
        cy.visit('/theme/at?lang=en')
        cy.get('[data-cy="selectedThemeIcon"]')
          .find('span')
          .should('have.html', 'Urban planning')
        cy.get('[data-cy="catalogButton"]').click()
        cy.get('[data-cy="themeSelectorButton"]').click()
        cy.get('[data-cy="themeSelectorButton"]')
          .parent()
          .find('Button')
          .contains('Tourism')
          .click()
        cy.get('[data-cy="selectedThemeIcon"]')
          .find('span')
          .should('have.html', 'Tourism')
        cy.get('[data-cy="langSelect"] .lux-dropdown-btn').click()
        cy.get('[data-cy="langSelect"] [data-value="de"]').click()
        cy.get('[data-cy="selectedThemeIcon"]')
          .find('span')
          .should('have.html', 'Tourismus')
      })
    })
  })
})
