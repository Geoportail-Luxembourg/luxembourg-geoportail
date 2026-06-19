describe('Export Panel', () => {
  type ConfigLink = {
    labelKey?: string
    useLocationInfoCoords?: boolean
    userType?: string[]
    userRoles?: string[]
  }

  const isPublicLink = (link: ConfigLink) =>
    !(link.userType?.length || link.userRoles?.length)

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
      cy.request('/config-export-url.json').then(response => {
        const expectedCount = (response.body.exportLinks ?? []).filter(
          (link: ConfigLink) => isPublicLink(link)
        ).length
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
          (l: ConfigLink) => l.useLocationInfoCoords && isPublicLink(l)
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
        .find('i.fa-mountain')
        .closest('a')
        .should($a => {
          const href = $a.attr('href') ?? ''
          expect(href).to.contain('lidar.geoportail.lu')
          expect(href).to.not.contain('{')
        })
        .invoke('attr', 'href')
        .then(href => {
          expect(href).to.not.equal(undefined)
          const lidarUrl = new URL(href ?? '')
          const x = Number(lidarUrl.searchParams.get('COORD_X'))
          const y = Number(lidarUrl.searchParams.get('COORD_Y'))
          const z = Number(lidarUrl.searchParams.get('COORD_Z'))

          expect(!isNaN(x)).to.equal(true)
          expect(!isNaN(y)).to.equal(true)
          expect(!isNaN(z)).to.equal(true)
        })
    })

    it('3D Print link has a valid URL with a URL-encoded BBOX', () => {
      cy.get('[data-cy="exportPanel"]')
        .find('i.fa-cube')
        .closest('a')
        .should($a => {
          const href = $a.attr('href') ?? ''
          expect(href).to.contain('3dprint.geoportail.lu')
          expect(href).to.not.contain('{')
        })
        .invoke('attr', 'href')
        .then(href => {
          expect(href).to.not.equal(undefined)
          const print3dUrl = new URL(href ?? '')
          expect(print3dUrl.pathname).to.equal('/commande')

          const easting = Number(print3dUrl.searchParams.get('easting'))
          const northing = Number(print3dUrl.searchParams.get('northing'))
          const scale = Number(print3dUrl.searchParams.get('scale'))

          expect(!isNaN(easting)).to.equal(true)
          expect(!isNaN(northing)).to.equal(true)
          expect(!isNaN(scale)).to.equal(true)
        })
    })

    it('Vue Oblique link has a valid URL with a non-empty state param', () => {
      cy.get('[data-cy="exportPanel"]')
        .find('a[target="_geoportal_ext_obliques"]')
        .should($a => {
          const href = $a.attr('href') ?? ''
          expect(href).to.contain('3d.geoportail.lu')
          expect(href).to.not.contain('{')
        })
        .invoke('attr', 'href')
        .then(href => {
          expect(href).to.not.equal(undefined)
          expect(
            /^https:\/\/3d\.geoportail\.lu\?state=.+$/.test(href ?? '')
          ).to.equal(true)
        })
    })

    it('ACT2BIM link has dynamic easting and northing parameters', () => {
      cy.get('[data-cy="exportPanel"]')
        .find('i.fa-building')
        .closest('a')
        .should($a => {
          const href = $a.attr('href') ?? ''
          expect(href).to.contain('act2bim.geoportail.lu')
          expect(href).to.not.contain('{')
        })
        .invoke('attr', 'href')
        .then(href => {
          expect(href).to.not.equal(undefined)
          const act2bimUrl = new URL(href ?? '')
          expect(act2bimUrl.pathname).to.equal('/commande')
          expect(
            !isNaN(Number(act2bimUrl.searchParams.get('easting')))
          ).to.equal(true)
          expect(
            !isNaN(Number(act2bimUrl.searchParams.get('northing')))
          ).to.equal(true)
        })
    })

    it('Minecraft link has dynamic easting and northing parameters', () => {
      cy.get('[data-cy="exportPanel"]')
        .find('i.fa-gamepad')
        .closest('a')
        .should($a => {
          const href = $a.attr('href') ?? ''
          expect(href).to.contain('minecraft.geoportail.lu')
          expect(href).to.not.contain('{')
        })
        .invoke('attr', 'href')
        .then(href => {
          expect(href).to.not.equal(undefined)
          const minecraftUrl = new URL(href ?? '')
          expect(
            !isNaN(Number(minecraftUrl.searchParams.get('easting')))
          ).to.equal(true)
          expect(
            !isNaN(Number(minecraftUrl.searchParams.get('northing')))
          ).to.equal(true)
        })
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
