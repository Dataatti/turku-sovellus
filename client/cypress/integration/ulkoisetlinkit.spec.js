describe('ulkoisetlinkit', () => {
  it('should load ulkoiset linkit to frontpage', () => {
    let linkitData;
    let titlesData;
    cy.fixture('fixtureStubData').then(({ ulkoisetLinkit }) => {
      linkitData = ulkoisetLinkit;
    });

    cy.fixture('fixtureStubData').then(({ headers }) => {
      titlesData = headers;
    });

    cy.visit('/', {
      onBeforeLoad: (win) => {
        let nextData;

        Object.defineProperty(win, '__NEXT_DATA__', {
          set(o) {
            console.log('setting __NEXT_DATA__', o);
            // here is our change to modify the injected parsed data
            o.props.pageProps.ulkoisetLinkit = linkitData?.data;
            o.props.pageProps.titles = titlesData?.data;
            nextData = o;
          },
          get() {
            return nextData;
          },
        });
      },
    });
    cy.get('[data-testid="ulkoinen-linkki"]').should('have.length', 3);
  });
});
