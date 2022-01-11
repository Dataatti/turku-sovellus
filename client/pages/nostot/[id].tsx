import { Card, CardMedia, Skeleton, Typography } from '@mui/material';
import { useNosto } from 'hooks/useNostot';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

export const Nosto = () => {
  const router = useRouter();
  const { data, isLoading } = useNosto(router.query.id as string);

  const item = data?.data?.data?.attributes;
  const media = data?.data?.data?.attributes?.header_image?.data?.attributes;
  const mediaUrl = media?.url ? process.env.NEXT_PUBLIC_STRAPI_URL + media.url : '';

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column' },
        marginTop: '12px',
        marginBottom: '12px',
        padding: '12px',
      }}
      data-testid="item-card"
    >
      <Typography variant="h1">{item?.title}</Typography>
      {!isLoading ? (
        mediaUrl && <CardMedia component="img" image={mediaUrl} alt={media?.alternativeText} />
      ) : (
        <Skeleton />
      )}
      <ReactMarkdown>{item?.body as string}</ReactMarkdown>
    </Card>
  );
};

export default Nosto;
