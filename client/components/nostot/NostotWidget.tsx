import ListWidget from 'components/ListWidget';
import { ListItemType } from 'components/ListWidget/ListWidgetItem';
import { useNostot } from 'hooks/useNostot';
import { useRouter } from 'next/router';

export const NostotWidget = ({ title }: { title: string }) => {
  const { isLoading, data, error } = useNostot();
  const { locale } = useRouter();

  const errorMessages: { fi: string; en: string; sv: string } = {
    fi: 'Nostoja ei saatavilla',
    en: 'Highlights not available',
    sv: '',
  };

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

  const errorData = (locale: 'fi' | 'en' | 'sv'): ListItemType | undefined => {
    if (error || data?.data?.data.length === 0) {
      return {
        title: errorMessages[locale],
        thumbnail: { src: undefined },
      };
    }
    return undefined;
  };

  return (
    <ListWidget
      data-testid="nostot-widget"
      title={title}
      readMoreHref="/nostot"
      variant="primary"
      items={data && mapData(data?.data?.data)}
      isLoading={isLoading}
      error={errorData((locale || 'fi') as Lang)}
    />
  );
};
