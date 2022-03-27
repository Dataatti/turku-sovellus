import React, { useEffect, useRef, useState } from 'react';

const translations = {
  error: {
    fi: 'Virhe ladatessa tiedotteita',
    en: 'Error occurred while loading releases',
    sv: 'Ett fel uppstod vid laddning av släpp',
  },
  loading: {
    fi: 'Ladataan...',
    en: 'Loading...',
    sv: 'Laddning...',
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
  const target = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const initTwitter = async (retries = 0) => {
      if (!isLoading) return;
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
            setIsLoading(false);
          } catch (err) {
            setIsLoading(false);
            setIsError(true);
          }
        } else {
          // Retry timeline creation if twttr is not loaded yet
          if (retries < 5) {
            setTimeout(() => initTwitter(retries + 1), 500);
          }
        }
      } else {
        // Retry timeline creation if window is not defined
        if (retries < 5) {
          setTimeout(() => initTwitter(retries + 1), 500);
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
