import theme from 'theme';
import { Box, Typography, Link as MUILink } from '@mui/material';
import Link from 'next/link';
import LaunchIcon from '@mui/icons-material/Launch';

export const UlkoinenLinkkiWidget = ({ ulkoinenLinkki }: { ulkoinenLinkki: UlkoinenLinkki }) => {
  const { Color, Description, LinkText, Title, Url } = ulkoinenLinkki.attributes;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        width: '100%',
        height: '160px',
        backgroundColor: theme?.palette?.[Color || 'primary']?.main,
        color: '#fff',
        borderRadius: '4px',
        padding: { xs: '12px', md: '16px' },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        {Title || ''}
      </Typography>
      <Typography variant="body2" sx={{ maxHeight: '80px', overflow: 'hidden' }}>
        {Description || ''} {Description || ''}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginTop: 'auto' }}>
        <Link href={Url} passHref>
          <MUILink color="inherit">
            {LinkText}
            <LaunchIcon fontSize="inherit" sx={{ ml: '4px' }} />
          </MUILink>
        </Link>
      </Box>
    </Box>
  );
};

export default UlkoinenLinkkiWidget;
