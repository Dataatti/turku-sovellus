import { GetServerSideProps } from 'next';

/*
  This page is purely for redirecting to home page.
  strapi-plugin-preview-button plugin doesn't support "View live page" links without /[id] ending
  Since Ulkoinen linkki is only rendered on the home page, this is to prevent showing 404 if navigated from Strapi  
*/

const UlkoinenLinkki = () => <div />;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      permanent: true,
      destination: '/',
    },
  };
};

export default UlkoinenLinkki;
