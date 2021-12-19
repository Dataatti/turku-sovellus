import { useEffect } from 'react';
import ListWidget from 'components/ListWidget';

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
        <>
          <a className="twitter-timeline" data-lang={locale} data-height="500px" data-theme="light" data-dtn="true" href="https://twitter.com/Turunliikenne?ref_src=twsrc%5Etfw">Loading...</a>
        </>
      }>
    </ListWidget>
  )
}

export default LiikenneTiedotteetWidget;
