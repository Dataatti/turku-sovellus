describe('index', () => {
  it('should load the index page', () => {
    cy.visit('/');
    cy.contains('h2', 'Welcome to Turku-Sovellus!');
    cy.get('[data-testid=top-bar] h1').should('have.text', '');
    cy.get('[data-testid=top-bar] [alt="Turku logo"]').should('be.visible');
  });
});
