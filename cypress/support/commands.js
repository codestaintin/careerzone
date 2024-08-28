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

Cypress.Commands.add('getLink', (link) => {
    return cy.get(`a[href="${link}"]`);
});

Cypress.Commands.add('roleByLabel', (label) => {
   return cy.get(`[aria-label="${label}"]`)
});

Cypress.Commands.add('iconByControl', (control) => {
    return cy.get(`[aria-controls="${control}"]`)
});

// cypress/support/commands.js
Cypress.Commands.add('fillPaymentForm', (user) => {
    cy.get('#input-payment-firstname').should('be.visible').type(user.firstName);
    cy.get('#input-payment-lastname').should('be.visible').type(user.lastName);
    cy.get('#input-payment-email').should('be.visible').type(user.emailAddress);
    cy.get('#input-payment-telephone').should('be.visible').type(user.telephone);
    cy.get('#input-payment-password').should('be.visible').type(user.passWord);
    cy.get('#input-payment-confirm').should('be.visible').type(user.conFirm);
    cy.get('#input-payment-company').should('be.visible').type(user.company);
    cy.get('#input-payment-address-1').should('be.visible').type(user.address1);
    cy.get('#input-payment-address-2').should('be.visible').type(user.address2);
    cy.get('#input-payment-city').should('be.visible').type(user.city);
    cy.get('#input-payment-postcode').should('be.visible').type(user.postcode);
    cy.get('#input-comment').scrollIntoView().should('be.visible').type(user.comment);
    cy.get('.sticky-top > :nth-child(3) > .custom-control-label')
        .should('contain', 'I wish to subscribe to the Your Store newsletter.')
        .click();
    cy.get(':nth-child(4) > .custom-control-label')
        .should('contain', 'I have read and agree to the ')
        .click();
    cy.get(':nth-child(6) > .custom-control-label').should('be.visible').click();
    cy.get('#button-save').should('be.visible').click();
});

