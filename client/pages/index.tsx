import Head from 'next/head';
import type { GetServerSideProps } from 'next';
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
        <title>{sovellus?.attributes?.text || 'Turku-sovellus'}</title>
        <meta name="description" content={metaDescription[locale]} />
      </Head>

      <main>
        <Grid
          container
          direction="row"
          sx={{ marginBottom: '16px' }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item md={6} xs={12}>
            <Grid container direction="column">
              <Grid item>
                <NostotWidget title={nostotTitle?.attributes?.text || 'Nostot'} nostot={nostot} />
              </Grid>
              <Grid item>
                <UlkoisetLinkitWidget ulkoisetLinkit={ulkoisetLinkit} />
              </Grid>
              <Grid item>
                <TurussaTapahtuuWidget
                  locale={locale}
                  title={turussaTapahtuu?.attributes?.text || 'Turussa tapahtuu'}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container direction="column">
              <Grid item>
                <TiedotteetWidget
                  locale={locale}
                  title={tiedotteet?.attributes?.text || 'Tiedotteet'}
                />
              </Grid>
              <Grid item>
                <KerroKantasiWidget
                  locale={locale}
                  title={kerrokantasi?.attributes?.text || 'Kerrokantasi'}
                />
              </Grid>
              <Grid item>
                <LiikenneTiedotteetWidget
                  locale={locale}
                  title={liikennetiedotteet?.attributes?.text || 'Liikennetiedotteet'}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {preview && <PreviewAlert />}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, preview } = context;

  try {
    const [ulkoisetLinkitData, titlesData, nostotData] = await Promise.all([
      await strapiClient.ulkoisetLinkit.list(locale || 'fi', preview),
      await strapiClient.titles.list(locale || 'fi'),
      await strapiClient.nostot.list(locale || 'fi', preview),
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
        locale: locale,
        preview: preview || null,
        ulkoisetLinkit: [],
        titles: [],
        nostot: [],
      },
    };
  }
};

export default Home;
