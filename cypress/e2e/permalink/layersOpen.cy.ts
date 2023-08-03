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
})
