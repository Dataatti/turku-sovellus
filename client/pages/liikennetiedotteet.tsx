import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Liikennetiedotteet = ({ locale }: { locale: Lang }) => {

  useEffect(() => {
    window.twttr.widgets.load();
  }, [])

  return (
    <div>
      <Head>
        <title>Liikennetiedotteet</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <a className="twitter-timeline" data-lang={locale} data-theme="light" href="https://twitter.com/Turunliikenne?ref_src=twsrc%5Etfw">Tweets by Turunliikenne</a>
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

export default Liikennetiedotteet;
