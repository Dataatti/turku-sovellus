import ListWidget from 'components/ListWidget';
import useTurkuEvents from 'hooks/useTurkuEvents';

export const TurussaTapahtuuWidget = ({ locale, title }: { locale: Lang; title: string }) => {
  const { isLoading, data } = useTurkuEvents();

  const mapData = (data: Event[]) => {
    // Filter events that don't have correct translations for current locale
    // Show only 5 events on widget
    const mappedHearings = data
      .filter((n) => n.name[locale])
      .slice(0, 5)
      .map((event) => ({
        title: event.name[locale],
        description: event.description[locale]?.replace(/<[^>]*>?/gm, ''),
        thumbnail: { src: event?.images?.[0]?.url, alt: event?.images?.[0]?.name },
        href: `https://kalenteri.turku.fi/events/node/${event.id}`,
      }));
    return mappedHearings;
  };

  return (
    <ListWidget
      data-testid="turussa-tapahtuu-widget"
      title={title}
      readMoreText="Lue lisää"
      readMoreHref="/turussatapahtuu"
      variant="white"
      items={data && mapData(data)}
      isLoading={isLoading}
    />
  );
};

export default TurussaTapahtuuWidget;
