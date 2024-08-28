import homePage from "../pages/homePage";
import productPage from "../pages/productPage";

describe('Product Page tests', () => {
    beforeEach(() => {
        homePage.visitHome();
    });
    it('should search for a phone and purchase it', () => {
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/');
        homePage.elements.searchBar().should('be.visible');
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
            cy.fillPaymentForm(user);
        });
        cy.url().should('include', '/checkout/confirm');
        cy.contains('table > tfoot > tr:nth-child(5) > td:nth-child(2)', /[$]\d+\.\d{2}$/);
        cy.get('#button-confirm').should('be.visible').contains('Confirm Order ').click();
        cy.url().should('include', '/success');
        cy.get('.buttons > .btn').contains('Continue').click();
        cy.url().should('include', '/home');
    });
});