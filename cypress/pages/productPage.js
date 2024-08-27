class productPage {
    elements = {
        productItem: () => cy.get('div > div.carousel-item.active'),
    }
}

export default new productPage();