describe('Permalink/State persistor - Layers', () => {
  describe('Restore layers from url', () => {
    describe('When layer times param have values', () => {
      it('updates the layer items in the layer manager with the dates', () => {
        cy.visit(
          '/?version=3&lang=fr&X=667917&Y=6394482&zoom=8&bgLayer=basemap_2015_global&serial=&layers=9999991861-999999-9999991859&opacities=1-1-1&time=2016-08-01T00%253A00%253A00Z--2014-08-31T12%253A43%253A47Z%252F2020-07-04T00%253A00%253A00Z--2016-10-04T12%253A43%253A47Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(0)
          .should('have.value', '2014-08-31')
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(1)
          .should('have.value', '2020-07-04')
        cy.get('[data-cy="myLayers"] input.lux-time-datepicker')
          .eq(2)
          .should('have.value', '2016-08-01')
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(0)
          .should('have.css', 'left')
          .should('match', /19\d(?:\.\d*)?px/) // 191.233px in dev but in ci 191.23px, thus this rounding
      })
    })
  })

  describe('Save layers to url', () => {
    describe('When updating layer time with datepicker widget with value mode', () => {
      it('updates the layer time (date start) in the url', () => {
        cy.visit(
          '?version=3&lang=fr&layers=9999991859&opacities=1&time=2014-09-14T00%253A00%253A00Z'
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
          '?version=3&lang=fr&layers=9999991859&opacities=1&time=2014-09-14T00%253A00%253A00Z'
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
          '/?version=3&lang=fr&layers=999999&time=2014-10-14T00%253A00%253A00Z%252F2020-12-31T00%253A00%253A00Z'
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
          '/?version=3&lang=fr&layers=999999&time=2014-10-14T00%253A00%253A00Z%252F2020-12-31T00%253A00%253A00Z'
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
      it('increases the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=9999991861&time=2019-01-01T00%253A00%253A00Z%252F'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(0)
          .type('{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}')
        cy.url().should('contains', '&time=2020-08-01T00%253A00%253A00Z&')
      })

      it('decreases the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=9999991861&time=2019-01-01T00%253A00%253A00Z%252F'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(0)
          .type(
            '{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}'
          )
        cy.url().should('contains', '&time=2017-08-01T00%253A00%253A00Z')
      })
    })

    describe('When updating layer time with slider widget with range mode', () => {
      it('increases the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=9999991858&time=2015-08-31T12%253A43%253A47Z%252F2019-05-01T12%253A43%253A47Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(1) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type(
            '{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}'
          )
        cy.url().should('contains', '2016-01-31').and('contains', '2019-05-01')
      })

      it('decreases the layer time (date start) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=9999991858&time=2015-08-31T12%253A43%253A47Z%252F2019-05-01T12%253A43%253A47Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(1) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type(
            '{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}'
          )

        cy.url().should('contains', '2015-03-31').and('contains', '2019-05-01')
      })

      it('increases the layer time (date end) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=9999991858&time=2015-08-31T12%253A43%253A47Z%252F2019-05-01T12%253A43%253A47Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(0) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type(
            '{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}{rightArrow}'
          )
        cy.url().should('contains', '2015-08-31').and('contains', '2019-10-01')
      })

      it('decreases the layer time (date end) in the url', () => {
        cy.visit(
          '/?version=3&lang=fr&layers=9999991858&time=2015-08-31T12%253A43%253A47Z%252F2019-05-01T12%253A43%253A47Z'
        )
        cy.get('[data-cy="myLayersButton"]').click()
        cy.get('[data-cy="myLayers"] .lux-slidebar-thumb')
          .eq(0) // ! date start/end for slider range have been reversed for ui/z-index purpose
          .type(
            '{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}{leftArrow}'
          )
        cy.url().should('contains', '2015-08-31').and('contains', '2018-12-31')
      })
    })
  })
})
