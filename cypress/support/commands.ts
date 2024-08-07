/// <reference types="cypress" />

import type { Interaction } from 'ol/interaction'

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
        // workaround for 'instance of Draw' not working with Draw2 class
        return (
          'finishDrawing' in interaction &&
          typeof interaction.finishDrawing === 'function'
        )
      })
  })
})

declare global {
  namespace Cypress {
    interface Chainable {
      getDrawInteractions(): Chainable<Array<Interaction>>
      // login(email: string, password: string): Chainable<void>
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

export {}
