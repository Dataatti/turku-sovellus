import ListWidget from 'components/ListWidget';
import useKerroKantasi from 'hooks/useKerroKantasi';

export const KerroKantasiWidget = ({ locale, title }: { locale: Lang; title: string }) => {
  const { isLoading, data } = useKerroKantasi();

  const mapData = (data: Hearing[]) => {
    const mappedHearings = data.map((hearing) => ({
      title: hearing.title[locale],
      description: hearing.abstract[locale],
      thumbnail: { src: hearing.main_image.url, alt: hearing.main_image.alt_text[locale] },
      href: `https://kerrokantasi.turku.fi/${hearing.slug}`,
    }));
    return mappedHearings;
  };

  return (
    <ListWidget
      data-testid="kerro-kantasi-widget"
      title={title}
      readMoreText="Lue lisää"
      readMoreHref="/kerrokantasi"
      variant="white"
      items={data && mapData(data)}
      isLoading={isLoading}
    />
  );
};

export default KerroKantasiWidget;
