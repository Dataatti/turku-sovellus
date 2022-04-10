import ItemCard from 'components/ItemCard';

export const TiedotteetCard = ({ news, locale }: { news: News; locale: Lang }) => {
  const date = new Date(news.isoDate);
  const localeDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(date);

  return (
    <ItemCard
      abstract={news.content?.replace(/<[^>]*>?/gm, '')}
      captions={[`${localeDate}`]}
      href={news?.link}
      image={{
        url: news?.enclosure?.url,
        altText: news?.title,
      }}
      title={news.title}
    />
  );
};

export default TiedotteetCard;
