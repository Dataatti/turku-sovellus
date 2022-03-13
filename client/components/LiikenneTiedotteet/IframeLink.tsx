import React, { useEffect, useRef, useState } from 'react';

export const IframeLink = ({ initialOptions }: { initialOptions: { [key: string]: any } }) => {
  const options = Object.assign({}, initialOptions);
  const init = useRef<boolean>(false);
  const target = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initTwitter = async () => {
      if (init.current) return;
      if (typeof window !== 'undefined') {
        if ((window as any)?.twttr?.init && target.current !== null) {
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
        }
      }
    };
    initTwitter();
  }, []);

  return (
    <>
      {isLoading && <a href="https://twitter.com/Turunliikenne?ref_src=twsrc%5Etfw">Loading...</a>}
      <div ref={target} />
    </>
  );
};

export default IframeLink;
