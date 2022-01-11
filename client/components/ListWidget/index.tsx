import theme from 'theme';
import { Box, Typography, List, Link as MUILink, Skeleton } from '@mui/material';
import Link from 'next/link';
import { ListWidgetItem, ListItemType } from './ListWidgetItem';
import { useRouter } from 'next/router';
import ListWidgetSkeletonItem from './ListSkeletonItem';

type ListWidgetType = {
  className?: string;
  items?: ListItemType[];
  customContent?: JSX.Element;
  readMoreHref: string;
  title?: string;
  variant: 'primary' | 'secondary' | 'white';
  isLoading: boolean;
};

export const ListWidget = ({
  className,
  items = [],
  customContent,
  readMoreHref,
  title,
  variant,
  isLoading,
  ...props
}: ListWidgetType) => {
  
  const { locale } = useRouter();
  const textColor = variant === 'white' ? '#000' : '#fff';
  const readMoreTexts = { fi: 'Lue lisää', en: 'Read more', sv: 'Läs mer' };

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
      {...props}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        {title || ''}
      </Typography>
      <List sx={{ width: '100%' }}>
        {isLoading && (
          <>
            <ListWidgetSkeletonItem />
            <ListWidgetSkeletonItem />
            <ListWidgetSkeletonItem />
          </>
        )}
        {!isLoading &&
          items &&
          items.map((item) => (
            <ListWidgetItem item={item} textColor={textColor} key={items.indexOf(item)} />
          ))}
      </List>
      {customContent ? (
        customContent
      ) : (
        <List sx={{ width: '100%' }}>
          {items &&
            items.map((item) => (
              <ListWidgetItem item={item} textColor={textColor} key={items.indexOf(item)} />
            ))}
        </List>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Link href={readMoreHref} passHref>
          <MUILink color="inherit">{readMoreTexts[(locale as Lang) || 'fi']}</MUILink>
        </Link>
      </Box>
    </Box>
  );
};

export default ListWidget;
