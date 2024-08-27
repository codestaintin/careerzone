import homePage from "../pages/homePage";
import productPage from "../pages/productPage";

describe('Product Page tests', () => {
    beforeEach(() => {
        homePage.visitHome();
    });
    it('should search for a phone and purchase it', () => {
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/');
        homePage.elements.searchBar().should('exist');
        homePage.elements.searchForm().eq(0).type('phone');
        homePage.elements.searchButton().eq(0).click();
        cy.url()
            .should('eq',
                'https://ecommerce-playground.lambdatest.io/index.php?route=product%2Fsearch&search=phone');
        productPage.elements.productItem().should('have.length', 4);

        cy.get('div.product-thumb-top > div.image').eq(1).should('be.visible');
        cy.get('div.product-thumb-top > div.image').eq(1)
            .realHover()
            .then(() => {
                cy.get('div.product-action > button.btn.btn-cart.cart-55').should('be.visible');
                cy.get('div.product-action > button.btn.btn-cart.cart-55')
                    .click({ force: true });
            });
        cy.contains('a', 'Checkout').click({ force: true });
        cy.url().should('include', '/index.php?route=checkout/checkout');

        cy.fixture('user').then(user => {
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
        cy.url().should('include', '/checkout/confirm');
        cy.contains('table > tfoot > tr:nth-child(5) > td:nth-child(2)', /[$]\d+\.\d{2}$/);
        cy.get('#button-confirm').should('be.visible').contains('Confirm Order ').click();
        cy.url().should('include', '/success');
        cy.get('.buttons > .btn').contains('Continue').click();
        cy.url().should('include', '/home');
    });
});