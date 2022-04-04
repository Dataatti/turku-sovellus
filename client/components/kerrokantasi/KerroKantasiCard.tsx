import { Typography, Box } from '@mui/material';
import { ChatBubbleOutline } from '@mui/icons-material';
import ItemCard from 'components/ItemCard';

export const KerroKantasiCard = ({ hearing, locale }: { hearing: Hearing; locale: Lang }) => {
  const openDate = new Date(hearing.open_at);
  const closeDate = new Date(hearing.close_at);
  const closeLocaleDate = new Intl.DateTimeFormat(locale, {
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(closeDate);

  const openedDaysAgo = Math.floor((Date.now() - openDate.getTime()) / (1000 * 60 * 60 * 24));

  const dateTextTranslations = {
    fi: [`Avautui ${openedDaysAgo} päivää sitten`, `Sulkeutuu ${closeLocaleDate}`],
    en: [`Started ${openedDaysAgo} days ago`, `Closes ${closeLocaleDate}`],
    sv: [`Startade för ${openedDaysAgo} dagar sedan`, `Stänger ${closeLocaleDate}`],
  };

  const titleTranslations = {
    fi: 'kommenttia',
    en: 'comments',
    sv: 'kommentarer',
  };

  return (
    <ItemCard
      abstract={hearing.abstract[locale]}
      captions={dateTextTranslations[locale]}
      href={`https://kerrokantasi.turku.fi/${hearing.slug}`}
      image={{
        url: hearing.main_image.url,
        altText: hearing.main_image.caption[locale] || (hearing.main_image.caption.fi as string),
      }}
      tags={(hearing?.labels?.map((n) => n.label[locale]) as string[]) || []}
      title={hearing.title[locale] as string}
      titleSuffix={
        <Typography
          variant="body2"
          component="span"
          sx={{ display: 'flex', fontSize: '18px', marginLeft: '8px' }}
        >
          <Box sx={{ display: 'inline', marginRight: '4px' }}>{hearing.n_comments}</Box>
          <ChatBubbleOutline titleAccess={titleTranslations[locale]} />
        </Typography>
      }
    />
  );
};

export default KerroKantasiCard;
