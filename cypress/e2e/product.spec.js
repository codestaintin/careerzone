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

        productPage.elements.productCard().should('be.visible');
        productPage.elements.productCard()
            .realHover()
            .then(() => {
                productPage.elements.cartHoverIcon().should('be.visible');
                productPage.elements.cartHoverIcon().click({ force: true });
            });
        cy.contains('a', 'Checkout').click({ force: true });
        cy.url().should('include', '/index.php?route=checkout/checkout');

        productPage.fillRegistrationForm();
        cy.url().should('include', '/checkout/confirm');
        cy.contains('tfoot > tr:nth-child(5) > td:nth-child(2)', /[$]\d+\.\d{2}$/);
        productPage.elements.confirmOrderBtn().should('be.visible').contains('Confirm Order ').click();
        cy.url().should('include', '/success');
        productPage.elements.continueShoppingBtn().contains('Continue').click();
        cy.url().should('include', '/home');
    });
});