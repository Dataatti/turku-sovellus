describe('kerrokantasi', () => {
  it('should load kerrokantasi page with data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://kerrokantasi-api.turku.fi/**',
    }).as('kerrokantasiData');
    cy.visit('/kerrokantasi');
    cy.wait('@kerrokantasiData');
    cy.get('[data-testid=top-bar] h1').should('have.text', 'Kerrokantasi');
    cy.get('[data-testid="item-card"]').should('have.length.greaterThan', 0);
  });
});
