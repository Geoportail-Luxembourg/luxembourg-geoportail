import type { AUTWindowOlMap } from '../types'

const bookmarks = [
  {
    id: 'bm-1',
    name: 'Kirchberg',
    center: [690000, 6463000],
    zoom: 14,
  },
]

describe('Bookmarks', () => {
  describe('when no bookmark is stored', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.get('[data-cy="catalogButton"]').click()
    })

    it('shows the panel collapsed in the catalog', () => {
      cy.get('[data-cy="bookmarkPanel"]')
        .find('button[aria-expanded]')
        .should('have.attr', 'aria-expanded', 'false')
    })

    it('saves the current view as a bookmark', () => {
      cy.get('[data-cy="bookmarkPanel"]').find('button[aria-expanded]').click()
      cy.get('[data-cy="bookmarkAddCurrentView"]').click()
      cy.get('[data-cy="bookmarkDraftInput"]').type('My view')
      cy.get('[data-cy="bookmarkConfirmDraft"]').click()

      cy.get('[data-cy="bookmarkPanel"]').contains('My view')
      cy.wrap(null).should(() => {
        const stored = JSON.parse(localStorage.getItem('bookmarks') || '[]')
        expect(stored).to.have.length(1)
        expect(stored[0].name).to.eq('My view')
      })
    })
  })

  describe('when a bookmark is stored', () => {
    beforeEach(() => {
      cy.visit('/', {
        onBeforeLoad(win) {
          win.localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        },
      })
      cy.get('[data-cy="catalogButton"]').click()
    })

    it('restores the bookmark and navigates to its view', () => {
      cy.get('[data-cy="bookmarkItem-bm-1"]').contains('Kirchberg').click()

      cy.window().then(win => {
        cy.wrap(null).should(() => {
          const view = (<AUTWindowOlMap>win).olMap.getView()
          const center = view.getCenter() || []
          expect(center[0]).to.be.closeTo(bookmarks[0].center[0], 1)
          expect(center[1]).to.be.closeTo(bookmarks[0].center[1], 1)
          expect(view.getZoom()).to.be.closeTo(14, 0.01)
        })
      })
    })

    it('deletes the bookmark and clears the local storage', () => {
      cy.get('[data-cy="bookmarkDelete-bm-1"]').click()

      cy.get('[data-cy="bookmarkItem-bm-1"]').should('not.exist')
      cy.wrap(null).should(() => {
        expect(localStorage.getItem('bookmarks')).to.eq('[]')
      })
    })
  })
})
