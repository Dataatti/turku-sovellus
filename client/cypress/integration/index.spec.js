describe('index', () => {
  it('should load the index page', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://kerrokantasi-api.turku.fi/**',
    }).as('kerrokantasiData');
    cy.intercept({
      method: 'GET',
      url: 'https://linkedevents-api.turku.fi/v1/**',
    }).as('eventsData');

    cy.visit('/');
    cy.wait(['@kerrokantasiData', '@eventsData']);

    cy.get('[data-testid="turussa-tapahtuu-widget"]')
      .find('li')
      .should('have.length.greaterThan', 0);

    cy.get('[data-testid="kerro-kantasi-widget"]').find('li').should('have.length.greaterThan', 0);

    cy.get(
      '[data-testid="liikenne-tiedotteet-widget"] iframe[data-widget-id="profile:Turunliikenne"]'
    ).should('be.visible');

    cy.get('[data-testid=top-bar] [alt="Turku logo"]').should('be.visible');
  });

  it('should change content language', () => {
    cy.visit('/');
    cy.contains('Lue lisää');

    cy.get('[data-testid=language-select]').click();
    cy.get('[data-value="en"]').click();

    cy.url().should('include', '/en');
    cy.contains('Read more');

    cy.get('[data-testid=language-select]').click();
    cy.get('[data-value="sv"]').click();

    cy.url().should('include', '/sv');
    cy.contains('Läs mer');
  });
});
