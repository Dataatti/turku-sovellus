import TurussaTapahtuuCard from 'components/turussatapahtuu/TurussaTapahtuuCard';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import useTurkuEvents from 'hooks/useTurkuEvents';
import { useTitle } from 'hooks/useTitles';
import { Titles } from 'enums/titles';

const TurussaTapahtuu = ({ locale }: { locale: Lang }) => {
  const { data: title } = useTitle(Titles.Tapahtumat);
  const { isLoading, data } = useTurkuEvents();

  // Filter events if there is no translations for current locale
  return (
    <div>
      <Head>
        <title>{title || "Turussa tapahtuu"}</title>
        <meta name="description" content="Turun kaupungissa järjestettäviä tapahtumia" />
      </Head>

      <main>
        {!isLoading &&
          data &&
          data
            .filter((n) => n.name[locale])
            ?.map((event, i) => <TurussaTapahtuuCard event={event} locale={locale} key={i} />)}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      locale: locale || 'fi',
    },
  };
};

export default TurussaTapahtuu;
