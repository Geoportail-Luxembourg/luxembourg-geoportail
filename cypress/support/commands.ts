/// <reference types="cypress" />

import type { Interaction } from 'ol/interaction'
import 'cypress-real-events/support'

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add('getDrawInteractions', () => {
  cy.window().then(win => {
    const map = win.olMap
    return map
      .getInteractions()
      .getArray()
      .filter(interaction => {
        // workaround for 'instance of Draw' not working (with Draw2 class?)
        return (
          'finishDrawing' in interaction &&
          typeof interaction.finishDrawing === 'function'
        )
      })
  })
})

Cypress.Commands.add('getModifyInteraction', () => {
  cy.window().then(win => {
    const map = win.olMap
    const modifyInteraction = map
      .getInteractions()
      .getArray()
      .find(interaction => {
        return (
          'removePoint' in interaction &&
          typeof interaction.removePoint === 'function'
        )
      })
    cy.wrap(modifyInteraction)
  })
})

Cypress.Commands.add('dragVertexOnMap', (originX, originY, x, y) => {
  cy.get('div.ol-viewport').realMouseDown({
    x: originX,
    y: originY,
  })
  cy.get('div.ol-viewport').realMouseMove(x, y)
  cy.get('div.ol-viewport').realMouseUp()
})

Cypress.Commands.add('login', () => {
  cy.intercept('POST', '/login', {
    statusCode: 200,
    body: {
      login: 'MyLogin',
      mail: 'my_login@email.com',
    },
  })

  cy.get('header [data-cy="authFormIcon"]').click()
  cy.get('[data-cy="authForm"] input[name="userName"]').type('MyLogin')
  cy.get('[data-cy="authForm"] input[name="userPassword"]').type('Rand87321mdp')
  cy.get('[data-cy="authForm"] input[type="submit"]').click()
})

declare global {
  namespace Cypress {
    interface Chainable {
      getDrawInteractions(): Chainable<Array<Interaction>>
      getModifyInteraction(): Chainable<Interaction>
      dragVertexOnMap(
        originX: number,
        originY: number,
        x: number,
        y: number
      ): Chainable<void>
      login(): Chainable<void>
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

export {}
