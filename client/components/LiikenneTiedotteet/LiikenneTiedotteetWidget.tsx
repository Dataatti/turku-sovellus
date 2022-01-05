import { useEffect } from 'react';
import ListWidget from 'components/ListWidget';
import IframeLink from 'components/LiikenneTiedotteet/IframeLink';

export const LiikenneTiedotteetWidget = ({ locale }: { locale: Lang }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <ListWidget
      data-testid="liikenne-tiedotteet-widget"
      title="Liikenne tiedotteet"
      readMoreTexts={{ fi: 'Lue lisää', en: 'Read more', sv: 'Läs mer' }}
      readMoreHref="/liikennetiedotteet"
      variant="white"
      customContent={<IframeLink locale={locale} height={500} />}
    ></ListWidget>
  );
};

export default LiikenneTiedotteetWidget;
