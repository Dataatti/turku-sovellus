import theme from 'theme';
import { Box, Typography, List, Link as MUILink, Skeleton } from '@mui/material';
import Link from 'next/link';
import { ListWidgetItem, ListItemType } from './ListWidgetItem';
import ListWidgetSkeletonItem from './ListSkeletonItem';

type ListWidgetType = {
  className?: string;
  items?: ListItemType[];
  customContent?: JSX.Element;
  readMoreHref: string;
  readMoreText: string;
  title?: string;
  variant: 'primary' | 'secondary' | 'white';
  isLoading: boolean;
};

export const ListWidget = ({
  className,
  items = [],
  customContent,
  readMoreHref,
  readMoreText,
  title,
  variant,
  isLoading,
  ...props
}: ListWidgetType) => {
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
          <MUILink color="inherit">{readMoreText}</MUILink>
        </Link>
      </Box>
    </Box>
  );
};

export default ListWidget;
