describe('turussatapahtuu', () => {
  it('should load Turussa tapahtuu page with data', () => {
    let titleData;
    cy.fixture('fixtureStubData').then(({ headers }) => {
      titleData = headers.data.find((n) => n.attributes.type === 'tapahtumat')?.attributes?.text;

      cy.intercept({
        method: 'GET',
        url: 'https://linkedevents-api.turku.fi/v1/**',
      }).as('eventsData');

      cy.visit('/turussatapahtuu', {
        // https://glebbahmutov.com/blog/control-nextjs-data-during-tests/
        onBeforeLoad: (win) => {
          let nextData;

          Object.defineProperty(win, '__NEXT_DATA__', {
            set(o) {
              console.log('setting __NEXT_DATA__', o);
              // here is our change to modify the injected parsed data to server side rendered data
              o.props.pageProps.title = titleData;
              nextData = o;
            },
            get() {
              return nextData;
            },
          });
        },
      });

      cy.wait('@eventsData');
      cy.title().should('eq', 'Turussa tapahtuu -sivu');
      cy.get('[data-testid="item-card"]').should('have.length.greaterThan', 0);
    });
  });
});
