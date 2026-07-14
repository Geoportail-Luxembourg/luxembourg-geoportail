describe('Style selector', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="myLayersButton"]').click()
    cy.get('.fa-pencil').click()
  })

  it('renders the style selector properly', () => {
    cy.get('[data-cy="styleSelector"]').should('not.be.hidden')
    cy.get('[data-cy="styleSelector"] > div > button').should('have.length', 3)
  })

  it('has no style value in localStorage', () => {
    expect(localStorage.getItem('roadmap')).to.be.null
  })

  describe('Style panel', () => {
    describe('When closing the style panel', () => {
      beforeEach(() => {
        cy.get('[data-cy="stylePanel"]').find('[data-cy="panelClose"]').click()
      })

      it('closes the style panel', () => {
        cy.get('[data-cy="styleSelector"]').should('not.exist')
      })

      it('shows the layer panel', () => {
        cy.get('[data-cy="layerPanel"]').should('exist')
      })
    })
  })

  describe('Simple style selector', () => {
    beforeEach(() => {
      cy.get('[data-cy="styleSelector"] > div > button').eq(0).as('simple')
      cy.get('@simple')
        .invoke('attr', 'aria-expanded')
        .then(isExpanded => {
          if (isExpanded === 'false') {
            cy.get('@simple').click()
          }
        })
      cy.get('@simple')
        .invoke('attr', 'aria-controls')
        .then(panelId => {
          cy.get(`#${panelId}`).as('simplePanel')
        })
    })
    it('renders the simple style selector properly', () => {
      cy.get('@simplePanel')
        .find('button')
        .filter(':visible')
        .should('have.length', 6)
    })
    it('sets style to 4th style of list', () => {
      cy.get('@simplePanel').find('button[title*="Kids"]').first().click()
      cy.window().then(win => {
        const style = win.localStorage.getItem('roadmap')
        expect(style).to.not.be.null
        const parsedStyle = JSON.parse(style as string)
        expect(parsedStyle.medium[0].color).to.eq('#f9c50d')
        expect(parsedStyle.medium[4].color).to.eq('#2a5ba8')
        expect(parsedStyle.medium[6].visible).to.eq(false)
      })
    })
  })

  describe('Medium style selector', () => {
    beforeEach(() => {
      cy.get('[data-cy="styleSelector"] > div > button').eq(1).as('medium')
      cy.get('@medium')
        .invoke('attr', 'aria-expanded')
        .then(isExpanded => {
          if (isExpanded === 'false') {
            cy.get('@medium').click()
          }
        })
      cy.get('@medium')
        .invoke('attr', 'aria-controls')
        .then(panelId => {
          cy.get(`#${panelId}`).as('mediumPanel')
        })
    })
    it('renders the medium style selector properly', () => {
      cy.get('@mediumPanel')
        .find('input[type="checkbox"]')
        .filter(':visible')
        .should('have.length', 7)
      cy.get('@mediumPanel')
        .find('input[type="color"]')
        .filter(':visible')
        .should('have.length', 6)
    })
    it('sets "Roads primary" to "visible":false', () => {
      cy.get('@mediumPanel')
        .find('input[type="checkbox"][aria-label*="Roads primary"]')
        .first()
        .click()
      cy.window().then(win => {
        const style = win.localStorage.getItem('roadmap')
        expect(style).to.not.be.null
        const parsedStyle = JSON.parse(style as string)
        const roadsPrimary = parsedStyle.medium.find(
          (item: { label: string }) => item.label === 'Roads primary'
        )
        expect(roadsPrimary.visible).to.eq(false)
      })
    })
  })
})
