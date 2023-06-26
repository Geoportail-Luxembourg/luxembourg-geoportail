describe('Permalink/State persistor - Layer comparator (lc & sliderRatio)', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="catalogButton"]').click()
    cy.get('[data-cy="catalog"]').find('button').first().click()
    cy.get('[data-cy="catalog"]').find('button').eq(1).click()
    cy.get('[data-cy="catalog"]').find('button').eq(3).click()
    cy.get('[data-cy="catalog"]').find('button').eq(5).click()
    cy.get('[data-cy="catalog"]').find('button').eq(7).click()
    cy.get('[data-cy="myLayersButton"]').click()
  })

  describe('initial state', () => {
    it('updates the permalink parameter "lc"', () => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.url().should('not.contain', 'lc=true')
      cy.get('#layer-manager-item-content-346 button:last-child').click()
      cy.url().should('contains', 'lc=true')
    })

    it('updates the permalink parameter "sliderRatio" with default value 0.5', () => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.url().should('not.contain', 'sliderRatio')
      cy.get('#layer-manager-item-content-346 button:last-child').click()
      cy.url().should('contains', 'sliderRatio=0.5')
    })
  })

  describe('when splitter element is moved or closed', () => {
    beforeEach(() => {
      cy.get('button[data-cy="myLayerItemLabel-346"]').click()
      cy.get('#layer-manager-item-content-346 button:last-child').click()
      cy.get('button[data-cy="sliderElement"]').focus()
    })

    it('updates the permalink parameter "sliderRatio" to be greater than previous value', () => {
      cy.url().should('contains', 'sliderRatio=0.5')
      cy.get('button[data-cy="sliderElement"]').type('{rightArrow}')
      cy.url().should('contain', 'sliderRatio=0.5441176470588235')
    })

    it('updates the permalink parameter "sliderRatio" to be lower than previous value', () => {
      cy.url().should('contains', 'sliderRatio=0.5')
      cy.get('button[data-cy="sliderElement"]').type('{leftArrow}')
      cy.url().should('contain', 'sliderRatio=0.45588235294117646')
    })

    it('updates the permalink parameter "lc" with false', () => {
      cy.get('button[data-cy="sliderElement"]').type('{esc}')
      cy.url().should('contain', 'lc=false')
    })
  })
})
