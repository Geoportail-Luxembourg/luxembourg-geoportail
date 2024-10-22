describe('Test style edition of Point feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Point"', () => {
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('div.ol-viewport').click(400, 300, { force: true })
    })
    describe('Edit feature style', () => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
      cy.get('*[data-cy="featStyleColor"]')
        .invoke('val', '#00ff00')
        .trigger('input')
      cy.get('*[data-cy="featStyleSymbol"]').click()
      cy.get('*[data-cy="featStyleSymbol_2"]').click()
      cy.get('*[data-cy="featStyleSize"]').type('{selectAll}50')
      cy.get('*[data-cy="featStyleSize"]').trigger('input')
      cy.get('*[data-cy="featStyleAngle"]').type('{selectAll}30')
      cy.get('*[data-cy="featStyleAngle"]').trigger('input')
      cy.get('button[data-cy="featureEditValidate"]').click()
    })
  })

  describe('When checking URL', () => {
    it('feature style shall be encoded', () => {
      cy.url().as('url')
      cy.window()
        .its('featureHash')
        .then(function (fh) {
          const features = new URLSearchParams(new URL(this.url).search).get(
            'features'
          )!
          const ff = fh.readFeatures(features)
          cy.wrap(ff).its('length').should('equal', 1)
          cy.log(JSON.stringify(ff[0].values_))
          cy.wrap(ff[0].getGeometry()?.getType()).should('equal', 'Point')
          // check color green
          cy.wrap(ff[0].get('c')).should('equal', '%2300ff00')
          // check shape: cross
          cy.wrap(ff[0].get('s')).should('equal', 'cross')
          // check size = 50
          cy.wrap(ff[0].get('t')).should('equal', '50')
          // check angle = 30°
          cy.wrap(
            Math.abs(30 - (parseFloat(ff[0].get('a')) / Math.PI) * 180)
          ).should('be.lessThan', 0.001)

          return cy.wrap(ff)
        })
        .its('length')
        .should('equal', 1) // only one geometry has been created
    })
  })
})

describe('Test style edition of Polygon feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Point"', () => {
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawPolygonButton"]').click()
      cy.get('div.ol-viewport').click(100, 100, { force: true })
      cy.get('div.ol-viewport').click(100, 200, { force: true })
      cy.get('div.ol-viewport').dblclick(200, 200, { force: true })
    })
    describe('Edit feature style', () => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
      cy.get('*[data-cy="featStyleColor"]')
        .invoke('val', '#0000ff')
        .trigger('input')
      cy.get('*[data-cy="featStyleLineWidth"]').type('{selectAll}5.5')
      cy.get('*[data-cy="featStyleLineWidth"]').trigger('input')
      cy.get('*[data-cy="featStyleTransparency"]').type('{selectAll}22')
      cy.get('*[data-cy="featStyleTransparency"]').trigger('input')
      cy.get('button[data-cy="featureEditValidate"]').click()
    })
  })

  describe('When checking URL', () => {
    it('feature style shall be encoded', () => {
      cy.url().as('url')
      cy.window()
        .its('featureHash')
        .then(function (fh) {
          const features = new URLSearchParams(new URL(this.url).search).get(
            'features'
          )!
          const ff = fh.readFeatures(features)
          cy.wrap(ff).its('length').should('equal', 1)
          cy.log(JSON.stringify(ff[0].values_))
          cy.wrap(ff[0].getGeometry()?.getType()).should('equal', 'Polygon')
          // check color blue
          cy.wrap(ff[0].get('c')).should('equal', '%230000ff')
          // check line width 5
          cy.wrap(ff[0].get('e')).should('equal', '5.5')
          // check opacity 0.78
          cy.wrap(ff[0].get('o')).should('equal', '0.78')

          return cy.wrap(ff)
        })
        .its('length')
        .should('equal', 1) // only one geometry has been created
    })
  })
})
