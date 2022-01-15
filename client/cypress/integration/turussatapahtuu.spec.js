describe('turussatapahtuu', () => {
  it('should load Turussa tapahtuu page with data', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://linkedevents-api.turku.fi/v1/**',
    }).as('eventsData');
    cy.visit('/turussatapahtuu');
    cy.wait('@eventsData');
    cy.get('[data-testid=top-bar] h1').should('have.text', 'Turussa tapahtuu');
    cy.get('[data-testid="item-card"]').should('have.length.greaterThan', 0);
  });
});
