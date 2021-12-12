/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'theme';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { shortenTextFromEnd } from 'utils/textUtils';

// A singular list item, thumbnail is the component on the right side (image, icon etc)
type ListItemType = {
  description: string;
  href: string;
  thumbnail: ReactNode;
  title: string;
};

type ListWidgetType = {
  className?: string;
  items: ListItemType[];
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
    thumbnail: (
      <img
        css={css(`width: 100%; height: 100%; object-fit: cover;`)}
        src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Turku_Castle.jpg"
        alt="Turun linna"
      />
    ),
  },
  {
    title: 'Tall Ships Races Turku 2022',
    description:
      'Pidempi selite, josta selviää paremmin, mitä kyseinen kohta pitää sisällään. Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum  Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsumTähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsumv Tähän mahtuu enemmänkin tekstiä. Lorem ipsum lorem ipsum lorem ipsum',
    href: 'https://sailtraininginternational.org/event/the-tall-ships-races-2022/',
    thumbnail: (
      <img
        css={css(`width: 100%; height: 100%; object-fit: cover;`)}
        src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Turku_Castle.jpg"
        alt="Turun linna"
      />
    ),
  },
];

export const ListWidget: React.FC<ListWidgetType> = ({
  className,
  items,
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

  const listItemStyles = css(`
    padding-left: 4px;
    padding-right: 4px;  
    @media (max-width: 899px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  `);

  const thumbnailWrapper = css(`
    width: 110px; 
    height: 110px;
    @media (max-width: 899px) {
      width: 70px;
      height: 70px;
    }
    @media (max-width: 530px) {
      display: none
    }
  `);

  return (
    <Box className={`${className ? className : ''}`} css={wrapperStyles} sx={{ boxShadow: 3 }}>
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <List sx={{ width: '100%' }}>
        {/* TODO: Remove example data when connected to actual data source */}
        {exampleData.map((n) => (
          <>
            <ListItem alignItems="center" css={listItemStyles}>
              <div
                css={css(`    
                  height: 110px; 
                  width: 100%; 
                  display: flex; 
                  flex-direction: column;
                  margin-right: 8px;
                  `)}
              >
                <ListItemText
                  css={css(`height: 100%; width: 100%`)}
                  primary={
                    <>
                      <Link href={n.href} passHref>
                        <a
                          css={css(`
                        color: ${textColor};
                        text-decoration: none;
                        &:hover {
                          text-decoration: underline !important;
                        }
                      `)}
                        >
                          {n.title}
                        </a>
                      </Link>
                      <LaunchIcon fontSize="inherit" css={css(`margin-left: 2px`)} />
                    </>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color={textColor}
                      >
                        {shortenTextFromEnd(n.description, 200)}
                      </Typography>
                    </>
                  }
                />
                <Divider
                  variant="fullWidth"
                  component="li"
                  sx={{ borderColor: textColor, marginTop: 'auto', marginRight: '8px' }}
                />
              </div>
              <div css={thumbnailWrapper}>{n.thumbnail}</div>
            </ListItem>
          </>
        ))}
      </List>
      <div
        css={css(`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${textColor}
      `)}
      >
        <Link href={readMoreHref} passHref>
          <a
            css={css(`
            color: ${textColor}
          `)}
          >
            {readMoreText}
          </a>
        </Link>
      </div>
    </Box>
  );
};

export default ListWidget;
