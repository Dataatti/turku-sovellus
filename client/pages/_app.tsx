import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import theme from '../theme';

import { TopBar } from '../components/TopBar';
import { Container } from '@mui/material';
import { useState } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: 'css' });
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const metaDescription = {
  fi: 'Turun kaupungin virallinen sovellus',
  sv: 'Officiell app för staden Åbo',
  en: 'The official app for the city of Turku',
};

export default function MyApp(props: MyAppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const locale = (router.locale as Lang) ?? 'fi';

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Turku-sovellus</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={metaDescription[locale]} />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <TopBar />
            <Container sx={{ px: '0.5rem' }}>
              <Component {...pageProps} />
            </Container>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
