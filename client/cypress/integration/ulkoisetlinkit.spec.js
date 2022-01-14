describe('ulkoisetlinkit', () => {
  it('should load ulkoiset linkit to frontpage', () => {
    cy.fixture('fixtureStubData').then(({ulkoisetLinkit}) => {
      cy.intercept(
        Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/ulkoinen-linkkis?locale=fi',
        {
          body: ulkoisetLinkit,
        }
      );
    });

    cy.fixture('fixtureStubData').then(({ headers }) => {
      cy.intercept(
        Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/headers?locale=fi',
        {
          body: headers,
        }
      );
    });

    cy.fixture('fixtureStubData').then(({ nostot }) => {
      cy.intercept(
        Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/nostot?populate=header_image&locale=fi',
        {
          body: nostot,
        }
      );
    });

    cy.visit('/');
    cy.get('[data-testid="ulkoinen-linkki"]').should('have.length', 3);
    cy.get('[data-testid="nostot-widget"]').find('li').should('have.length', 2);
  });
});
