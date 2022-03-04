import { Box, Typography, Link as MUILink } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const translations: { [key: string]: { text: string; link: string } } = {
  fi: {
    text: 'Esikatselutila',
    link: 'Lopeta esikatselu',
  },
  en: {
    text: 'Preview mode',
    link: 'Quit preview',
  },
  sv: {
    text: 'Förhandsvisning',
    link: 'Sluta',
  },
};

export const PreviewAlert = () => {
  const router = useRouter();

  const [previewTranslation, setPreviewTranslation] = useState(translations['fi']);

  useEffect(() => {
    if (router?.query?.locale) {
      setPreviewTranslation(translations[router.query.locale as string]);
    }
  }, [router]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        padding: '8px',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '200px',
        height: '80px',
        backgroundColor: '#2F2E8B',
        color: '#fff',
      }}
    >
      <Typography variant="body2">{previewTranslation?.text}</Typography>
      <Link href={'/api/exit-preview'} passHref>
        <MUILink color="inherit">{previewTranslation?.link}</MUILink>
      </Link>
    </Box>
  );
};

export default PreviewAlert;
