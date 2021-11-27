describe('index', () => {
  it('should load the index page', () => {
    cy.visit('/');
    cy.contains('h1', 'Welcome to Turku-Sovellus!');
  });
});
