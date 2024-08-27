// ***********************************************
// This example commands.js shows you how to
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

// `[aria-label="wishlist"]`
Cypress.Commands.add('getLink', (link) => {
    return cy.get(`a[href="${link}"]`);
});

Cypress.Commands.add('roleByLabel', (label) => {
   return cy.get(`[aria-label="${label}"]`)
});

Cypress.Commands.add('iconByControl', (control) => {
    return cy.get(`[aria-controls="${control}"]`)
});

// export const getLink = (link) => cy.get(`a[href="${link}"]`);