const headerBody = {
  data: [
    {
      id: 1,
      attributes: {
        text: 'Turussa tapahtuu',
        type: 'tapahtumat',
        createdAt: '2022-01-12T16:50:17.140Z',
        updatedAt: '2022-01-12T16:54:50.403Z',
        publishedAt: '2022-01-12T16:54:50.400Z',
        locale: 'fi',
      },
    },
    {
      id: 4,
      attributes: {
        text: 'Tiedotteet',
        type: 'tiedotteet',
        createdAt: '2022-01-12T17:01:08.089Z',
        updatedAt: '2022-01-12T18:19:55.950Z',
        publishedAt: '2022-01-12T18:19:55.946Z',
        locale: 'fi',
      },
    },
    {
      id: 7,
      attributes: {
        text: 'Liikennetiedotteet',
        type: 'liikennetiedotteet',
        createdAt: '2022-01-12T18:20:08.004Z',
        updatedAt: '2022-01-12T18:20:09.173Z',
        publishedAt: '2022-01-12T18:20:09.170Z',
        locale: 'fi',
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
};
const ulkoisetLinkitBody = {
  data: [
    {
      id: 1,
      attributes: {
        createdAt: '2022-01-12T17:22:23.104Z',
        updatedAt: '2022-01-12T17:38:09.735Z',
        publishedAt: '2022-01-12T17:23:06.916Z',
        locale: 'fi',
        Title: 'Aluevaalien äänestyspaikat',
        Description: 'Aluevaalien äänestyspaikat Turussa',
        Url: 'https://tulospalvelu.vaalit.fi/AV-2022/fi/kupaik_853.html',
        LinkText: 'Lue lisää',
        Color: 'primary',
      },
    },
    {
      id: 3,
      attributes: {
        createdAt: '2022-01-12T17:56:27.638Z',
        updatedAt: '2022-01-12T17:56:28.730Z',
        publishedAt: '2022-01-12T17:56:28.727Z',
        locale: 'fi',
        Title: 'Testi',
        Description: 'Aluevaalien äänestyspaikat Turussa',
        Url: 'https://tulospalvelu.vaalit.fi/AV-2022/fi/kupaik_853.html',
        LinkText: 'Siirry palveluun',
        Color: 'secondary',
      },
    },
    {
      id: 4,
      attributes: {
        createdAt: '2022-01-12T17:57:46.160Z',
        updatedAt: '2022-01-12T17:57:46.770Z',
        publishedAt: '2022-01-12T17:57:46.766Z',
        locale: 'fi',
        Title: 'Lisää testiä testiä ',
        Description:
          ' Places to vote in Turku Places to vote in Turku Places to vote in Turku Places to vote in Turku',
        Url: 'https://tulospalvelu.vaalit.fi/AV-2022/fi/kupaik_853.html',
        LinkText: 'Read more',
        Color: 'primary',
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 3 } },
};

const nostotBody = {
  data: [],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 0, total: 0 } },
};

describe('ulkoisetlinkit', () => {
  it('should load ulkoiset linkit to frontpage', () => {
    // TODO: Should be replaced with env variables in the future, currently working locally
    cy.intercept(Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/ulkoinen-linkkis?locale=fi', {
      body: ulkoisetLinkitBody,
    });
    cy.intercept(Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/headers?locale=fi', {
      body: headerBody,
    });
    cy.intercept(
      Cypress.env('NEXT_PUBLIC_STRAPI_URL') + '/api/nostot?populate=header_image&locale=fi',
      {
        body: nostotBody,
      }
    );

    cy.visit('/');
    cy.get('[data-testid="ulkoinen-linkki"]').should('have.length', 3);
  });
});
