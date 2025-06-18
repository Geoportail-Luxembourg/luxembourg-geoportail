describe('Location Info', () => {
  beforeEach(() => {
    cy.intercept('POST', 'short/create', {
      statusCode: 200,
      body: { short_url: 'http://localhost:8080/s/uSxF' },
    }).as('shortUrl')

    cy.intercept(
      {
        method: 'GET',
        pathname: '/geocode/reverse',
      },
      req => {
        const dist = Math.sqrt(
          (parseFloat(req.query.easting.toString()) - 67887) ** 2 +
            (parseFloat(req.query.northing.toString()) - 85410) ** 2
        )
        const categorizedDist =
          dist > 5 ? (dist > 100 ? 1972.1284 : 394.2305) : 20.98493
        req.reply({
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
                distance: categorizedDist,
                contributor: 'ACT',
                geom: {
                  type: 'Point',
                  coordinates: [req.query.easting, req.query.northing],
                },
                geomlonlat: {
                  type: 'Point',
                  coordinates: [6.00041535, 49.697110053],
                },
              },
            ],
          },
        })
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
        cy.url().should('not.contain', 'crosshair=')
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
        cy.get('[data-cy="locationInfo"] table > tbody > tr').should(
          'have.length',
          8
        )
        cy.get('[data-cy="locationInfo"] table > tbody > tr')
          .eq(6)
          .find('td')
          .should('contain.text', 'Roodt/Eisch/Test')
        cy.get('[data-cy="locationInfo"] table > tbody > tr')
          .eq(7)
          .find('td')
          .should('contain.text', '2 km')
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

      /*it('streetview should integrate smoothly in the panel', () => {
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
        cy.get('[data-cy="streetviewLoading"]').should('not.be.visible')
        cy.window()
          .its('olMap')
          .should(function (olMap) {
            const featureLayers = olMap
              .getLayers()
              .getArray()
              .filter((l: any) => l.get('cyLayerType') === 'svFeatureLayer')
            const features = featureLayers
              .map((l: any) => l.getSource().getFeatures())
              .flat()
            expect(features.length).to.equal(3)
          })
        cy.get('[data-cy="locationInfo"] table > tbody > tr')
          .eq(7)
          .find('td')
          .should('contain.text', '21 m')
        cy.get('div.ol-viewport').rightclick(560, 350, { force: true })
        cy.get('[data-cy="locationInfo"] table > tbody > tr')
          .eq(7)
          .find('td')
          .should(el => expect(el).to.contain.text('2 km'))
      })*/
    })
  })
})
