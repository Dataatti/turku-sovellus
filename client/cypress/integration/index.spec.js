describe('index', () => {
  it('should load the index page', () => {
    cy.visit('/');
    cy.contains('h2', 'Welcome to Turku-Sovellus!');
    cy.get('[data-testid=top-bar] h1').should('have.text', '');
    cy.get('[data-testid=top-bar] [alt="Turku logo"]').should('be.visible');
  });

  it('should change content language', () => {
    cy.visit('/');
    cy.get('[data-testid=language-select]').click();
    cy.get('[data-value="en"]').click();
    cy.url().should('include', '/en');
    // TODO: Check content language
    cy.get('[data-testid=language-select]').click();
    cy.get('[data-value="sv"]').click();
    cy.url().should('include', '/sv');
    // TODO: Check content language
  });
});
