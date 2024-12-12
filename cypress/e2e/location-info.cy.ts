describe('Location Info', () => {
  beforeEach(() => {
    cy.intercept('POST', 'short/create', {
      statusCode: 200,
      body: { short_url: 'http://localhost:8080/s/uSxF' },
    }).as('shortUrl')

    cy.intercept(
      'GET',
      'https://migration.geoportail.lu/geocode/reverse?easting=67886.66280635976&northing=85024.54757489248',
      {
        statusCode: 200,
        body: {
          count: 1,
          results: [
            {
              id_caclr_locality: '37',
              id_caclr_street: '1147',
              id_caclr_bat: '213956',
              street: 'Bergstr',
              number: '18',
              locality: 'Roodt/Eisch/Test',
              commune: 'Habscht',
              postal_code: '8398',
              country: 'Luxembourg',
              country_code: 'lu',
              distance: 1967.871691858786,
              contributor: 'ACT',
              geom: {
                type: 'Point',
                coordinates: [67900.5221, 84743.219699999],
              },
              geomlonlat: {
                type: 'Point',
                coordinates: [6.00041535, 49.697110053],
              },
            },
          ],
        },
      }
    )
  })

  describe('Open location info on position', () => {
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
        //cy.log(JSON.stringify(cy.get('[data-cy="locationInfo"]')
        //  .find('input').invoke('val')))
        cy.get('[data-cy="locationInfo"]')
          .find('input')
          .invoke('val')
          .should('contain', 'localhost:8080/s')
        // 8 location infos (5 projections, elevation, address, distance)
        cy.get('[data-cy="locationInfo"] > div > table > tbody > tr').should(
          'have.length',
          8
        )
        cy.get('[data-cy="locationInfo"] > div > table > tbody > tr')
          .eq(6)
          .find('td')
          .should('contain.text', 'Roodt/Eisch/Test')
        cy.get('[data-cy="locationInfo"] > div > table > tbody > tr')
          .eq(7)
          .find('td')
          .should('contain.text', '1.97 km')
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
        // The waiting animation has been added to allow synchronisation
        // in the test once the streetview is fully loaded.
        cy.get('[data-cy="streetviewLoading"]').should('not.be.visible')
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
