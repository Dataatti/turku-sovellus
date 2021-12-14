import { Card, CardContent, CardMedia, Chip, Typography, Link, Box } from '@mui/material';
import { Launch } from '@mui/icons-material';

type ItemCardProps = {
  abstract?: string;
  captions: string[];
  href: string;
  image: {
    url: string;
    altText: string;
  };
  titleSuffix?: JSX.Element;
  tags: string[];
  title: string;
};

export const ItemCard: React.FC<ItemCardProps> = ({
  abstract,
  captions,
  href,
  image,
  titleSuffix,
  tags,
  title,
}) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column-reverse', md: 'row' },
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href={href} underline="hover">
            <Typography variant="h3" component="h2" sx={{ display: 'flex', fontWeight: 'bold' }}>
              {title}
              <Launch fontSize="small" sx={{ marginLeft: '4px' }} />
            </Typography>
          </Link>
          {titleSuffix && titleSuffix}
        </Box>

        <Box sx={{ margin: '8px 0' }}>
          {captions.map((n, i) => (
            <Typography key={i} variant="caption" component="p">
              {n}
            </Typography>
          ))}
        </Box>

        <Typography variant="body2" component="p">
          {abstract}
        </Typography>
        <Box sx={{ marginTop: 'auto' }}>
          {tags.map((n, i) => (
            <Chip
              key={i}
              label={n}
              color="secondary"
              sx={{ marginRight: '4px', marginTop: '12px' }}
            />
          ))}
        </Box>
      </CardContent>
      <CardMedia
        component="img"
        image={image.url}
        sx={{ width: { xs: '100%', md: '400px' }, height: { xs: '200px', sm: '300px' } }}
        alt={image.altText}
      ></CardMedia>
    </Card>
  );
};

export default ItemCard;