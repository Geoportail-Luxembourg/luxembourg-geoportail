describe('Permalink/State persistor - Layer comparator (lc & sliderRatio)', () => {
  beforeEach(() => {
    cy.visit(
      '/?version=3&lang=fr&X=667917&Y=6394482&zoom=8&layers=269-302-346&opacities=1-1-1&bgLayer=basemap_2015_global'
    )
    cy.get('[data-cy="myLayersButton"]').click()
  })

  describe('initial state', () => {
    it('does not display the splitter on the map', () => {
      cy.get('button[data-cy="sliderElement"]').should('not.exist')
    })
  })

  describe('when expanding layer item in layer manager', () => {
    it('displays a button to toggle the comparator for the top layer only', () => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.get('#layer-manager-item-content-346 button:last-child').should(
        'have.class',
        'fa-circle'
      )
      cy.get('button[data-cy="myLayerItemLabel-302"]').click()
      cy.get('#layer-manager-item-content-302 button:last-child').should(
        'not.exist'
      )
      cy.get('button[data-cy="myLayerItemLabel-269"]').click()
      cy.get('#layer-manager-item-content-269 button:last-child').should(
        'not.exist'
      )
    })
  })

  describe('when clicking the toggle layer comparator button', () => {
    it('toggles the button display', () => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.get('#layer-manager-item-content-346 button:last-child').should(
        'have.class',
        'fa-circle'
      )
      const layerItemBtn = () =>
        cy.get('#layer-manager-item-content-346 button:last-child')
      layerItemBtn().click()
      layerItemBtn().should('have.class', 'fa-adjust')
    })

    it('displays the splitter on the map with le layer label', () => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.get('#layer-manager-item-content-346 button:last-child').click()
      cy.get('button[data-cy="sliderElement"]').should('be.visible')
      cy.get('button[data-cy="sliderElement"]')
        .find('.lux-slider-layer-label')
        .contains('Cantons (Noms)')
    })
  })

  describe('when grabbing the splitter', () => {
    let sliderElement: Cypress.Chainable<JQuery<HTMLElement>>

    beforeEach(() => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.get('#layer-manager-item-content-346 button:last-child').click()
      sliderElement = cy.get('button[data-cy="sliderElement"]')
      sliderElement.trigger('mousedown')
    })

    it('moves the splitter to the right', () => {
      sliderElement
        .then($el => $el.position().left)
        .then(prevLeft => {
          const sliderElementBtn = () =>
            cy.get('button[data-cy="sliderElement"]')
          sliderElementBtn().trigger('mousemove', {
            which: 1,
            clientX: 800,
            clientY: 600,
          })
          sliderElementBtn().trigger('mouseup')
          sliderElementBtn()
            .then($el => $el.position().left)
            .then(currentLeft => {
              expect(currentLeft).to.be.gt(prevLeft)
            })
        })
    })

    it('moves the splitter to the left', () => {
      sliderElement
        .then($el => $el.position().left)
        .then(prevLeft => {
          const sliderElementBtn = () =>
            cy.get('button[data-cy="sliderElement"]')
          sliderElementBtn().trigger('mousemove', {
            which: 1,
            clientX: 100,
            clientY: 600,
          })
          sliderElementBtn().trigger('mouseup')

          cy.get('button[data-cy="sliderElement"]')
            .then($el => $el.position().left)
            .then(currentLeft => {
              expect(currentLeft).to.be.lt(prevLeft)
            })
        })
    })
  })

  describe('when element is focused on (accessibility)', () => {
    let sliderElement: Cypress.Chainable<JQuery<HTMLElement>>

    beforeEach(() => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.get('#layer-manager-item-content-346 button:last-child').click()
      sliderElement = cy.get('button[data-cy="sliderElement"]')
      sliderElement.focus()
    })

    it('moves the splitter to the right on keyboard right', () => {
      sliderElement
        .then($el => $el.position().left)
        .then(prevLeft => {
          cy.get('button[data-cy="sliderElement"]').type('{rightArrow}')
          cy.get('button[data-cy="sliderElement"]')
            .then($el => $el.position().left)
            .then(currentLeft => {
              expect(currentLeft).to.be.gt(prevLeft)
            })
        })
    })

    it('moves the splitter to the left on keyboard left', () => {
      sliderElement
        .then($el => $el.position().left)
        .then(prevLeft => {
          cy.get('button[data-cy="sliderElement"]').type('{leftArrow}')
          cy.get('button[data-cy="sliderElement"]')
            .then($el => $el.position().left)
            .then(currentLeft => {
              expect(currentLeft).to.be.lt(prevLeft)
            })
        })
    })

    it('closes the layer comparator on esc', () => {
      sliderElement.type('{esc}')
      cy.get('button[data-cy="sliderElement"]').should('not.exist')
    })
  })
})
