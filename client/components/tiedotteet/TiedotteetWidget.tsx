import ListWidget from 'components/ListWidget';
import useTiedotteet from 'hooks/useTiedotteet';

export const TiedotteetWidget = ({ locale, title }: { locale: Lang; title: string }) => {
  const { isLoading, data } = useTiedotteet(locale);

  const mapData = (data: News[]) => {
    // Show only 3 news on widget
    const mappedNews = data?.slice(0, 3)?.map((news) => ({
      title: news?.title,
      description: news.content?.replace(/<[^>]*>?/gm, ''),
      thumbnail: { src: news?.enclosure?.url, alt: news?.title },
      href: news?.link,
    }));
    return mappedNews;
  };

  return (
    <ListWidget
      data-testid="tiedotteet-widget"
      title={title}
      readMoreHref="/tiedotteet"
      variant="primary"
      items={data && mapData(data)}
      isLoading={isLoading}
    />
  );
};

export default TiedotteetWidget;
