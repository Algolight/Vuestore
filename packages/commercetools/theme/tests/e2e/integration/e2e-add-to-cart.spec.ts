import page from '../pages/factory';

before(() => {
  cy.fixture('test-data/e2e-add-to-cart').then((fixture) => {
    cy.fixtures = {
      data: fixture
    };
  });
});

context('Add product to cart', () => {

  it(['regression'], 'Should successfully add product to cart - grid view', function() {
    const data = cy.fixtures.data[this.test.title];
    const category = page.category(data.product.category);
    category.visit();
    category.addToCart(data.product.name);
    category.header.openCart();
    page.components.cart.product(data.product.name).should('be.visible');
  });

  it(['regression'], 'Should successfully add product to cart - list view', function() {
    const data = cy.fixtures.data[this.test.title];
    const category = page.category(data.product.category);
    category.visit();
    category.changeView('list');
    category.addToCart(data.product.name);
    category.header.openCart();
    page.components.cart.product(data.product.name).should('be.visible');
  });

});