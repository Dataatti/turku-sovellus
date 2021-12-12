/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import { css } from '@emotion/react';

export const TopBarLogo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <a
        css={css`
          line-height: 0;
        `}
      >
        <picture>
          <source
            media="(max-width: 899px)"
            srcSet="/turku_logo_mobile.png"
            height="60"
            width="42,55"
          />
          <source
            media="(min-width: 900px)"
            srcSet="/turku_logo_desktop.png"
            height="80"
            width="128"
          />
          <img src="/turku_logo_mobile.png" height="60" width="42,55" alt="Turku logo" />
        </picture>
      </a>
    </Link>
  );
};

export default TopBarLogo;
