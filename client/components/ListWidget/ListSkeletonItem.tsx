/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Grid, Typography, ListItem, ListItemText, Divider, Skeleton } from '@mui/material';

export const ListWidgetSkeletonItem = () => {
  return (
    <ListItem alignItems="center" sx={{ px: 0, mb: '10px' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={10}>
          <ListItemText
            sx={{ height: '100%', '& .MuiListItemText-primary': { mb: '5px' } }}
            primary={<Skeleton />}
            secondary={
              <Typography component="span" variant="body2">
                <Skeleton variant="rectangular" height="100px" />
              </Typography>
            }
          />
          <Divider variant="fullWidth" role="presentation" sx={{ borderColor: '#eee' }} />
        </Grid>
        <Grid item sm={2} sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="auto"
            css={css`
              aspect-ratio: 1 / 1;
              object-fit: cover;
            `}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ListWidgetSkeletonItem;
