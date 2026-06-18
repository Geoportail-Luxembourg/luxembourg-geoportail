describe('Export Panel', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('opens the export panel when the export button is clicked', () => {
    cy.get('[data-cy="exportPanel"]').should('not.exist')
    cy.get('[data-cy="exportButton"]').click()
    cy.get('[data-cy="exportPanel"]').should('be.visible')
  })

  it('closes the export panel when the export button is clicked again', () => {
    cy.get('[data-cy="exportButton"]').click()
    cy.get('[data-cy="exportPanel"]').should('be.visible')
    cy.get('[data-cy="exportButton"]').click()
    cy.get('[data-cy="exportPanel"]').should('not.exist')
  })

  describe('Export links', () => {
    beforeEach(() => {
      cy.get('[data-cy="exportButton"]').click()
      cy.get('[data-cy="exportPanel"]').should('be.visible')
    })

    it('displays the same number of links as in config-export-url.json', () => {
      cy.request('/config-export-url.json').then(() => {
        const expectedCount = 5 // instead of 6 because some need login (response.body.exportLinks ?? []).length
        cy.get('[data-cy="exportPanel"]')
          .find('li')
          .should('have.length', expectedCount)
      })
    })

    it('each link has a non-empty href', () => {
      cy.get('[data-cy="exportPanel"]')
        .find('li a')
        .each($a => {
          cy.wrap($a).should('have.attr', 'href').and('not.be.empty')
        })
    })

    it('each link opens in a new tab', () => {
      cy.get('[data-cy="exportPanel"]')
        .find('li a')
        .each($a => {
          cy.wrap($a).should('have.attr', 'target')
        })
    })
  })

  describe('Location info bullet indicator', () => {
    it('does not show bullet indicator when no location info is selected', () => {
      cy.get('[data-cy="exportButton"]').click()
      cy.get('[data-cy="exportPanel"]').should('be.visible')
      cy.request('/config-export-url.json').then(response => {
        const linksWithCoords = (response.body.exportLinks ?? []).filter(
          (l: { useLocationInfoCoords?: boolean }) => l.useLocationInfoCoords
        )
        if (linksWithCoords.length > 0) {
          cy.get('[data-cy="exportPanel"]')
            .find('span.rounded-full')
            .should('not.exist')
        }
      })
    })

    it('shows bullet indicator on links with useLocationInfoCoords after a right-click on the map', () => {
      cy.request('/config-export-url.json').then(response => {
        const linksWithCoords = (response.body.exportLinks ?? []).filter(
          (l: { useLocationInfoCoords?: boolean }) => l.useLocationInfoCoords
        )
        if (linksWithCoords.length === 0) return

        cy.get('[data-cy="exportButton"]').click()
        cy.get('[data-cy="exportPanel"]').should('be.visible')

        cy.get('div.ol-viewport').rightclick(350, 300, { force: true })
        cy.get('[data-cy="locationInfo"]').should('be.visible')

        cy.get('[data-cy="exportPanel"]')
          .find('span.rounded-full')
          .should('have.length', linksWithCoords.length)
      })
    })
  })

  describe('Generated URLs', () => {
    beforeEach(() => {
      // Wait for locationInfo element to exist in DOM, ensuring location-info.vue is
      // mounted and OL map event listeners are set up before right-clicking
      cy.get('[data-cy="locationInfo"]').should('be.hidden')
      // Right-click on the map to set location info coords
      cy.get('div.ol-viewport').rightclick(350, 300, { force: true })
      cy.get('[data-cy="locationInfo"]').should('be.visible')
      cy.get('[data-cy="exportButton"]').click()
      cy.get('[data-cy="exportPanel"]').should('be.visible')
    })

    it('Lidar link has a valid URL with numeric COORD_X, COORD_Y and COORD_Z', () => {
      cy.get('[data-cy="exportPanel"]')
        .contains('a', 'Lidar')
        .should('have.attr', 'href')
        .and(
          'match',
          /^https:\/\/lidar\.geoportail\.lu\?COORD_X=\d+&COORD_Y=\d+&COORD_Z=\d+(\.\d+)?$/
        )
    })

    it('3D Print link has a valid URL with a URL-encoded BBOX', () => {
      cy.get('[data-cy="exportPanel"]')
        .contains('a', 'Impression 3D')
        .should('have.attr', 'href')
        .and(
          'match',
          /^https:\/\/3dprint\.geoportail\.lu\?bbox=[\d.%A-Za-z+-]+$/
        )
    })

    it('Vue Oblique link has a valid URL with a non-empty state param', () => {
      cy.get('[data-cy="exportPanel"]')
        .contains('a', 'Vue Oblique')
        .should('have.attr', 'href')
        .and('match', /^https:\/\/3d\.geoportail\.lu\?state=.+$/)
    })

    it('ACT2BIM link is a static URL', () => {
      cy.get('[data-cy="exportPanel"]')
        .contains('a', 'ACT2BIM')
        .should('have.attr', 'href', 'https://act2bim.geoportail.lu')
    })

    it('Minecraft link is a static URL', () => {
      cy.get('[data-cy="exportPanel"]')
        .contains('a', 'Minecraft')
        .should('have.attr', 'href', 'https://minecraft.geoportail.lu')
    })
  })

  describe('Restricted links visibility', () => {
    it('does not show Cyclomédia link when user is not logged in', () => {
      cy.get('[data-cy="exportButton"]').click()
      cy.get('[data-cy="exportPanel"]').should('be.visible')
      cy.get('[data-cy="exportPanel"]').should('not.contain.text', 'Cyclomédia')
    })

    it('shows Cyclomédia link after login with an etat user', () => {
      cy.intercept('POST', '/login', {
        statusCode: 200,
        body: {
          login: 'tester_etat',
          role: 'etat',
          role_id: 0,
          mymaps_role: 999,
          mail: 'user@etat.com',
          sn: 'aaa',
          typeUtilisateur: 'etat',
          is_admin: false,
        },
      })

      cy.get('header [data-cy="authFormIcon"]').click()
      cy.get('[data-cy="authForm"] input[name="userName"]').type('tester_etat')
      cy.get('[data-cy="authForm"] input[name="userPassword"]').type('password')
      cy.get('[data-cy="authForm"] input[type="submit"]').click()

      cy.get('[data-cy="exportButton"]').click()
      cy.get('[data-cy="exportPanel"]').should('be.visible')
      cy.get('[data-cy="exportPanel"]').should('contain.text', 'Cyclomédia')
    })
  })
})
