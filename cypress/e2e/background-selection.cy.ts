import type { AUTWindowOlMap } from '../types'

describe('Background selector', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="myLayersButton"]').click()
  })

  it('renders the background selector properly', () => {
    cy.get('[data-cy="selectedBg"]').find('button').should('not.be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('be.hidden')
  })

  it('opens the selector and shows all available backgrounds', () => {
    cy.get('[data-cy="selectedBg"]').find('button').click()
    cy.get('[data-cy="selectedBg"]').find('button').should('be.hidden')
    cy.get('[data-cy="available-bgs"]').find('button').should('not.be.hidden')
  })

  it('updates the layer manager and the map when selecting a background layer', () => {
    cy.window().then(window => {
      const layers = (<AUTWindowOlMap>window).olMap.getLayers().getArray()
      expect(layers[0].get('id')).to.eq(556)
    })

    cy.get('[data-cy="selectedBg"]').find('button').click()
    cy.get('[data-cy="available-bgs"]')
      .find('button')
      .filter('[title*="topo_bw"]')
      .click()
    cy.get('.lux-layer-manager-item')
      .last()
      .contains('Carte topographique N/B')
      .should('be.visible')

    cy.window().then(window => {
      const layers = (<AUTWindowOlMap>window).olMap.getLayers().getArray()
      expect(layers[0].get('id')).to.eq(502)
    })
  })

  describe('When background is blank in permalink', () => {
    describe('When there is no layer in permalink', () => {
      beforeEach(() => {
        cy.visit(
          '/theme/main?version=3&lang=fr&layers=&opacities=&bgLayer=blank'
        )
      })

      it('shows a notification message when in permalink there is no layer', () => {
        cy.visit(
          '/theme/main?version=3&lang=fr&layers=&opacities=&bgLayer=blank'
        )
        cy.get('[data-cy="alertNotifications"]')
          .find('.lux-alert')
          .should('have.class', 'lux-alert-info')
          .contains(
            "Aucune couche n'étant définie pour cette carte, une couche de fond a automatiquement été ajoutée."
          )
      })

      it('replaces the bg in permalink by the default bg', () => {
        cy.visit(
          '/theme/main?version=3&lang=fr&layers=&opacities=&bgLayer=blank'
        )
        cy.url().should('contain', 'bgLayer=basemap_2015_global')
      })
    })

    describe('When there is a layer in permalink', () => {
      beforeEach(() => {
        cy.visit(
          '/theme/main?version=3&lang=fr&layers=269&opacities=1&bgLayer=blank'
        )
      })

      it('does NOT show a notification message', () => {
        cy.get('[data-cy="alertNotifications"]').should('not.exist')
      })

      it('keeps the bg blank', () => {
        cy.url().should('contain', 'bgLayer=blank')
      })
    })
  })
})
