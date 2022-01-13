import { useEffect } from 'react';
import ListWidget from 'components/ListWidget';
import IframeLink from 'components/LiikenneTiedotteet/IframeLink';

export const LiikenneTiedotteetWidget = ({ locale, title }: { locale: Lang; title: string }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).twttr.widgets.load();
    }
  }, []);

  return (
    <ListWidget
      data-testid="liikenne-tiedotteet-widget"
      title={title}
      readMoreHref="/liikennetiedotteet"
      variant="white"
      customContent={<IframeLink locale={locale} height={500} />}
      isLoading={false}
    />
  );
};

export default LiikenneTiedotteetWidget;
