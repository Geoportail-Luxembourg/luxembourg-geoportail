describe('Draw "Point" symbols', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '/raster?lon=-25877.619036593664&lat=154433.4715351454',
      {
        statusCode: 200,
        body: {
          dhm: null,
        },
      }
    )
    cy.intercept(
      'GET',
      '/raster?lon=12756.103097272688&lat=114635.74032468312',
      {
        statusCode: 200,
        body: {
          dhm: 333.13,
        },
      }
    )
    cy.intercept('GET', '/raster?lon=51966.98676810359&lat=74839.09999860045', {
      statusCode: 500,
      body: {},
    })

    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawPointButton"]').click()
    cy.get('div.ol-viewport').click(100, 100)
    cy.get('[data-cy="featItemActionStyle"]').click()
    cy.get('[data-cy="featStyleSymbolEdit"]').click()
  })

  describe('When editing symbol', () => {
    describe('When browsing public symbols', () => {
      beforeEach(() => {
        cy.get('[data-cy="featStyleSymbolTab"]').eq(1).click()
      })

      it('displays the public symbol list', () => {
        cy.get('[data-cy="featStyleSymbolFilterList"]').should('exist')
        cy.get('[data-cy="featStyleSymbolIcon"]').should('have.length', 81)
      })

      describe('When filtering public symbols', () => {
        it('displays the public symbol list', () => {
          cy.get('[data-cy="featStyleSymbolFilterList"]').type('pin1')
          cy.get('[data-cy="featStyleSymbolIcon"]').should('have.length', 2)
        })
      })

      describe('When choosing a symbol', () => {
        it('should close the list', () => {
          cy.get('[data-cy="featStyleSymbolFilterList"]').should('exist')
          cy.get('[data-cy="featStyleSymbolIcon"]').eq(1).click()
          cy.get('[data-cy="featStyleSymbolFilterList"]').should('not.exist')
        })
      })
    })

    describe('When browsing private symbols', () => {
      beforeEach(() => {
        cy.intercept('GET', /\/symbols\?symboltype=us/, {
          statusCode: 200,
          body: {
            success: true,
            count: 2,
            results: [
              {
                id: 1915,
                name: 'foo symbol 1',
                url: '/symbol/1915',
                symboltype: 'us',
              },
              {
                id: 1998,
                name: 'foo symbol 2',
                url: '/symbol/1998',
                symboltype: 'us',
              },
            ],
          },
        }).as('getSymbols')
        cy.intercept('POST', /\/mymaps\/upload_symbol/, {
          statusCode: 200,
        })
        cy.login()
        cy.get('[data-cy="featStyleSymbolTab_private"]').click()
      })

      it('displays the public symbols tab and the private symbols tab', () => {
        cy.get('[data-cy="featStyleSymbolFilterList"]').should('exist')
        cy.get('[data-cy="featStyleSymbolIcon"]').should('have.length', 2)
      })

      describe('When filtering private symbols', () => {
        it('displays the filtered private symbol list', () => {
          cy.get('[data-cy="featStyleSymbolFilterList"]').type('symbol 1')
          cy.get('[data-cy="featStyleSymbolIcon"]').should('have.length', 1)
        })
      })

      describe('When uploading file', () => {
        it('refreshes the private symbol list list', () => {
          cy.get('input[type=file]').selectFile(
            {
              contents: Cypress.Buffer.from('file contents'),
              fileName: 'file.txt',
              mimeType: 'text/plain',
              lastModified: Date.now(),
            },
            { force: true }
          )
          cy.get('@getSymbols.all').should('have.length', 2)
        })
      })
    })
  })
})
