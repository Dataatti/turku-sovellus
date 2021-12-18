import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ListWidget from 'components/ListWidget';

import strapiClient from 'functions/strapi-client';

interface HomeProps {
  titles: StrapiResponse<Title[]>;
  error: string;
}

const Home: NextPage<HomeProps> = ({ titles, error }) => {
  const nostot = titles?.data?.find((el) => el);
  return (
    <div>
      <Head>
        <title>Turku-Sovellus</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <h2>Welcome to Turku-Sovellus!</h2>

        <ListWidget
          title={nostot?.attributes?.text || ''}
          readMoreText="Lue lisää"
          readMoreHref="https://google.com"
          variant="primary"
        />

        <div>
          <Link href="/liikennetiedotteet" passHref>
            <a>
              <h3>Liikennetiedotteet &rarr;</h3>
            </a>
          </Link>

          <a href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  try {
    const { data } = await strapiClient.titles.get('nostot', locale || 'fi');

    return {
      props: {
        titles: data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        titles: {},
        error: JSON.stringify(err),
      },
    };
  }
};
export default Home;
