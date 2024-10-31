describe('Test style edition of Point feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Point"', () => {
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('div.ol-viewport').click(400, 300, { force: true })
      // finish editing, otherwise we have two OL objects
      cy.get('button[data-cy="featItemToggleEdit"]').click()
    })
    describe('Edit feature style', () => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
      cy.get('*[data-cy="featStyleColor"]')
        .invoke('val', '#00ff00')
        .trigger('input')
      cy.get('*[data-cy="featStyleSymbol"]').click()
      cy.get('*[data-cy="featStyleSymbol_2"]').click()
      cy.get('*[data-cy="featStyleSize"]').type('{selectAll}50')
      cy.get('*[data-cy="featStyleAngle"]').type('{selectAll}30')
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
          cy.wrap(ff[0].get('t')).should('equal', '10')
        })

      // URL is updated when clicking validation button
      cy.get('button[data-cy="featureEditValidate"]').click()

      cy.url().as('url')
      cy.window()
        .its('featureHash')
        .then(function (fh) {
          const features = new URLSearchParams(new URL(this.url).search).get(
            'features'
          )!
          const ff = fh.readFeatures(features)
          cy.wrap(ff).its('length').should('equal', 1)

          cy.wrap(ff[0].getGeometry()?.getType()).should('equal', 'Point')
          // check color green
          cy.wrap(ff[0].get('c')).should('equal', '%2300ff00')
          // check shape: cross
          cy.wrap(ff[0].get('s')).should('equal', 'cross')
          // check size 50
          cy.wrap(ff[0].get('t')).should('equal', '50')

          return cy.wrap(ff)
        })
        .its('length')
        .should('equal', 1) // only one geometry has been created
    })
  })
})

describe('Test style edition of Point feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Point"', () => {
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawPointButton"]').click()
      cy.get('div.ol-viewport').click(400, 300, { force: true })
      // finish editing, otherwise we have two OL objects
      cy.get('button[data-cy="featItemToggleEdit"]').click()
    })
    describe('Edit feature style', () => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
      cy.get('*[data-cy="featStyleColor"]')
        .invoke('val', '#00ff00')
        .trigger('input')
      cy.get('*[data-cy="featStyleSymbol"]').click()
      cy.get('*[data-cy="featStyleSymbol_2"]').click()
      cy.get('*[data-cy="featStyleSize"]').type('{selectAll}50')
      cy.get('*[data-cy="featStyleAngle"]')
        .find('input')
        .eq(1)
        .type('{selectAll}30', { force: true })
    })
  })

  describe('When checking featureStyle in OL DrawnFeature object', () => {
    it('feature style shall be applied', () => {
      // get featureLayer
      cy.window()
        .its('olMap')
        .then(function (olMap) {
          const featureLayers = olMap
            .getLayers()
            .getArray()
            .filter((l: any) => l.get('cyLayerType') == 'featureLayer')
          const features = featureLayers
            .map((l: any) => l.getSource().getFeatures())
            .flat()
          cy.wrap(features.length).should('equal', 1)

          // const ff = features.find((f: any) => f.get('name') == 'Point 1')
          const ff = features[0]
          cy.wrap(ff.featureType).should('equal', 'drawnPoint')
          // check color green
          cy.wrap(ff.featureStyle.color).should('equal', '#00ff00')
          // check shape: cross
          cy.wrap(ff.featureStyle.shape).should('equal', 'cross')
          // check size = 50
          cy.wrap(ff.featureStyle.size).should('equal', 50)
          // check angle = 30°
          //cy.wrap(Math.abs(30 - ff.featureStyle.angle / Math.PI * 180)).should('be.lessThan', 0.0001)
        })

      // test cancel button
      cy.get('button[data-cy="featureEditCancel"]').click()

      cy.window()
        .its('olMap')
        .then(function (olMap) {
          const featureLayers = olMap
            .getLayers()
            .getArray()
            .filter((l: any) => l.get('cyLayerType') == 'featureLayer')
          const features = featureLayers
            .map((l: any) => l.getSource().getFeatures())
            .flat()
          cy.wrap(features.length).should('equal', 1)

          const ff = features[0]
          // check size = 10
          cy.wrap(ff.featureStyle.size).should('equal', 10)
        })
    })
  })
})

describe('Test style edition of Label feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Point"', () => {
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawLabelButton"]').click()
      cy.get('div.ol-viewport').click(250, 150, { force: true })
    })
    describe('Edit feature style', () => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
      cy.get('*[data-cy="featStyleColor"]')
        .invoke('val', '#009f09')
        .trigger('input')
      cy.get('*[data-cy="featStyleSize"]').type('{selectAll}8') // max size 10
      cy.get('*[data-cy="featStyleAngle"]').type('{selectAll}60')
      cy.get('button[data-cy="featureEditValidate"]').click()
    })
  })

  describe('When checking featureStyle in OL DrawnFeature object', () => {
    it('feature style shall be applied', () => {
      // get featureLayer
      cy.window()
        .its('olMap')
        .then(function (olMap) {
          const featureLayers = olMap
            .getLayers()
            .getArray()
            .filter((l: any) => l.get('cyLayerType') == 'featureLayer')
          const features = featureLayers
            .map((l: any) => l.getSource().getFeatures())
            .flat()
          cy.wrap(features.length).should('equal', 1)

          const ff = features[0]
          cy.wrap(ff.featureType).should('equal', 'drawnLabel')
          // check color green
          cy.wrap(ff.featureStyle.color).should('equal', '#009f09')
          // check size = 50
          cy.wrap(ff.featureStyle.size).should('equal', 8)
          // check angle = 60°
          cy.wrap(
            Math.abs(60 - (ff.featureStyle.angle / Math.PI) * 180)
          ).should('be.lessThan', 0.0001)
        })
    })
  })
})

describe('Test style edition of Line feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Line"', () => {
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawLineButton"]').click()
      cy.get('div.ol-viewport').click(200, 400, { force: true })
      cy.get('div.ol-viewport').click(300, 300, { force: true })
      cy.get('div.ol-viewport').click(400, 400, { force: true })
      cy.get('div.ol-viewport').dblclick(500, 300, { force: true })
    })
    describe('Edit feature style', () => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
      cy.get('*[data-cy="featStyleColor"]')
        .invoke('val', '#0088ff')
        .trigger('input')
      cy.get('*[data-cy="featStyleLineWidth"]')
        .find('input')
        .eq(1)
        .type('{selectAll}7.5', { force: true })
      cy.get('*[data-cy="featStyleLineStyle"]').find('button').eq(1).click()
      cy.get('button[data-cy="featureEditValidate"]').click()
    })
  })

  describe('When checking featureStyle in OL DrawnFeature object', () => {
    it('feature style shall be applied', () => {
      // get featureLayer
      cy.window()
        .its('olMap')
        .then(function (olMap) {
          const featureLayers = olMap
            .getLayers()
            .getArray()
            .filter((l: any) => l.get('cyLayerType') == 'featureLayer')
          const features = featureLayers
            .map((l: any) => l.getSource().getFeatures())
            .flat()
          cy.wrap(features.length).should('equal', 1)
          const ff = features[0]
          cy.wrap(ff.featureType).should('equal', 'drawnLine')
          // check color blue
          cy.wrap(ff.featureStyle.color).should('equal', '#0088ff')
          // check line width 5
          cy.wrap(ff.featureStyle.stroke).should('equal', 7.5)
          // check line style dashed
          cy.wrap(ff.featureStyle.linestyle).should('equal', 'dashed')
        })
    })
  })
})

describe('Test style edition of Polygon feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Polygon"', () => {
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
      cy.get('*[data-cy="featStyleTransparency"]').type('{selectAll}22')
      cy.get('button[data-cy="featureEditValidate"]').click()
    })
  })

  describe('When checking featureStyle in OL DrawnFeature object', () => {
    it('feature style shall be applied', () => {
      // get featureLayer
      cy.window()
        .its('olMap')
        .then(function (olMap) {
          const featureLayers = olMap
            .getLayers()
            .getArray()
            .filter((l: any) => l.get('cyLayerType') == 'featureLayer')
          const features = featureLayers
            .map((l: any) => l.getSource().getFeatures())
            .flat()
          cy.wrap(features.length).should('equal', 1)
          const ff = features[0]
          cy.wrap(ff.featureType).should('equal', 'drawnPolygon')
          // check color blue
          cy.wrap(ff.featureStyle.color).should('equal', '#0000ff')
          // check line width 5
          cy.wrap(ff.featureStyle.stroke).should('equal', 5.5)
          // check opacity 0.78
          cy.wrap(ff.featureStyle.opacity).should('equal', 0.78)
        })
    })
  })
})

describe('Test style edition of Circle feature', () => {
  beforeEach(() => {
    cy.visit('/')
    describe('Draw "Circle"', () => {
      cy.get('button[data-cy="drawButton"]').click()
      cy.get('button[data-cy="drawCircleButton"]').click()
      cy.get('div.ol-viewport').click(500, 400, { force: true })
      cy.get('div.ol-viewport').dblclick(550, 450, { force: true })
    })
    describe('Edit feature style', () => {
      cy.get('*[data-cy="featItemActionStyle"]').click()
      cy.get('*[data-cy="featStyleColor"]')
        .invoke('val', '#00004f')
        .trigger('input')
      cy.get('*[data-cy="featStyleLineWidth"]').type('{selectAll}3.5')
      cy.get('*[data-cy="featStyleTransparency"]').type('{selectAll}62')
      cy.get('button[data-cy="featureEditValidate"]').click()
    })
  })

  describe('When checking featureStyle in OL DrawnFeature object', () => {
    it('feature style shall be applied', () => {
      // get featureLayer
      cy.window()
        .its('olMap')
        .then(function (olMap) {
          const featureLayers = olMap
            .getLayers()
            .getArray()
            .filter((l: any) => l.get('cyLayerType') == 'featureLayer')
          const features = featureLayers
            .map((l: any) => l.getSource().getFeatures())
            .flat()
          cy.wrap(features.length).should('equal', 1)
          const ff = features[0]
          cy.wrap(ff.featureType).should('equal', 'drawnCircle')
          // check color blue
          cy.wrap(ff.featureStyle.color).should('equal', '#00004f')
          // check line width 5
          cy.wrap(ff.featureStyle.stroke).should('equal', 3.5)
          // check opacity 0.78
          cy.wrap(ff.featureStyle.opacity).should('equal', 0.38)
        })
    })
  })
})
