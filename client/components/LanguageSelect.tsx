import { useState } from 'react';
import { MenuItem, TextField, InputAdornment } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import theme from '../theme';

export const LanguageSelect = () => {
  const [language, setLanguage] = useState<string>('fi');

  return (
    <TextField
      select
      variant="standard"
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
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
