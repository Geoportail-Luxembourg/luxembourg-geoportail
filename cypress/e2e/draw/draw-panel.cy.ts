import { checkModifyInteractionActive, testFeatItem } from './draw-feat.utils'

describe('Draw panel', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="drawButton"]').click()
    cy.get('button[data-cy="drawPointButton"]').click()
    cy.get('div.ol-viewport').click(100, 100)
  })

  describe('When clicking button to draw Point', () => {
    it('displays the draw panel', () => {
      cy.get('[data-cy="drawPanel"] h5').should('have.text', 'Dessins')
      cy.get('[data-cy="drawPanelMenuPopup"]').should('exist')
    })
  })

  describe('When clicking the dropdown menu icon', () => {
    it('displays the dropdown menu content', () => {
      cy.get('[data-cy="drawPanelMenuPopup"] > button').should('exist')
      cy.get('[data-cy="drawPanelMenuPopup"] > button').click()

      cy.get('[data-cy="drawPanelMenuPopupItem"]').as('menuItem')
      cy.get('@menuItem').should($items => {
        const texts = $items.toArray().map(el => el.textContent?.trim())
        expect(texts).to.include.members([
          'Copier dans ma carte',
          'Effacer tous les dessins',
          'Créer une nouvelle carte à partir de ces dessins',
          'Fusionner des lignes',
          'Couper une ligne',
        ])
      })
    })
  })

  describe('When clicking toggle edit button', () => {
    it('should toggle edit in panel and on map (ol modify interaction)', () => {
      checkModifyInteractionActive(true)
      testFeatItem()
      cy.get('*[data-cy="featItemToggleEdit"]').click()
      checkModifyInteractionActive(false)
      cy.get('*[data-cy="featItemToggleEdit"]').click()
      checkModifyInteractionActive(true)
      testFeatItem()
    })
  })

  describe('When clicking edit pencil button', () => {
    beforeEach(() => {
      cy.get('*[data-cy="featItemActionEdit"]').click()
    })
    it('should open the edit panel', () => {
      cy.get('*[data-cy="featureLabelEdit"]').should('exist')
    })
    it('should update the feature label on submit', () => {
      cy.get('*[data-cy="featureLabelEdit"]').clear()
      cy.get('*[data-cy="featureLabelEdit"]').type('New label')
      cy.get('*[data-cy="featureEditValidate"]').click()
      cy.reload()
      cy.get('*[data-cy="mymapsOpenClose"]').click()
      cy.get('*[data-cy="featItemName"]').should('have.text', 'New label')
    })
    it('should NOT update the feature label on cancel', () => {
      cy.get('*[data-cy="featureLabelEdit"]').clear()
      cy.get('*[data-cy="featureLabelEdit"]').type('New label')
      cy.get('*[data-cy="featureEditCancel"]').click()
      cy.reload()
      cy.get('*[data-cy="mymapsOpenClose"]').click()
      cy.get('*[data-cy="featItemName"]').should('have.text', 'Nom 1')
    })
  })
})
