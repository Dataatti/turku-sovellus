import theme from 'theme';
import { Box, Typography, Link as MUILink } from '@mui/material';
import Link from 'next/link';
import LaunchIcon from '@mui/icons-material/Launch';

type UlkoinenLinkkiAttributes = {
  color: 'primary' | 'secondary';
  description: string;
  linkText: string;
  title: string;
  url: string;
};

export const UlkoinenLinkki = ({
  color,
  description,
  linkText,
  title,
  url,
}: UlkoinenLinkkiAttributes) => (
  <Box
    data-testid="ulkoinen-linkki"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 3,
      width: '100%',
      height: '160px',
      backgroundColor: theme?.palette?.[color || 'primary']?.main,
      color: '#fff',
      borderRadius: '4px',
      padding: { xs: '12px', md: '16px' },
    }}
  >
    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
      {title || ''}
    </Typography>
    <Typography variant="body2" sx={{ maxHeight: '80px', overflow: 'hidden' }}>
      {description || ''}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 'auto' }}>
      <Link href={url} passHref>
        <MUILink color="inherit">
          {linkText}
          <LaunchIcon fontSize="inherit" sx={{ ml: '4px' }} />
        </MUILink>
      </Link>
    </Box>
  </Box>
);

export default UlkoinenLinkki;
