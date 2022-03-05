import { Box, Typography, Link as MUILink, Button } from '@mui/material';
import { useRouter } from 'next/router';
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

  const lang = router.locale as string;
  const previewTranslation = translations[lang];

  const exitPreviewMode = async () => {
    const res = await fetch('/api/exit-preview').catch((err) => console.error(err));

    if (res) {
      window.close();
    }
  };

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
        height: '100px',
        backgroundColor: '#2F2E8B',
        color: '#fff',
      }}
    >
      <Typography variant="body2">{previewTranslation?.text}</Typography>
      <Button
        sx={{ color: '#fff', marginTop: '8px', borderColor: '#fff' }}
        variant="outlined"
        onClick={() => exitPreviewMode()}
      >
        {previewTranslation?.link}
      </Button>
    </Box>
  );
};

export default PreviewAlert;
