describe('Permalink/State persistor - Layers', () => {
  describe('Restore layers from url', () => {
    describe('When layer opacities have values', () => {
      it('updates the input opacity with the right opacity', () => {
        cy.visit(
          '/?lang=lb&X=762744&Y=6414661&version=3&zoom=11&layers=346-354-269&opacities=0.5-1-0.7&bgLayer=orthogr_2013_global'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .eq(0)
          .should('have.value', '75')
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .eq(1)
          .should('have.value', '100')
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .eq(2)
          .should('have.value', '50')
      })
    })

    describe('When a layer opacity is missing', () => {
      it('updates the url with a default opacity to 1', () => {
        cy.visit(
          '/?lang=lb&X=762744&Y=6414661&version=3&zoom=11&layers=346-354-269&opacities=1&bgLayer=orthogr_2013_global'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.url().should('contains', 'opacities=1-1-1')
        cy.get('[data-cy="myLayers"] .lux-layer-manager-item-content input')
          .should('have.length', 3)
          .each($el => {
            cy.wrap($el).should('have.value', '100')
          })
      })
    })

    describe('When layer times param have values', () => {
      it('updates the layer items in the layer manager with the dates', () => {
        cy.visit(
          '/?version=3&layers=1860-1858-1859&opacities=1-1-1&time=2019-08-01T00%253A00%253A00Z%252F--2014-08-31T12%253A43%253A47Z%252F2020-12-31T23%253A59%253A59Z--2014-10-14T00%253A00%253A00Z%252F2020-12-31T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(0)
          .should('have.value', '2014-10-14')
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(1)
          .should('have.value', '2020-12-31')
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(2)
          .should('have.value', '2014-08-31')
        cy.get('[data-cy="myLayers"] input.lux-slidebar')
          .eq(0)
          .should('have.value', '9')
        cy.get('[data-cy="myLayers"] .lux-time-start-date')
          .eq(0)
          .should('have.text', '8-2019')
      })
    })
  })

  describe('Save layers to url', () => {
    describe('When updating layer time with datepicker widget with value mode', () => {
      it('updates the layer time (date start) in the url', () => {
        cy.visit(
          '?version=3&lang=fr&layers=1858&opacities=1&time=2014-09-14T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(0)
          .type('2015-09-02')
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(0)
          .trigger('change')
        cy.url().should('contains', '&time=2015-09-02T00%253A00%253A00Z')
      })

      it('does not have the date end datepicker', () => {
        cy.visit(
          '?version=3&lang=fr&layers=1858&opacities=1&time=2014-09-14T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(1)
          .should('not.exist')
      })
    })

    describe('When updating layer time with datepicker widget with range mode', () => {
      it('updates the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=1859&time=2014-10-14T00%253A00%253A00Z%252F2020-12-31T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(0)
          .type('2014-09-02')
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(0)
          .trigger('change')
        cy.url().should(
          'contains',
          '&time=2014-09-02T00%253A00%253A00Z%252F2020-12-31T00%253A00%253A00Z'
        )
      })

      it('updates the layer time (date end) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=1859&time=2014-10-14T00%253A00%253A00Z%252F2020-12-31T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(1)
          .type('2020-12-29')
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(1)
          .trigger('change')
        cy.url().should(
          'contains',
          '&time=2014-10-14T00%253A00%253A00Z%252F2020-12-29T00%253A00%253A00Z'
        )
      })
    })

    describe('When updating layer time with slider widget with value mode', () => {
      it('updates the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=1860&time=2019-01-01T00%253A00%253A00Z%252F'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] input.lux-slidebar').eq(0).type('2')
        cy.get('[data-cy="myLayers"] input.lux-slidebar')
          .eq(0)
          .trigger('change')
        cy.url().should('contains', '&time=2022-08-01T00%253A00%253A00Z')
      })
    })

    describe('When updating layer time with slider widget with range mode', () => {
      it('increases the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=99999&time=2007-08-01T00%253A00%253A00Z%252F2019-01-01T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb').eq(0).focus()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(1) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type('{rightArrow}')
        cy.url().should(
          'contains',
          '&time=2010-08-01T00%253A00%253A00Z%252F2019-01-01T00%253A00%253A00Z&'
        )
      })

      it('decreases the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=99999&time=2007-08-01T00%253A00%253A00Z%252F2019-01-01T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb').eq(0).focus()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(1) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type('{leftArrow}')
        cy.url().should(
          'contains',
          '&time=2004-08-01T00%253A00%253A00Z%252F2019-01-01T00%253A00%253A00Z&'
        )
      })

      it('increases the layer time (date end) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=99999&time=2007-08-01T00%253A00%253A00Z%252F2019-01-01T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb').eq(1).focus()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(0) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type('{rightArrow}')
        cy.url().should(
          'contains',
          '&time=2007-08-01T00%253A00%253A00Z%252F2019-08-01T00%253A00%253A00Z&'
        )
      })

      it('decreases the layer time (date end) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=99999&time=2007-08-01T00%253A00%253A00Z%252F2019-01-01T00%253A00%253A00Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb').eq(1).focus()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(0) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type('{leftArrow}')
        cy.url().should(
          'contains',
          '&time=2007-08-01T00%253A00%253A00Z%252F2018-08-01T00%253A00%253A00Z&'
        )
      })
    })
  })
})
