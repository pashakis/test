describe('SauceDemo Cart & Checkout Tests', function () {
  beforeEach(function () {
    cy.fixture('data').then((data) => {
      cy.login(data.users.standard_user, data.users.password);
      this.data = data;
    });
  });

  it('C1 - Add 1 item to cart', function () {
    cy.addToCart(this.data.products.bolt_tshirt);
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('contain.text', this.data.products.bolt_tshirt);
  });

  it('C2 - Remove item from cart', function () {
    cy.addToCart(this.data.products.bolt_tshirt);
    cy.get('.shopping_cart_link').click();
    cy.removeFromCart(this.data.products.bolt_tshirt);
    cy.get('.cart_item').should('not.exist');
  });

  it('C3 - Successful checkout', function () {
    cy.addToCart(this.data.products.bolt_tshirt);
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(this.data.checkout.firstName);
    cy.get('[data-test="lastName"]').type(this.data.checkout.lastName);
    cy.get('[data-test="postalCode"]').type(this.data.checkout.postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.url().should('include', '/checkout-complete.html');
    cy.contains('Thank you for your order!').should('be.visible');
  });

  it('C4 - Checkout with missing info', function () {
    cy.addToCart(this.data.products.bolt_tshirt);
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="lastName"]').type(this.data.checkout.lastName);
    cy.get('[data-test="postalCode"]').type(this.data.checkout.postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="error"]').should('contain.text', 'Error: First Name is required');
  });
});
