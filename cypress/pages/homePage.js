class HomePage {
    elements = {
        appLogo: () => cy.get('a[title="Poco Electro"]'),
        searchBar: () => cy.get('input[placeholder="Search For Products"]').eq(0),
        searchForm:() => cy.get('input[placeholder="Search For Products"]'),
        searchButton: () => cy.get('button[type="submit"]'),
        compareIcon: () => cy.roleByLabel('Compare'),
        wishListIcon: () => cy.roleByLabel('Wishlist'),
        cartIcon: () => cy.iconByControl('cart-total-drawer'),
        catergoryLink: () => cy.roleByLabel('Shop by Category'),
        homeLink: () => cy.get('span.title').contains('Home'),
        specialProductLink: () => cy.get('span.title').contains('Special'),
        blogLink: () => cy.get('span.title').contains('Blog'),
        megaMenuLink: () => cy.get('span.title').contains('Mega Menu'),
        addOnsLink: () => cy.get('span.title').contains('AddOns'),
        accountLink: () => cy.get('span.title').contains('My account'),
    }
    visitHome() {
        cy.visit("/");
    }
}

export default new HomePage();