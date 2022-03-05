import NostotCard from 'components/nostot/NostotCard';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import strapiClient from 'functions/strapi-client';
import PreviewAlert from 'components/PreviewAlert';
import { Titles } from 'enums/titles';

const Nostot = ({
  locale,
  preview = false,
  title,
  nostot,
}: {
  locale: Lang;
  preview?: boolean;
  title: string;
  nostot: Nosto[];
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>

      <main>
        {nostot?.map((nosto) => (
          <NostotCard nosto={nosto} locale={locale} key={nosto.id} />
        ))}
        {preview && <PreviewAlert />}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, preview } = context;

  try {
    const nostotData = (await strapiClient.nostot.list(locale || 'fi', preview)) as any;
    const title = (await strapiClient.titles.get(Titles.Kerrokantasi, locale || 'fi')) as any;
    return {
      props: {
        locale: locale,
        preview: preview || null,
        nostot: nostotData?.data?.data || [],
        title: title?.data?.data || 'Nostot',
      },
    };
  } catch (err) {
    // Fallback if Strapi is down
    return {
      props: {
        locale: 'fi',
        preview: preview || null,
        nostot: [],
        title: 'Nostot',
      },
    };
  }
};

export default Nostot;
