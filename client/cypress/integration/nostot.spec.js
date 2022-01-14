describe('nostot', () => {
  it('should load the nostot page', () => {
    cy.fixture('fixtureStubData').then(({nostot}) => {
      cy.intercept(
        Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/nostot?populate=header_image&locale=fi',
        {
          body: nostot,
        }
      );
    });
    cy.visit('/nostot');

    cy.get('[data-testid=top-bar] h1').should('have.text', 'Nostot');
    cy.get('[data-testid="item-card"]').should('have.length', 2);
  });
});
