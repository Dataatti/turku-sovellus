import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import KerroKantasiWidget from 'components/kerrokantasi/KerroKantasiWidget';
import TurussaTapahtuuWidget from 'components/turussatapahtuu/TurussaTapahtuuWidget';
import LiikenneTiedotteetWidget from 'components/LiikenneTiedotteet/LiikenneTiedotteetWidget';
import TiedotteetWidget from 'components/tiedotteet/TiedotteetWidget';
import UlkoisetLinkitWidget from 'components/UlkoisetLinkit/UlkoisetLinkitWidget';
import { Grid, Link as MuiLink } from '@mui/material';
import PreviewAlert from 'components/PreviewAlert';

import strapiClient from 'functions/strapi-client';
import { NostotWidget } from 'components/nostot/NostotWidget';
import { Titles } from 'enums/titles';
import { accessibilityStatementTranslations } from 'pages/saavutettavuus';

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

  return (
    <div>
      <Head>
        <title>{sovellus?.attributes?.text || 'Turku-sovellus'}</title>
      </Head>

      <main>
        <Grid container direction="row" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
          <Grid item xs sx={{ my: '10px', textAlign: 'center' }}>
            <Link href="/saavutettavuus" passHref>
              <MuiLink>{accessibilityStatementTranslations[locale].title}</MuiLink>
            </Link>
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
