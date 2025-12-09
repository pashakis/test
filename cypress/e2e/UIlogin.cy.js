describe('SauceDemo Login Tests', function () {

  beforeEach(function () {
    cy.fixture('data').as('data');
  });

  it('L1 - Successful login', function () {
    cy.login(this.data.users.standard_user, this.data.users.password);
    cy.url().should('include', '/inventory.html');
  });

  it('L2 - Locked-out user', function () {
    cy.login(this.data.users.locked_out_user, this.data.users.password);
    cy.get('[data-test="error"]').should('contain.text', 'locked out');
  });

  it('L3 - Invalid password', function () {
    cy.login(this.data.users.standard_user, 'wrong_password');
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match');
  });

  it('L4 - Empty credentials', function () {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('contain.text', 'Username is required');
  });
});

