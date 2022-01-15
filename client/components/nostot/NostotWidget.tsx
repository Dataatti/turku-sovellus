import ListWidget from 'components/ListWidget';
import { useNostot } from 'hooks/useNostot';

export const NostotWidget = ({ title }: { title: string }) => {
  const { isLoading, data } = useNostot();

  const mapData = (data: Nosto[]) => {
    const mappedNostot = data?.map((nosto) => {
      const thumbnail = nosto.attributes.header_image.data?.attributes.formats.thumbnail;
      return {
        title: nosto.attributes.title,
        description: nosto.attributes.description,
        thumbnail: {
          src: thumbnail?.url ? process.env.NEXT_PUBLIC_STRAPI_URL + thumbnail.url : '',
          alt: nosto.attributes.header_image.data?.attributes.alternativeText || '',
        },
        href: `/nostot/${nosto.id}`,
      };
    });
    return mappedNostot;
  };

  return (
    <ListWidget
      data-testid="nostot-widget"
      title={title}
      readMoreHref="/nostot"
      variant="primary"
      items={data && mapData(data?.data?.data)}
      isLoading={isLoading}
    />
  );
};
