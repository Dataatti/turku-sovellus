describe('index', () => {
  it('should load the index page', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://kerrokantasi-api.turku.fi/**',
    }).as('kerrokantasiData');

    cy.intercept({
      method: 'GET',
      url: 'https://api.turku.fi/linkedevents/v1/**',
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

    cy.get('[data-testid=top-bar] h1').should('have.text', '');
    cy.get('[data-testid=top-bar] [alt="Turku logo"]').should('be.visible');
  });

  it('should change content language', () => {
    cy.visit('/');
    cy.get('[data-testid=language-select]').click();
    cy.get('[data-value="en"]').click();
    cy.url().should('include', '/en');
    // TODO: Check content language
    cy.get('[data-testid=language-select]').click();
    cy.get('[data-value="sv"]').click();
    cy.url().should('include', '/sv');
    // TODO: Check content language
  });
});
