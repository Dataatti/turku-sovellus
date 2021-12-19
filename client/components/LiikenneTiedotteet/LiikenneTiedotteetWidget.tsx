import { useEffect } from 'react';
import ListWidget from 'components/ListWidget';
import IframeLink from 'components/LiikenneTiedotteet/IframeLink';

export const LiikenneTiedotteetWidget = ({ locale }: { locale: Lang }) => {

  useEffect(() => {
    window.twttr.widgets.load();
  }, [])

  return (
    <ListWidget
      data-testid="liikenne-tiedotteet-widget"
      title="Liikenne tiedotteet"
      readMoreText="Lue lisää"
      readMoreHref="/liikennetiedotteet"
      variant="white"
      customContent={
        <IframeLink locale={locale} height={500}/>
      }>
    </ListWidget>
  )
}

export default LiikenneTiedotteetWidget;
