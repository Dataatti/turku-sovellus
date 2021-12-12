import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { ChatBubbleOutline, Launch } from '@mui/icons-material';

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

  return (
    <Card>
      <CardMedia
        component="img"
        image={hearing.main_image.url}
        height="200"
        width="400"
        alt={hearing.main_image.alt_text[locale]}
      ></CardMedia>

      <CardContent>
        <a href={`https://kerrokantasi.turku.fi/${hearing.slug}`}>
          <Typography variant="h5" component="h3">
            {hearing.title[locale]}
            <Launch />
          </Typography>
        </a>

        <Typography variant="caption" component="p">
          {`Avautui ${openedDaysAgo} päivää sitten`}
        </Typography>

        <Typography variant="caption" component="p">
          {`Sulkeutuu ${closeLocaleDate}`}
        </Typography>

        <Typography variant="body2" component="span">
          <ChatBubbleOutline/>{hearing.n_comments}
        </Typography>

        <Typography variant="body2" component="p">
          {hearing.abstract[locale]}
        </Typography>

        {hearing.labels.map((label) => (
          <Chip key={label.id} label={label.label[locale]} color="secondary" />
        ))}
      </CardContent>
    </Card>
  );
};

export default KerroKantasiCard;
