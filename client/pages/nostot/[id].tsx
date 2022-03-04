import { Card, CardMedia, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import strapiClient from 'functions/strapi-client';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import PreviewAlert from 'components/PreviewAlert';

export const Nosto = ({
  item,
  media,
  mediaUrl,
  preview = false,
}: {
  item: Nosto;
  media: any;
  mediaUrl: string;
  preview: boolean;
}) => {
  const { title, body } = item?.attributes;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>
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
        <Typography variant="h1">{title}</Typography>
        {mediaUrl && <CardMedia component="img" image={mediaUrl} alt={media?.alternativeText} />}
        <ReactMarkdown>{body as string}</ReactMarkdown>
      </Card>
      {preview && <PreviewAlert />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query, locale, preview } = context;

  const data = (await strapiClient.nostot.get(query.id as string, locale || 'fi', preview)) as any;

  const item = data?.data?.data || null;
  const media = item?.attributes?.header_image?.data?.attributes || null;
  const mediaUrl = media?.url ? process.env.NEXT_PUBLIC_STRAPI_URL + media.url : '';

  return {
    props: {
      locale: locale || 'fi',
      preview: preview || null,
      item,
      media,
      mediaUrl,
    },
  };
};

export default Nosto;
