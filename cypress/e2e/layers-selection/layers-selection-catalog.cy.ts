import { noMapLayerRegex } from '../layers.utils'
import type { AUTWindowOlMap } from '../../types'

describe('Catalogue', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When selected layers list is empty', () => {
    it('displays title without the counter', () => {
      cy.get('[data-cy="myLayersButton"]').should('have.text', 'Mes couches ')
    })
  })

  describe('When user adds layers from the catalog', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="parentLayerLabel-242"]').find('button').first().click()
      cy.get('[data-cy="parentLayerLabel-309"]').click()
      cy.get('[data-cy="layerLabel-269"]').click()
      cy.get('[data-cy="layerLabel-349"]').click()
      cy.get('[data-cy="layerLabel-329"]').click()
    })

    it('adds selected layers to the map and to the layer manager', () => {
      cy.get('[data-cy="myLayersButton"]').click({ force: true })
      cy.get('[data-cy="myLayers"] > ul > li').should('have.length', 3)
    })

    it('displays title with updated number of layers', () => {
      cy.get('[data-cy="myLayersButton"]').should(
        'have.text',
        'Mes couches (3)'
      )
    })

    it('toggles the layer visibility', () => {
      cy.url().should('contains', 'opacities=1-1')
      expect(localStorage.getItem('opacities')).to.eq('1-1-1')

      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('[data-cy="myLayers"]').find('button').eq(2).click()

      const myLayersBtn = () =>
        cy.get('[data-cy="myLayers"]').find('button').eq(4)
      myLayersBtn().click()
      myLayersBtn().should(() => {
        expect(localStorage.getItem('opacities')).to.eq('0-1-1')
      }) // toggle button visible

      cy.url().should('contains', 'opacities=0-1-1')
      cy.get('[data-cy="myLayers"]')
        .find('button')
        .eq(4)
        .should('have.class', 'fa-eye-slash')
    })
  })

  describe('When user adds a WMTS layer from the catalog', () => {
    it('adds the WMTS layer to the map without error', () => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="catalog"]').find('button').first().click()
      cy.get('[data-cy="catalog"]')
        .find('[data-cy="parentLayerLabel-248"]')
        .click({ force: true })
      // get layer stack and filter featureLayer
      cy.window().then(window => {
        const layers = (<AUTWindowOlMap>window).olMap
          .getLayers()
          .getArray()
          .filter((l: any) => !noMapLayerRegex.exec(l.get('cyLayerType')))
        expect(layers[0].get('id')).to.eq(556)
      })
      cy.get('[data-cy="catalog"]')
        .find('[data-cy="layerLabel-359"]')
        .click({ force: true })
      cy.get('[data-cy="catalog"]')
        .find('[data-cy="layerLabel-353"]')
        .click({ force: true })
      // BG deactivated due to layer exclusion
      cy.window().then(window => {
        const layers = (<AUTWindowOlMap>window).olMap
          .getLayers()
          .getArray()
          .filter((l: any) => !noMapLayerRegex.exec(l.get('cyLayerType')))
        expect(layers[0].get('id')).to.eq(359)
        expect(layers[1].get('id')).to.eq(353)
      })

      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('[data-cy="myLayers"] > ul > li').should('have.length', 2)
    })
  })

  describe('When user navigates in the catalog, switch to the layer manager and go back to the catalog', () => {
    it('keeps the catalog accordions previously opened, opened', () => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="myLayers"]').should('not.be.visible')
      cy.get('[data-cy="catalog"]').find('button').first().click() // Close the first default opened accordion
      cy.get('[data-cy^="parentLayerLabel-"]').eq(6).as('parentAccordion')
      cy.get('@parentAccordion').find('button').first().as('btnAccordion')
      cy.get('@parentAccordion')
        .next('[data-cy^="subLayerLabel-"]')
        .should('have.class', 'lux-collapse')
      cy.get('@btnAccordion').should('have.attr', 'aria-expanded', 'false')
      cy.get('@btnAccordion').click()
      cy.get('@btnAccordion').should('have.attr', 'aria-expanded', 'true')
      cy.get('@parentAccordion')
        .next('[data-cy^="subLayerLabel-"]')
        .should('have.class', 'expanded')
      // Open My Layers panel
      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('[data-cy="myLayers"]').should('be.visible')
      // Back to Catalog
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="myLayers"]').should('not.be.visible')
      // Check if accordion is still opened
      cy.get('@btnAccordion').should('have.attr', 'aria-expanded', 'true')
      cy.get('@parentAccordion')
        .next('[data-cy^="subLayerLabel-"]')
        .should('have.class', 'expanded')
    })
  })
})
