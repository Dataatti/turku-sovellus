import React, { useEffect, useRef, useState } from 'react';

const translations = {
  error: {
    fi: 'Virhe ladatessa tiedotteita',
    en: 'Error occurred while loading releases',
    sv: 'Ett fel uppstod vid laddning av släpp',
  },
  loading: {
    fi: 'Ladataan...',
    en: 'loading...',
    sv: 'laddning...',
  },
};

export const IframeLink = ({
  locale,
  initialOptions,
}: {
  locale: Lang;
  initialOptions: { [key: string]: any };
}) => {
  const options = Object.assign({}, initialOptions);
  const init = useRef<boolean>(false);
  const target = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const initTwitter = async () => {
      if (init.current) return;
      if (typeof window !== 'undefined') {
        if ((window as any)?.twttr?.init && target.current !== null) {
          try {
            await (window as any)?.twttr?.widgets?.createTimeline(
              {
                sourceType: 'profile',
                url: 'https://twitter.com/Turunliikenne?ref_src=twsrc%5Etfw',
              },
              target.current,
              options
            );

            init.current = true;
            setIsLoading(false);
          } catch (err) {
            setIsError(true);
          }
        }
      }
    };
    initTwitter();
  }, []);

  return (
    <>
      {isLoading && (
        <a href="https://twitter.com/Turunliikenne?ref_src=twsrc%5Etfw">
          {translations.loading[locale]}
        </a>
      )}
      {isError && (
        <a href="https://twitter.com/Turunliikenne?ref_src=twsrc%5Etfw">
          {translations.error[locale]}
        </a>
      )}
      <div ref={target} />
    </>
  );
};

export default IframeLink;
