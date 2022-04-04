/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { Grid, Typography, ListItem, ListItemText, Divider } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';
import { shortenTextFromEnd } from 'utils/textUtils';
import theme from 'theme';
import useMediaQuery from '@mui/material/useMediaQuery';

// A singular list item, thumbnail is the component on the right side (image, icon etc)
export type ListItemType = {
  description?: string;
  href?: string;
  thumbnail: { src?: string; alt?: string };
  title?: string;
  externalLink?: boolean;
};

const launchIconAltTexts = {
  fi: 'avautuu uuteen välilehteen',
  en: 'opens in a new tab',
  sv: 'öppnas i en ny flik',
}

export const ListWidgetItem = ({
  item,
  textColor,
  divider = true,
}: {
  item: ListItemType;
  textColor: string;
  divider?: boolean;
}) => {
  const router = useRouter();
  const locale = (router.locale as Lang) ?? 'fi';
  const { href, title, description, thumbnail, externalLink = true } = item;
  const hasImage = Boolean(thumbnail.src);
  const breakpointSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <ListItem alignItems="center" sx={{ px: 0, mb: '10px' }}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={hasImage ? 9 : 12}
          sm={hasImage ? 10 : 12}
          sx={{ paddingRight: hasImage ? '8px' : '0' }}
        >
          <ListItemText
            sx={{ height: '100%', '& .MuiListItemText-primary': { mb: '5px' } }}
            primary={
              href ? (
                <Link href={href} passHref>
                  <a
                    css={css`
                      color: ${textColor};
                      text-decoration: none;
                      &:hover {
                        text-decoration: underline;
                      }
                    `}
                    target={externalLink ? "_blank" : ""}
                    rel={externalLink ? "noopener noreferrer" : ""}
                  >
                    {title || ''}
                    {externalLink && <LaunchIcon fontSize="inherit" titleAccess={launchIconAltTexts[locale]} sx={{ ml: '4px' }} />}
                  </a>
                </Link>
              ) : (
                title
              )
            }
            secondary={
              <Typography component="span" variant="body2">
                {shortenTextFromEnd(description || '', breakpointSm ? 200 : 80)}
              </Typography>
            }
          />
          {divider && <Divider variant="fullWidth" role="presentation" sx={{ borderColor: textColor }} />}
        </Grid>
        <Grid
          item
          xs={hasImage ? 3 : 0}
          sm={hasImage ? 2 : 0}
          sx={{ display: 'flex', alignItems: 'center', paddingLeft: '0px !important' }}
        >
          {thumbnail.src && (
            <img
              src={thumbnail.src}
              alt={thumbnail.alt}
              width="100%"
              height="auto"
              css={css`
                aspect-ratio: 1 / 1;
                object-fit: cover;
              `}
            />
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ListWidgetItem;
