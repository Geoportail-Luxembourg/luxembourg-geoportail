describe('Permalink/State persistor - embedded mode', () => {
  describe('Initial state, embedded is disabled', () => {
    describe('when no embedded param in permalink', () => {
      it('opens full app with all components', () => {
        cy.visit('/')
        cy.get('header').should('exist')
        cy.get('[data-cy="layerPanel"]').should('exist')
        cy.get('[data-cy="selectedBg"]').should('exist')
        cy.get('div.ol-full-screen').should('exist')
        cy.get('div.map-3d-button').should('exist')
        cy.get('div.location-button').should('exist')
        cy.get('[data-cy="attributionControl"]').should('exist')
        cy.get('footer').should('exist')
      })
    })

    describe('when embedded param in permalink is false', () => {
      it('opens full app with all components', () => {
        cy.visit('/?embedded=false')
        cy.get('header').should('exist')
        cy.get('[data-cy="layerPanel"]').should('exist')
        cy.get('[data-cy="selectedBg"]').should('exist')
        cy.get('div.ol-full-screen').should('exist')
        cy.get('div.map-3d-button').should('exist')
        cy.get('div.location-button').should('exist')
        cy.get('[data-cy="attributionControl"]').should('exist')
        cy.get('footer').should('exist')
      })
    })
  })

  describe('Embedded mode is enabled', () => {
    describe('when embedded is true in permalink', () => {
      it('opens full app with all components', () => {
        cy.visit('/?embedded=true')
        cy.get('header').should('not.exist')
        cy.get('[data-cy="layerPanel"]').should('not.exist')
        cy.get('[data-cy="selectedBg"]').should('not.exist')
        cy.get('div.ol-full-screen').should('not.exist')
        cy.get('div.map-3d-button').should('not.exist')
        cy.get('div.location-button').should('not.exist')
        cy.get('[data-cy="attributionControl"]').should('not.exist')
        cy.get('footer').should('not.exist')
      })
    })
  })
})
