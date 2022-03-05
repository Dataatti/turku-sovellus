import TiedotteetCard from 'components/tiedotteet/TiedotteetCard';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import useTiedotteet from 'hooks/useTiedotteet';
import { Titles } from 'enums/titles';
import strapiClient from 'functions/strapi-client';

const Tiedotteet = ({ locale, title }: { locale: Lang; title: string }) => {
  // Pass locale to useTiedotteet to fetch from correct source
  const { isLoading, data } = useTiedotteet(locale);

  return (
    <div>
      <Head>
        <title>{title || 'Tiedotteet'}</title>
        <meta name="description" content="Turun kaupungin tiedotteet" />
      </Head>

      <main>
        {!isLoading &&
          data &&
          data?.map((news, i) => <TiedotteetCard news={news} locale={locale} key={i} />)}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  try {
    const title = (await strapiClient.titles.get(Titles.Tiedotteet, locale || 'fi')) as any;
    return {
      props: {
        locale: locale,
        title: title?.data?.data?.[0]?.attributes?.text || 'Tiedotteet',
      },
    };
  } catch (err) {
    // Fallback if Strapi is down
    return {
      props: {
        locale: 'fi',
        title: 'Tiedotteet',
      },
    };
  }
};

export default Tiedotteet;
