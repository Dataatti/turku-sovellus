import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { MenuItem, TextField, InputAdornment } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import theme from '../../theme';

const titleTranslations = {
  fi: 'Valitse kieli',
  en: 'Select language',
  sv: 'Välj språk',
};

const allLanguageOptions = {
  fi: {
    fi: 'Suomi',
    en: 'Englanti',
    sv: 'Ruotsi',
  },
  en: {
    fi: 'Finnish',
    en: 'English',
    sv: 'Swedish',
  },
  sv: {
    fi: 'Finska',
    en: 'Engleska',
    sv: 'Svenska',
  },
};

export const LanguageSelect = () => {
  const router = useRouter();
  const locale = (router.locale as Lang) ?? 'fi';

  const languageOptions = allLanguageOptions[locale];

  const changeLanguage = (event: ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLanguage });
  };

  return (
    <TextField
      select
      variant="standard"
      id="language-select"
      data-testid="language-select"
      value={locale}
      onChange={changeLanguage}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LanguageIcon titleAccess={titleTranslations[locale]} />
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
      <MenuItem value={'fi'} aria-label={languageOptions.fi}>
        FI
      </MenuItem>
      <MenuItem value={'sv'} aria-label={languageOptions.sv}>
        SV
      </MenuItem>
      <MenuItem value={'en'} aria-label={languageOptions.en}>
        EN
      </MenuItem>
    </TextField>
  );
};

export default LanguageSelect;
