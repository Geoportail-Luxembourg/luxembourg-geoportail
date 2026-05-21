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
        expect(layers.length).to.be.greaterThan(0)
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
        expect(layers.length).to.be.at.least(2)
      })

      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('[data-cy="myLayers"] > ul > li').should('have.length', 2)
    })
  })

  describe('When user localises a layer in the catalog', () => {
    beforeEach(() => {
      // Add layer 269 from the catalog
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="parentLayerLabel-242"]').find('button').first().click()
      cy.get('[data-cy="parentLayerLabel-309"]').click()
      cy.get('[data-cy="layerLabel-269"]').click()
      // Switch to My Layers
      cy.get('[data-cy="myLayersButton"]').click()
    })

    it('opens the catalog tab and expands to the layer', () => {
      // Expand the layer sub-panel
      cy.get('[data-cy="myLayerItemLabel-269"]').click()
      cy.get('#layer-manager-item-content-269')
        .find('[data-cy="myLayerLocaliseInCatalog"]')
        .click()

      // Catalog panel should now be visible
      cy.get('[data-cy="catalog"]').should('be.visible')

      // The layer row should be visible (tree expanded to it)
      cy.get('[data-cy="layerLabel-269"]').should('be.visible')
    })

    it('closes my layers and scrolls the catalog to the layer row', () => {
      cy.get('[data-cy="myLayerItemLabel-269"]').click()
      cy.get('#layer-manager-item-content-269')
        .find('[data-cy="myLayerLocaliseInCatalog"]')
        .click()

      // My layers tab should be closed, catalog visible
      cy.get('[data-cy="myLayers"]').should('not.be.visible')
      cy.get('[data-cy="catalog"]').should('be.visible')

      // The layer row element should exist in the DOM and be visible
      cy.get('[data-info="layerRow-269"]').should('be.visible')
    })

    it('applies the highlight class on the located layer row', () => {
      cy.get('[data-cy="myLayerItemLabel-269"]').click()
      cy.get('#layer-manager-item-content-269')
        .find('[data-cy="myLayerLocaliseInCatalog"]')
        .click()

      // Immediately after click the highlight class should be present
      cy.get('[data-info="layerRow-269"]').should(
        'have.class',
        'lux-layer-highlight'
      )
      // After 1s the class should be removed
      cy.get('[data-info="layerRow-269"]', { timeout: 3000 }).should(
        'not.have.class',
        'lux-layer-highlight'
      )
    })
  })

  describe('When user localises a layer that belongs to a different theme', () => {
    beforeEach(() => {
      // Add layer 189 (tour_mullerthal_trail) from the tourisme theme via the catalog
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="themeSelectorButton"]').click()
      cy.get('[data-cy="themeSelectorButton"]')
        .parent()
        .find('Button')
        .contains('Tourisme')
        .click()
      // Expand to layer 189 and add it
      cy.get('[data-cy="parentLayerLabel-2005"]').find('button').first().click()
      cy.get('[data-cy="parentLayerLabel-2006"]').click()
      cy.get('[data-cy="layerLabel-189"]').click()
      // Switch back to main theme
      cy.get('[data-cy="themeSelectorButton"]').click()
      cy.get('[data-cy="themeGrid"]').find('button').first().click()
      // Go to My Layers
      cy.get('[data-cy="myLayersButton"]').click()
    })

    it('switches to the theme containing the layer and expands to it', () => {
      cy.get('[data-cy="myLayerItemLabel-189"]').click()
      cy.get('#layer-manager-item-content-189')
        .find('[data-cy="myLayerLocaliseInCatalog"]')
        .click()

      // Catalog panel should be visible
      cy.get('[data-cy="catalog"]').should('be.visible')

      // The layer row should be visible — meaning the tourisme theme was opened
      cy.get('[data-info="layerRow-189"]').should('be.visible')
    })

    it('highlights the located layer row in the new theme', () => {
      cy.get('[data-cy="myLayerItemLabel-189"]').click()
      cy.get('#layer-manager-item-content-189')
        .find('[data-cy="myLayerLocaliseInCatalog"]')
        .click()

      cy.get('[data-info="layerRow-189"]').should(
        'have.class',
        'lux-layer-highlight'
      )
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
