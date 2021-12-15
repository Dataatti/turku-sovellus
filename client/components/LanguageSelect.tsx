import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { MenuItem, TextField, InputAdornment } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import theme from '../theme';

export const LanguageSelect = () => {
<<<<<<< HEAD
  const router = useRouter();

  const changeLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLanguage });
  };
=======
  const [language, setLanguage] = useState<string>('fi');
>>>>>>> 39cce6f8db7e521cfe22195df17322e1befdee32

  return (
    <TextField
      select
      variant="standard"
      data-testid="language-select"
      value={router.locale}
      onChange={changeLanguage}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LanguageIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiInputAdornment-standard, .MuiSelect-select, .MuiSelect-icon': {
          color: theme.palette.primary.contrastText,
        },
        '& .MuiInput-underline:before, .MuiInput-underline:hover:before, .MuiInput-underline:after':
          {
            borderBottomColor: theme.palette.primary.contrastText + ' !important',
          },
      }}
    >
      <MenuItem value={'fi'}>FI</MenuItem>
      <MenuItem value={'sv'}>SV</MenuItem>
      <MenuItem value={'en'}>EN</MenuItem>
    </TextField>
  );
};

export default LanguageSelect;
