describe('Print', () => {
  beforeEach(() => {
    cy.visit(
      '/theme/main?version=3&lang=fr&X=684326&Y=6378901&zoom=14&rotation=0&features=&layers=152&opacities=1&time=&bgLayer=topogr_global'
    )
  })

  describe('When user opens the print tool', () => {
    beforeEach(() => {
      cy.get('button[data-cy="printButton"]').click()
    })

    it('displays the menu for print', () => {
      cy.get('[data-cy="printTitle"]').should('exist')
      cy.get('[data-cy="printWithLegend"]').should('exist')
      cy.get('[data-cy="printLayouts"]').should('exist')
      cy.get('[data-cy="printScales"]').should('exist')
      cy.get('[data-cy="printLoading"]').should('not.exist')
      cy.get('[data-cy="printPng"]').should('exist')
      cy.get('[data-cy="printPng"]').should('not.be.disabled')
      cy.get('[data-cy="printPdf"]').should('exist')
      cy.get('[data-cy="printPdf"]').should('not.be.disabled')
    })

    it('displays the available layouts', () => {
      cy.get('[data-cy="printLayouts"]').click()
      // FIXME: here: minimal check on values, should check all
      cy.get(
        '[data-cy="printLayouts"] [data-cy="dropdownItem-A4 portrait"]'
      ).should('exist')
      cy.get(
        '[data-cy="printLayouts"] [data-cy="dropdownItem-A4 landscape"]'
      ).should('exist')
    })

    it('displays the available scales', () => {
      cy.get('[data-cy="printScales"]').click()
      // FIXME: here: minimal check on values, should check all
      cy.get('[data-cy="printScales"] [data-cy="dropdownItem-1000"]').should(
        'exist'
      )
      cy.get('[data-cy="printScales"] [data-cy="dropdownItem-1500"]').should(
        'exist'
      )
      cy.get('[data-cy="printScales"] [data-cy="dropdownItem-2500"]').should(
        'exist'
      )
    })

    describe('When user activate legends for print', () => {
      it('disables the export png button', () => {
        cy.get('[data-cy="printWithLegend"]').check()
        cy.get('[data-cy="printPng"]').should('be.disabled')
        cy.get('[data-cy="printPdf"]').should('not.be.disabled')
        cy.get('[data-cy="printWithLegend"]').uncheck()
        cy.get('[data-cy="printPng"]').should('not.be.disabled')
        cy.get('[data-cy="printPdf"]').should('not.be.disabled')
      })
    })
  })
})
