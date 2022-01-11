import ListWidget from 'components/ListWidget';
import useTiedotteet from 'hooks/useTiedotteet';

export const TiedotteetWidget = ({ locale }: { locale: Lang }) => {
  const { isLoading, data } = useTiedotteet(locale);

  const mapData = (data: News[]) => {
    // Show only 3 news on widget
    const mappedNews = data.slice(0, 3).map((news) => ({
      title: news?.title,
      description: news.content?.replace(/<[^>]*>?/gm, ''),
      thumbnail: { src: news?.enclosure?.url, alt: news?.contentSnippet },
      href: news?.link,
    }));
    return mappedNews;
  };

  return (
    <ListWidget
      data-testid="tiedotteet-widget"
      title="Tiedotteet"
      readMoreHref="/tiedotteet"
      variant="primary"
      items={data && mapData(data)}
      isLoading={isLoading}
    />
  );
};

export default TiedotteetWidget;
