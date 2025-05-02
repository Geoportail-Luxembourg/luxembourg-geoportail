function openFirstItemToShowToggleSliderBtn() {
  cy.get('[data-cy="myLayer"]').first().as('firstLayerItem')
  cy.get('@firstLayerItem').find('button[data-cy^="myLayerItemLabel"]').click()
  cy.get('@firstLayerItem')
    .find('[data-cy="myLayerComparatorBtn"]')
    .as('comparatorBtn')
  // Then, you should click the btn in the spec to enable the slider comparator
}

function toggleSliderBtn() {
  openFirstItemToShowToggleSliderBtn()
  cy.get('@comparatorBtn').click()
}

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
    beforeEach(() => {
      openFirstItemToShowToggleSliderBtn()
    })

    it('displays a button to toggle the comparator for the top layer only', () => {
      cy.get('@comparatorBtn').should('exist')
      cy.get('[data-cy="myLayer"]').eq(1).as('secondLayerItem').click()
      cy.get('@secondLayerItem')
        .find('[data-cy="myLayerComparatorBtn"]')
        .should('not.exist')
      cy.get('[data-cy="myLayer"]').eq(2).as('thirddLayerItem').click()
      cy.get('@thirddLayerItem')
        .find('[data-cy="myLayerComparatorBtn"]')
        .should('not.exist')
    })
  })

  describe('when clicking the toggle layer comparator button', () => {
    beforeEach(() => {
      openFirstItemToShowToggleSliderBtn()
    })

    it('toggles the button display', () => {
      cy.get('@comparatorBtn').should('exist').should('have.class', 'fa-circle')
      cy.get('@comparatorBtn').click()
      cy.get('@comparatorBtn').should('have.class', 'fa-adjust')
    })

    it('displays the splitter on the map with le layer label', () => {
      cy.get('@comparatorBtn').click()
      cy.get('button[data-cy="sliderElement"]')
        .should('be.visible')
        .find('[data-cy="sliderLayerLabel"]')
        .contains('Communes (Noms)')
    })
  })

  describe('when grabbing the splitter', () => {
    let sliderElement: Cypress.Chainable<JQuery<HTMLElement>>

    beforeEach(() => {
      toggleSliderBtn()
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
      toggleSliderBtn()
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
