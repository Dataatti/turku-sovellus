/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import IframeLink from 'components/LiikenneTiedotteet/IframeLink';
import { Titles } from 'enums/titles';
import strapiClient from 'functions/strapi-client';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';

const Liikennetiedotteet = ({ locale, title }: { locale: Lang; title: string }) => {
  return (
    <div>
      <Head>
        <title>{title || 'Liikennetiedotteet'}</title>
      </Head>

      <main
        css={css`
          margin-top: 12px;
        `}
      >
        <IframeLink locale={locale} initialOptions={{ lang: locale }} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;

  try {
    const title = (await strapiClient.titles.get(Titles.Liikennetiedotteet, locale || 'fi')) as any;
    return {
      props: {
        locale: locale,
        title: title?.data?.data?.[0]?.attributes?.text || 'Liikennetiedotteet',
      },
    };
  } catch (err) {
    // Fallback if Strapi is down
    return {
      props: {
        locale: locale,
        title: 'Liikennetiedotteet',
      },
    };
  }
};

export default Liikennetiedotteet;
