import ItemCard from 'components/ItemCard';

export const TurussaTapahtuuCard = ({ event, locale }: { event: Event; locale: Lang }) => {
  const startDate = new Date(event.start_time);
  const endDate = new Date(event.end_time);
  const startLocaleDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(startDate);
  const endLocaleDate = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(endDate);

  return (
    <ItemCard
      // Replace possible html tags from abstract
      abstract={event.description[locale]?.replace(/<[^>]*>?/gm, '')}
      captions={[`Alkaa ${startLocaleDate}`, `Päättyy ${endLocaleDate}`]}
      href={`https://kalenteri.turku.fi/events/node/${event.id}`}
      image={{
        url: event?.images?.[0]?.url,
        altText: event?.images?.[0]?.name as string,
      }}
      tags={(event?.keywords?.map((n) => n.name[locale]) as string[]) || []}
      title={event.name[locale] as string}
    />
  );
};

export default TurussaTapahtuuCard;
