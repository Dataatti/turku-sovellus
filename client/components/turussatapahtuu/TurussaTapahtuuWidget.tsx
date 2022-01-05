import ListWidget from 'components/ListWidget';
import useTurkuEvents from 'hooks/useTurkuEvents';

export const TurussaTapahtuuWidget = ({ locale }: { locale: Lang }) => {
  const { isLoading, data } = useTurkuEvents();

  const mapData = (data: Event[]) => {
    // Filter events that don't have correct translations for current locale
    // Show only 3 events on widget
    const mappedHearings = data
      .filter((n) => n.name[locale])
      .slice(0, 3)
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
      title="Turussa tapahtuu"
      readMoreTexts={{ fi: 'Lue lisää', en: 'Read more', sv: 'Läs mer' }}
      readMoreHref="/turussatapahtuu"
      variant="white"
      items={data && mapData(data)}
    />
  );
};

export default TurussaTapahtuuWidget;
