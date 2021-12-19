describe('liikennetiedotteet', () => {
  it('should load the liikennetiedotteet page', () => {
    cy.visit('/liikennetiedotteet');
    cy.get('[data-testid=top-bar] h1').should('have.text', 'Liikennetiedotteet');
    cy.get('iframe[data-widget-id="profile:Turunliikenne"]').should('be.visible');
  });
});
