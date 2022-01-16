import TiedotteetCard from 'components/tiedotteet/TiedotteetCard';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import useTiedotteet from 'hooks/useTiedotteet';
import { useTitle } from 'hooks/useTitles';
import { Titles } from 'enums/titles';
import { dehydrate, QueryClient } from 'react-query';
import strapiClient from 'functions/strapi-client';

const Tiedotteet = ({ locale }: { locale: Lang }) => {
  const { data: title } = useTitle(Titles.Tiedotteet);
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(
    ['getTitle', Titles.Tiedotteet],
    () => strapiClient.titles.get(Titles.Tiedotteet, locale || 'fi') as any
  );
  return {
    props: {
      locale: locale || 'fi',
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Tiedotteet;
