describe('ulkoisetlinkit', () => {
  it('should load ulkoiset linkit to frontpage', () => {
    cy.fixture('fixtureStubData').then(({ ulkoisetLinkit }) => {
      cy.intercept(Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/ulkoiset-linkit?locale=fi', {
        status: 200,
        body: ulkoisetLinkit,
      });
    });

    cy.fixture('fixtureStubData').then(({ headers }) => {
      cy.intercept(Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/headers?locale=fi', {
        status: 200,
        body: headers,
      });
    });

    cy.visit('/');
    cy.get('[data-testid="ulkoinen-linkki"]').should('have.length', 3);
  });
});
