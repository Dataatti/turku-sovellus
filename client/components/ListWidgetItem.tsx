/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid, Typography, ListItem, ListItemText, Divider } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';
import { shortenTextFromEnd } from 'utils/textUtils';

// A singular list item, thumbnail is the component on the right side (image, icon etc)
export type ListItemType = {
  description: string;
  href: string;
  thumbnail: { src?: string; alt?: string };
  title: string;
};

export const ListWidgetItem = ({ item, textColor }: { item: ListItemType; textColor: string }) => {
  const { href, title, description, thumbnail } = item;
  return (
    <ListItem alignItems="center" sx={{ px: 0, mb: '10px' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={10}>
          <ListItemText
            sx={{ height: '100%', '& .MuiListItemText-primary': { mb: '5px' } }}
            primary={
              <Link href={href} passHref>
                <a
                  css={css`
                    color: ${textColor};
                    text-decoration: none;
                    &:hover {
                      text-decoration: underline;
                    }
                  `}
                >
                  {title}
                  <LaunchIcon fontSize="inherit" sx={{ ml: '4px' }} />
                </a>
              </Link>
            }
            secondary={
              <Typography component="span" variant="body2">
                {shortenTextFromEnd(description, 200)}
              </Typography>
            }
          />
          <Divider variant="fullWidth" component="li" sx={{ borderColor: textColor }} />
        </Grid>
        <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
          {thumbnail.src && (
            <img
              src={thumbnail.src}
              alt={thumbnail.alt}
              width="100%"
              height="auto"
              css={css`
                aspect-ratio: 1 / 1;
              `}
            />
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ListWidgetItem;
