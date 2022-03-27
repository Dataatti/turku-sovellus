import ListWidget from 'components/ListWidget';
import { ListItemType } from 'components/ListWidget/ListWidgetItem';
import { useRouter } from 'next/router';

export const NostotWidget = ({ title, nostot }: { title: string; nostot: Nosto[] }) => {
  const { locale } = useRouter();

  if (nostot.length === 0) return null;

  const mappedNostot = nostot?.map((nosto) => {
    const thumbnail = nosto.attributes.header_image.data?.attributes.formats.thumbnail;
    return {
      title: nosto.attributes.title,
      description: nosto.attributes.description,
      thumbnail: {
        src: thumbnail?.url ? process.env.NEXT_PUBLIC_STRAPI_URL + thumbnail.url : '',
        alt: nosto.attributes.header_image.data?.attributes.alternativeText || '',
      },
      href: `/nostot/${nosto.id}`,
      externalLink: false,
    };
  });

  return (
    <ListWidget
      data-testid="nostot-widget"
      title={title}
      readMoreHref="/nostot"
      variant="primary"
      items={mappedNostot}
      isLoading={false}
    />
  );
};
