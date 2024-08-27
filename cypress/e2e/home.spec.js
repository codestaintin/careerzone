import homePage from "../pages/homePage";

describe('Home Page tests', () => {
    beforeEach(() => {
        homePage.visitHome();
    });
    it('should visit the home page', () => {
        cy.url().should('eq', 'https://ecommerce-playground.lambdatest.io/');
    });

    it('should assert that header elements exists', () => {
        homePage.elements.appLogo().should('be.visible');
        homePage.elements.searchBar().should('be.visible');
        homePage.elements.searchBar().should('be.visible');
        homePage.elements.searchButton().should('be.visible');
        homePage.elements.compareIcon().should('be.visible');
        homePage.elements.wishListIcon().should('be.visible');
        homePage.elements.cartIcon().should('be.visible');
    });

    it('should assert that navigation links exists', () => {
        homePage.elements.catergoryLink().should('be.visible');
        homePage.elements.homeLink().should('exist');
        homePage.elements.specialProductLink().should('exist');
        homePage.elements.catergoryLink().should('exist');
        homePage.elements.blogLink().should('exist');
        homePage.elements.megaMenuLink().should('exist');
        homePage.elements.accountLink().should('exist');
    });
});