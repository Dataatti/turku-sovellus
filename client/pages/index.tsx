import Head from 'next/head';
import type { GetStaticProps } from 'next';
import KerroKantasiWidget from 'components/kerrokantasi/KerroKantasiWidget';
import TurussaTapahtuuWidget from 'components/turussatapahtuu/TurussaTapahtuuWidget';
import LiikenneTiedotteetWidget from 'components/LiikenneTiedotteet/LiikenneTiedotteetWidget';
import TiedotteetWidget from 'components/tiedotteet/TiedotteetWidget';
import UlkoisetLinkitWidget from 'components/UlkoisetLinkit/UlkoisetLinkitWidget';
import { Grid } from '@mui/material';

import { listTitles, useTitles } from 'hooks/useTitles';
import { NostotWidget } from 'components/nostot/NostotWidget';
import { Titles } from 'enums/titles';

const Home = ({ locale, initialTitles }: { locale: Lang; initialTitles: any }) => {
  const { data: titles } = useTitles(initialTitles);

  const sovellus = titles?.data?.data?.find((el) => el.attributes.type === Titles.Sovellus);
  const turussaTapahtuu = titles?.data?.data?.find(
    (el) => el.attributes.type === Titles.Tapahtumat
  );
  const kerrokantasi = titles?.data?.data?.find((el) => el.attributes.type === Titles.Kerrokantasi);
  const nostot = titles?.data?.data?.find((el) => el.attributes.type === Titles.Nostot);
  const tiedotteet = titles?.data?.data?.find((el) => el.attributes.type === Titles.Tiedotteet);
  const liikennetiedotteet = titles?.data?.data?.find(
    (el) => el.attributes.type === Titles.Liikennetiedotteet
  );

  const metaDescription = {
    fi: 'Turun kaupungin virallinen sovellus',
    sv: 'Officiell app för staden Åbo',
    en: 'The official app for the city of Turku',
  };

  return (
    <div>
      <Head>
        <title>{sovellus || 'Turku-sovellus'}</title>
        <meta name="description" content={metaDescription[locale]} />
      </Head>

      <main>
        <Grid
          container
          sx={{ marginBottom: '16px' }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          rowSpacing={2}
        >
          <Grid item md={6} xs={12}>
            <NostotWidget title={nostot?.attributes?.text || 'Nostot'} />
          </Grid>
          <Grid item md={6} xs={12}>
            <UlkoisetLinkitWidget />
          </Grid>
          <Grid item md={6} xs={12}>
            <TurussaTapahtuuWidget
              locale={locale}
              title={turussaTapahtuu?.attributes?.text || 'Turussa tapahtuu'}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TiedotteetWidget
              locale={locale}
              title={tiedotteet?.attributes?.text || 'Tiedotteet'}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <KerroKantasiWidget
              locale={locale}
              title={kerrokantasi?.attributes?.text || 'Kerrokantasi'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LiikenneTiedotteetWidget
              locale={locale}
              title={liikennetiedotteet?.attributes?.text || 'Liikennetiedotteet'}
            />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  let titles;
  try {
    titles = await listTitles(locale || 'fi');
  } catch (err) {
    // ignore
  }

  return {
    props: {
      locale: locale,
      initialTitltes: titles?.data,
    },
  };
};

export default Home;
