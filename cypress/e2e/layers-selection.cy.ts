import type { AUTWindowOlMap } from '../types'

describe('Catalogue', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('When user adds layers from the catalog', () => {
    beforeEach(() => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="catalog"]').find('button').first().click()
      cy.get('[data-cy="catalog"]').find('button').eq(1).click()
      cy.get('[data-cy="catalog"]').find('button').eq(3).click()
      cy.get('[data-cy="catalog"]').find('button').eq(5).click()
    })

    it('adds selected layers to the map and to the layer manager', () => {
      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('[data-cy="myLayers"] > li').should('have.length', 3)
    })

    it('displays title with updated number of layers', () => {
      cy.get('[data-cy="myLayersButton"]').should(
        'have.text',
        'Mes couches (2) '
      )
    })

    it('toggles the layer visibility', () => {
      cy.url().should('contains', 'opacities=1-1')
      expect(localStorage.getItem('opacities')).to.eq('1-1')

      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('[data-cy="myLayers"]').find('button').eq(2).click()
      cy.get('[data-cy="myLayers"]')
        .find('button')
        .eq(5)
        .click()
        .should(() => {
          expect(localStorage.getItem('opacities')).to.eq('1-0')
        }) // toggle button visible

      cy.url().should('contains', 'opacities=1-0')
      cy.get('[data-cy="myLayers"]')
        .find('button')
        .eq(5)
        .should('have.class', 'fa-eye-slash')
    })
  })

  describe('When user adds a WMTS layer from the catalog', () => {
    it('adds the WMTS layer to the map without error', () => {
      cy.get('[data-cy="catalogButton"]').click()
      cy.get('[data-cy="catalog"]').find('button').first().click()
      cy.get('[data-cy="catalog"]')
        .find('[data-cy="parentLayerLabel-248"]')
        .click()
      cy.get('[data-cy="catalog"]').find('[data-cy="layerLabel-359"]').click()
      cy.get('[data-cy="catalog"]').find('[data-cy="layerLabel-353"]').click()

      cy.window().then(window => {
        const layers = (<AUTWindowOlMap>window).olMap.getLayers().getArray()
        expect(layers[0].get('id')).to.eq(556)
        expect(layers[1].get('id')).to.eq(359)
        expect(layers[2].get('id')).to.eq(353)
      })

      cy.get('[data-cy="myLayersButton"]').click()
      cy.get('[data-cy="myLayers"] > li').should('have.length', 3)
    })
  })
})

describe('LayerManager', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('opens catalog when clicking button "+ Add layer"', () => {
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="addLayer"]').click()
    cy.get('[data-cy="catalog"]').should('be.visible')
  })
})

describe('Remote layers', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('adds layers from the remote layers modale', () => {
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('[data-cy="addRemoteLayer"]').click()
    cy.get('[data-cy="remoteLayerBox"]').find('button').eq(1).click()
    cy.get('[data-cy="remoteLayerBox"]').find('button').eq(2).click()
    cy.get(
      '[data-cy="parentLayerLabel-WMS||http://wmts1.geoportail.lu/opendata/service||Ortho"]'
    ).click()
    cy.get(
      '[data-cy="layerLabel-WMS||http://wmts1.geoportail.lu/opendata/service||ortho_2001"]'
    ).click()
    cy.get('[data-cy="myLayers"] > li').should('have.length', 2)
  })
})
