describe('Permalink/State persistor - layersOpen', () => {
  describe('initial state', () => {
    describe('when no layersOpen value is set in localStorage', () => {
      it('opens app with side panel open', () => {
        cy.visit('/')
        cy.get('[data-cy="layerPanel"]').should('exist')
      })
    })
    describe('when layersOpen value is set to true in localStorage', () => {
      it('opens app with side panel open', () => {
        window.localStorage.setItem('layersOpen', 'true')
        cy.visit('/')
        cy.get('[data-cy="layerPanel"]').should('exist')
      })
    })
    describe('when layersOpen value is set to false in localStorage', () => {
      it('opens app with side panel closed', () => {
        window.localStorage.setItem('layersOpen', 'false')
        cy.visit('/')
        cy.get('[data-cy="layerPanel"]').should('not.exist')
      })
    })
    describe('when layersOpen value is set to false in URL', () => {
      it('has no effect and opens app with side panel open', () => {
        cy.visit('/?layersOpen=false')
        cy.get('[data-cy="layerPanel"]').should('exist')
      })
    })
  })
  describe('opening / closing panel', () => {
    describe('when clicking cross', () => {
      it('closes layerPanel', () => {
        cy.visit('/')
        cy.get('[data-cy="layerPanel"]').should('exist')
        cy.get('[data-cy="layerPanel"]').find('button').first().click()
        cy.get('[data-cy="layerPanel"]').should('not.exist')
      })
    })
    describe('clicking theme icon in header bar', () => {
      it('toggles layerPanel', () => {
        cy.visit('/')
        cy.get('[data-cy="layerPanel"]').should('exist')
        cy.get('[data-cy="selectedThemeIcon"]').click()
        cy.get('[data-cy="layerPanel"]').should('not.exist')
        cy.get('[data-cy="selectedThemeIcon"]').click()
        cy.get('[data-cy="layerPanel"]').should('exist')
      })
    })
  })
})
