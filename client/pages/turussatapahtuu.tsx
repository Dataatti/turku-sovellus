import TurussaTapahtuuCard from 'components/turussatapahtuu/TurussaTapahtuuCard';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import useTurkuEvents from 'hooks/useTurkuEvents';
import { Titles } from 'enums/titles';
import strapiClient from 'functions/strapi-client';

const TurussaTapahtuu = ({ locale, title }: { locale: Lang; title: string }) => {
  const { isLoading, data } = useTurkuEvents();

  // Filter events if there is no translations for current locale
  return (
    <div>
      <Head>
        <title>{title || 'Turussa tapahtuu'}</title>
        <meta name="description" content="Turun kaupungissa järjestettäviä tapahtumia" />
      </Head>

      <main>
        {!isLoading &&
          data &&
          data
            ?.filter((n) => n.name[locale])
            ?.map((event, i) => <TurussaTapahtuuCard event={event} locale={locale} key={i} />)}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  try {
    const title = (await strapiClient.titles.get(Titles.Tapahtumat, locale || 'fi')) as any;

    return {
      props: {
        locale: locale,
        title: title?.data?.data?.[0]?.attributes?.text || 'Turussa tapahtuu',
      },
    };
  } catch (err) {
    // Fallback if Strapi is down
    return {
      props: {
        locale: 'fi',
        title: 'Turussa tapahtuu',
      },
    };
  }
};

export default TurussaTapahtuu;
