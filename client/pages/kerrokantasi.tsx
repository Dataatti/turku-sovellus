import KerroKantasiCard from 'components/kerrokantasi/KerroKantasiCard';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import useKerroKantasi from 'hooks/useKerroKantasi';
import { Titles } from 'enums/titles';
import strapiClient from 'functions/strapi-client';

const Kerrokantasi = ({ locale, title }: { locale: Lang; title: string }) => {
  const { isLoading, data } = useKerroKantasi();

  return (
    <div>
      <Head>
        <title>{title || 'Kerrokantasi'}</title>
      </Head>

      <main>
        {!isLoading &&
          data &&
          data?.map((hearing) => (
            <KerroKantasiCard hearing={hearing} locale={locale} key={hearing.id} />
          ))}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  try {
    const title = (await strapiClient.titles.get(Titles.Kerrokantasi, locale || 'fi')) as any;
    return {
      props: {
        locale: locale,
        title: title?.data?.data?.[0]?.attributes?.text || 'Kerrokantasi',
      },
    };
  } catch (err) {
    // Fallback if Strapi is down
    return {
      props: {
        locale: 'fi',
        title: 'Kerrokantasi',
      },
    };
  }
};

export default Kerrokantasi;
