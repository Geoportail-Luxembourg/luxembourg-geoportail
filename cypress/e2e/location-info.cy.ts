describe('Feature Info', () => {
  beforeEach(() => {
    cy.intercept('GET', 'getfeatureinfo*').as('getFeatureInfo')
  })

  describe('Default template', () => {
    describe('Display basic feature info for multiple layers', () => {
      beforeEach(() => {
        cy.visit('/?zoom=8')
      })
      it('should display coordinate and address information in the panel', () => {
        cy.get('[data-cy="locationInfo"]').should('be.hidden')
        cy.url().should('contain', 'crosshair=false')
        cy.window()
          .its('olMap')
          .then(function (olMap) {
            const featureLayers = olMap
              .getLayers()
              .getArray()
              .filter((l: any) => l.get('cyLayerType') === 'infoFeatureLayer')
            const features = featureLayers
              .map((l: any) => l.getSource().getFeatures())
              .flat()
            cy.wrap(features.length).should('equal', 0)
          })

        cy.get('div.ol-viewport').rightclick(350, 300, { force: true })
        cy.get('[data-cy="locationInfo"]').should('be.visible')
        cy.get('[data-cy="locationInfo"]').find('input').should('exist')
        cy.get('[data-cy="locationInfo"]')
          .find('input')
          .invoke('val')
          .should('contain', 'localhost:8080/s')
        // 8 location infos (5 projections, elevation, address, distance)
        cy.get('[data-cy="locationInfo"] > div > table > tbody > tr').should(
          'have.length',
          8
        )
        // check pointer
        cy.window()
          .its('olMap')
          .then(function (olMap) {
            const featureLayers = olMap
              .getLayers()
              .getArray()
              .filter((l: any) => l.get('cyLayerType') === 'infoFeatureLayer')
            const features = featureLayers
              .map((l: any) => l.getSource().getFeatures())
              .flat()
            cy.wrap(features.length).should('equal', 1)
          })

        cy.url().should('contain', 'crosshair=true')
      })

      it('streetview should integrate smoothly in the panel', () => {
        cy.get('div.ol-viewport').rightclick(350, 300, { force: true })
        cy.get('[data-cy="streetviewOff"]').should('not.exist')
        cy.get('[data-cy="streetviewOn"]').click()
        cy.get('[data-cy="streetviewOff"]').should('exist')
        cy.get('[data-cy="streetviewNoData"]').should('be.visible')
        cy.get('[data-cy="streetviewNoData"]')
          .find('span')
          .should(
            'contain.text',
            "Il n'y a pas de panorama Google disponible à cet endroit"
          )
        cy.window()
          .its('olMap')
          .then(function (olMap) {
            const featureLayers = olMap
              .getLayers()
              .getArray()
              .filter((l: any) => l.get('cyLayerType') === 'svFeatureLayer')
            const features = featureLayers
              .map((l: any) => l.getSource().getFeatures())
              .flat()
            cy.wrap(features.length).should('equal', 0)
          })
        cy.get('div.ol-viewport').rightclick(350, 50, { force: true })
        cy.get('[data-cy="streetviewNoData"]').should('not.be.visible')
        // TODO: think about more reliable sync with google loanding times
        // eslint-disable-next-line
        cy.wait(1000)
        cy.window()
          .its('olMap')
          .then(function (olMap) {
            const featureLayers = olMap
              .getLayers()
              .getArray()
              .filter((l: any) => l.get('cyLayerType') === 'svFeatureLayer')
            const features = featureLayers
              .map((l: any) => l.getSource().getFeatures())
              .flat()
            cy.wrap(features.length).should('equal', 3)
          })
        cy.get('[data-cy="locationInfo"] > div > table > tbody > tr')
          .last()
          .find('td')
          .should('contain.text', '669.87 m')
        cy.get('div.ol-viewport').click(382, 82, { force: true })
        cy.get('[data-cy="locationInfo"] > div > table > tbody > tr')
          .last()
          .find('td')
          .should('contain.text', '662.47 m')
      })
    })
  })
})
