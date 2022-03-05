describe('nostot', () => {
  it('should load the nostot page', () => {
    let nostotData;
    let titleData;
    cy.fixture('fixtureStubData').then(({ nostot }) => {
      nostotData = nostot;
    });

    cy.fixture('fixtureStubData').then(({ headers }) => {
      titleData = headers.data.find((n) => n.attributes.type === 'nostot')?.attributes?.text;
    });

    cy.visit('/nostot', {
      // https://glebbahmutov.com/blog/control-nextjs-data-during-tests/
      onBeforeLoad: (win) => {
        let nextData;

        Object.defineProperty(win, '__NEXT_DATA__', {
          set(o) {
            console.log('setting __NEXT_DATA__', o);
            // here is our change to modify the injected parsed data to server side rendered data
            o.props.pageProps.nostot = nostotData?.data;
            o.props.pageProps.title = titleData;
            nextData = o;
          },
          get() {
            return nextData;
          },
        });
      },
    });

    cy.title().should('eq', 'Nostot-sivu');
    cy.get('[data-testid="item-card"]').should('have.length', 2);
  });
});
