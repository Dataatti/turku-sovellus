describe('nostot', () => {
  it('should load the nostot page', () => {
    cy.intercept({
      method: 'GET',
      url: '**/api/nostot?**',
    }).as('nostot');
    cy.visit('/nostot');
    cy.wait('@nostot');

    cy.get('[data-testid=top-bar] h1').should('have.text', 'Nostot');
    cy.get('[data-testid="item-card"]').should('have.length.greaterThan', 0);
  });
});

