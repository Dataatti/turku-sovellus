/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IframeLink from 'components/LiikenneTiedotteet/IframeLink';
import strapiClient from 'functions/strapi-client';
import { useTitle } from 'hooks/useTitles';
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { dehydrate, QueryClient } from 'react-query';

const Liikennetiedotteet = ({ locale }: { locale: Lang }) => {
  const { data: title } = useTitle('Liikennetiedotteet');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main
        css={css`
          margin-top: 12px;
        `}
      >
        <IframeLink locale={locale} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();

  const { locale } = context;
  await queryClient.prefetchQuery(
    ['getTitle', 'liikennetiedotteet'],
    strapiClient.titles.get('liikennetiedotteet', locale || 'fi') as any
  );

  return {
    props: {
      locale: locale,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Liikennetiedotteet;
