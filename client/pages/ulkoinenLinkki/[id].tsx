import { GetServerSideProps } from 'next';

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
