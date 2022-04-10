import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import LanguageSelect from './LanguageSelect';
import TopBarLogo from './TopBarLogo';

export const TopBar = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle(document.title);
  }, [router.pathname, router.locale]);

  return (
    <AppBar position="static">
      <Container
        sx={{ paddingLeft: { xs: '0px', sm: '16px' }, paddingRight: { xs: '0px', sm: '16px' } }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            py: { xs: '10px', md: '0px' },
            paddingLeft: { xs: '8px', sm: '16px' },
            paddingRight: { xs: '8px', sm: '16px' },
          }}
          data-testid="top-bar"
        >
          <TopBarLogo />
          <Typography
            variant="h5"
            component="h1"
            sx={
              router.pathname === '/'
                ? visuallyHidden
                : {
                    fontWeight: 'bold',
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    textAlign: 'center',
                  }
            }
          >
            {title}
          </Typography>
          <LanguageSelect />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
