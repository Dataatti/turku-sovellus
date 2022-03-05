import Head from 'next/head';
import type { GetStaticProps } from 'next';
import KerroKantasiWidget from 'components/kerrokantasi/KerroKantasiWidget';
import TurussaTapahtuuWidget from 'components/turussatapahtuu/TurussaTapahtuuWidget';
import LiikenneTiedotteetWidget from 'components/LiikenneTiedotteet/LiikenneTiedotteetWidget';
import TiedotteetWidget from 'components/tiedotteet/TiedotteetWidget';
import UlkoisetLinkitWidget from 'components/UlkoisetLinkit/UlkoisetLinkitWidget';
import { Grid } from '@mui/material';
import PreviewAlert from 'components/PreviewAlert';

import strapiClient from 'functions/strapi-client';
import { NostotWidget } from 'components/nostot/NostotWidget';
import { Titles } from 'enums/titles';

const Home = ({
  locale,
  ulkoisetLinkit,
  nostot,
  titles,
  preview = false,
}: {
  locale: Lang;
  ulkoisetLinkit: UlkoinenLinkki[];
  nostot: Nosto[];
  titles: Title[];
  preview: boolean;
}) => {
  const sovellus = titles?.find((el) => el.attributes.type === Titles.Sovellus);
  const turussaTapahtuu = titles?.find((el) => el.attributes.type === Titles.Tapahtumat);
  const kerrokantasi = titles?.find((el) => el.attributes.type === Titles.Kerrokantasi);
  const nostotTitle = titles?.find((el) => el.attributes.type === Titles.Nostot);
  const tiedotteet = titles?.find((el) => el.attributes.type === Titles.Tiedotteet);
  const liikennetiedotteet = titles?.find((el) => el.attributes.type === Titles.Liikennetiedotteet);

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
            <NostotWidget title={nostotTitle?.attributes?.text || 'Nostot'} nostot={nostot} />
          </Grid>
          <Grid item md={6} xs={12}>
            <UlkoisetLinkitWidget ulkoisetLinkit={ulkoisetLinkit} />
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
        {preview && <PreviewAlert />}
      </main>
    </div>
  );
};

export const getServerSideProps: GetStaticProps = async (context) => {
  const { locale, preview } = context;

  try {
    const [ulkoisetLinkitData, titlesData, nostotData] = await Promise.all([
      (await strapiClient.ulkoisetLinkit.list(locale || 'fi', preview)) as any,
      (await strapiClient.titles.list(locale || 'fi')) as any,
      (await strapiClient.nostot.list(locale || 'fi', preview)) as any,
    ]);

    return {
      props: {
        locale: locale,
        preview: preview || null,
        ulkoisetLinkit: ulkoisetLinkitData?.data?.data || [],
        titles: titlesData?.data?.data || [],
        nostot: nostotData?.data?.data || [],
      },
    };
  } catch (err) {
    // Fallback if Strapi is down
    return {
      props: {
        locale: 'fi',
        preview: preview || null,
        ulkoisetLinkit: [],
        titles: [],
        nostot: [],
      },
    };
  }
};

export default Home;
