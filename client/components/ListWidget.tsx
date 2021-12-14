/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'theme';
import { Box, Typography, List, Link as MUILink } from '@mui/material';
import Link from 'next/link';
import { ListWidgetItem, ListItemType } from './ListWidgetItem';

type ListWidgetType = {
  className?: string;
  items?: ListItemType[];
  readMoreHref: string;
  readMoreText: string;
  title: string;
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

  const wrapperStyles = css(`
    max-width: 700px;
    width: 100%;
    background-color: ${variant === 'white' ? '#fff' : theme?.palette?.[variant]?.main};
    color: ${textColor};
    border-radius: 4px;
    padding: 16px;
    @media (max-width: 899px) {
      padding: 12px;
    }
  `);

  return (
    <Box className={`${className ? className : ''}`} css={wrapperStyles} sx={{ boxShadow: 3 }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <List sx={{ width: '100%' }}>
        {items.map((item) => (
          <ListWidgetItem item={item} textColor={textColor} key={items.indexOf(item)} />
        ))}
      </List>
      <div
        css={css(`
        display: flex;
        justify-content: center;
      `)}
      >
        <Link href={readMoreHref} passHref>
          <MUILink color="inherit">{readMoreText}</MUILink>
        </Link>
      </div>
    </Box>
  );
};

export default ListWidget;
