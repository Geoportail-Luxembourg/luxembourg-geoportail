describe('Map controls', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When Open Layers map displays', () => {
    it('adds the zoom in/out control', () => {
      cy.get('[data-cy="mapContainer"] .ol-zoom-in')
      cy.get('[data-cy="mapContainer"] .ol-zoom-out')
    })

    it('adds the zoom to extent control', () => {
      cy.get('[data-cy="mapContainer"] .ol-zoom-extent')
    })

    it('adds the toggle fullscreen control', () => {
      cy.get('[data-cy="mapContainer"] .ol-full-screen')
    })

    // TODO: test attribution control
    // TODO: test Location control
    // TODO: test 3D control
    // TODO: test info bar control
    // TODO: test download control
  })
})
