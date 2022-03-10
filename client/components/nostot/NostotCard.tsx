import ItemCard from 'components/ItemCard';
import { Box } from '@mui/material';

export const NostotCard = ({ nosto, locale }: { nosto: Nosto; locale: Lang }) => {
  const media = nosto.attributes.header_image.data?.attributes;
  return (
    <ItemCard
      // Replace possible html tags from abstract
      abstract={nosto.attributes.description}
      captions={[]}
      href={`/nostot/${nosto.id}`}
      image={{
        url: media?.url ? process.env.NEXT_PUBLIC_STRAPI_URL + media?.url : '',
        altText: media?.alternativeText,
      }}
      tags={[]}
      title={nosto.attributes.title}
      externalLink={false}
    />
  );
};

export default NostotCard;
