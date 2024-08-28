class productPage {
    elements = {
        productItem: () => cy.get('div > div.carousel-item.active'),
        productCard: () => cy.get('div.product-thumb-top > div.image').eq(1),
        cartHoverIcon: () => cy.get('button[title="Add to Cart"]').eq(1),
        confirmOrderBtn: () => cy.get('#button-confirm'),
        continueShoppingBtn: () => cy.get('.buttons > .btn'),
    };
    formElements = {
        firstName: () => cy.get('#input-payment-firstname'),
        lastName: () => cy.get('#input-payment-lastname'),
        email: () => cy.get('#input-payment-email'),
        telephone: () => cy.get('#input-payment-telephone'),
        password: () => cy.get('#input-payment-password'),
        confirmPassword: () => cy.get('#input-payment-confirm'),
        company: () => cy.get('#input-payment-company'),
        address1: () => cy.get('#input-payment-address-1'),
        address2: () => cy.get('#input-payment-address-2'),
        city: () => cy.get('#input-payment-city'),
        postcode: () => cy.get('#input-payment-postcode'),
        comment: () =>cy.get('#input-comment'),
        subscribeCheckBox: () => cy.get('label[for="input-newsletter"]'),
        privacyCheckBox: () => cy.get('label[for="input-account-agree"]'),
        conditionCheckBox: () => cy.get('label[for="input-agree"]'),
        continueBtn: () => cy.get('button[id="button-save"]')
    };
    fillRegistrationForm() {
        cy.fixture('user').then(user => {
            this.formElements.firstName().should('be.visible').type(user.firstName);
            this.formElements.lastName().should('be.visible').type(user.lastName);
            this.formElements.email().should('be.visible').type(user.emailAddress);
            this.formElements.telephone().should('be.visible').type(user.telephone);
            this.formElements.password().should('be.visible').type(user.passWord);
            this.formElements.confirmPassword().should('be.visible').type(user.conFirm);
            this.formElements.company().should('be.visible').type(user.company);
            this.formElements.address1().should('be.visible').type(user.address1);
            this.formElements.address2().should('be.visible').type(user.address2);
            this.formElements.city().should('be.visible').type(user.city);
            this.formElements.postcode().should('be.visible').type(user.postcode);
            this.formElements.comment().scrollIntoView().should('be.visible').type(user.comment);

            this.formElements.subscribeCheckBox()
                .should('contain', 'I wish to subscribe to the Your Store newsletter.')
                .click();
            this.formElements.privacyCheckBox()
                .should('contain', 'I have read and agree to the ')
                .click();
            this.formElements.conditionCheckBox().should('be.visible').click();
            this.formElements.continueBtn().should('be.visible').click();
        });
    }
}

export default new productPage();