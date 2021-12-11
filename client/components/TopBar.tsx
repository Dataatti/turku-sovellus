import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import LanguageSelect from './LanguageSelect';
import TopBarLogo from './TopBarLogo';

export const TopBar = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(router.pathname !== '/' ? document.title : '');
  }, [router.pathname]);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between', py: { xs: '10px', md: '0px' } }}>
          <TopBarLogo />
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <LanguageSelect />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
