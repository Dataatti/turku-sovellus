describe('tiedotteet', () => {
  it('should load Tiedotteet page with data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.allorigins.win/**',
    }).as('tiedotteet');
    cy.visit('/tiedotteet');
    cy.wait('@tiedotteet');
    cy.get('[data-testid=top-bar] h1').should('have.text', 'Tiedotteet');
    cy.get('[data-testid="item-card"]').should('have.length.greaterThan', 0);
  });
});
