import { useEffect } from 'react';
import ListWidget from 'components/ListWidget';
import IframeLink from 'components/LiikenneTiedotteet/IframeLink';

export const LiikenneTiedotteetWidget = ({ locale, title }: { locale: Lang; title: string }) => {
  return (
    <ListWidget
      data-testid="liikenne-tiedotteet-widget"
      title={title}
      readMoreHref="/liikennetiedotteet"
      variant="white"
      customContent={
        <IframeLink locale={locale} initialOptions={{ height: '500px', lang: locale }} />
      }
      isLoading={false}
    />
  );
};

export default LiikenneTiedotteetWidget;
