import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { Grid, Link as MUILink } from '@mui/material';

const langVars404Page = {
  fi: {
    title: '404 - Sivua ei löytynyt',
    button_text: 'Palaa etusivulle',
  },
  sv: {
    title: '404 - Sidan hittas inte',
    button_text: 'Återgå till startsidan',
  },
  en: {
    title: '404 - Page not found',
    button_text: 'Return to home page',
  },
};

const Custom404 = () => {
  const router = useRouter();
  const locale = router.locale as Lang ?? 'fi';
  const { title, button_text } = langVars404Page[locale];

  return (
    <div>
      <Head>
        <title>{title || '404 - Page not found'}</title>
        <meta name="description" content="Turun kaupungin tiedotteet" />
      </Head>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: 'center', height: 'calc(100vh - 80px)' }}
      >
        <Grid item>
          <h1>{title}</h1>
          <Link href="/" passHref>
            <MUILink color="inherit">{button_text}</MUILink>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Custom404;
