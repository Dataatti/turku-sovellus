import theme from 'theme';
import { Box, Typography, List, Link as MUILink } from '@mui/material';
import Link from 'next/link';
import { ListWidgetItem, ListItemType } from './ListWidgetItem';

type ListWidgetType = {
  className?: string;
  items?: ListItemType[];
  readMoreHref: string;
  readMoreText: string;
  title?: string;
  variant: 'primary' | 'secondary' | 'white';
};

const exampleData: ListItemType[] = [
  {
    title: 'Tall Ships Races Turku 2022',
    description: 'Pidempi selite, josta selviää paremmin, mitä kyseinen kohta pitää sisällään.',
    href: 'https://sailtraininginternational.org/event/the-tall-ships-races-2022/',
    thumbnail: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Turku_Castle.jpg',
      alt: 'Turun linna',
    },
  },
  {
    title: 'Tall Ships Races Turku 2022',
    description:
      'Pidempi selite, josta selviää paremmin, mitä kyseinen kohta pitää sisällään. Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum  Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsumTähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsumv Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum',
    href: 'https://sailtraininginternational.org/event/the-tall-ships-races-2022/',
    thumbnail: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Turku_Castle.jpg',
      alt: 'Turun linna',
    },
  },
];

export const ListWidget: React.FC<ListWidgetType> = ({
  className,
  items = exampleData,
  readMoreHref,
  readMoreText,
  title,
  variant,
}) => {
  const textColor = variant === 'white' ? '#000' : '#fff';

  return (
    <Box
      className={`${className ? className : ''}`}
      sx={{
        boxShadow: 3,
        marginTop: '12px',
        width: '100%',
        backgroundColor: variant === 'white' ? '#fff' : theme?.palette?.[variant]?.main,
        color: textColor,
        borderRadius: '4px',
        padding: { xs: '12px', md: '16px' },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        {title || ''}
      </Typography>
      <List sx={{ width: '100%' }}>
        {items &&
          items.map((item) => (
            <ListWidgetItem item={item} textColor={textColor} key={items.indexOf(item)} />
          ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link href={readMoreHref} passHref>
          <MUILink color="inherit">{readMoreText}</MUILink>
        </Link>
      </Box>
    </Box>
  );
};

export default ListWidget;
