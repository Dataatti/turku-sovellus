describe('liikennetiedotteet', () => {
  it('should load the liikennetiedotteet page', () => {
    cy.visit('/liikennetiedotteet');
    cy.contains('h2', 'Welcome to Liikennetiedotteet!');
    cy.get('[data-testid=top-bar] h1').should('have.text', 'Liikennetiedotteet');
  });
});
