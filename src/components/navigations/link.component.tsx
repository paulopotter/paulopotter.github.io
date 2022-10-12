import { useContext } from 'react';
import { default as NextLink } from 'next/link';
import { RiShareBoxLine } from '@mindyjs/icons';

import CONFIGS from 'services/configs';
import { ThemeContext } from 'pages/_app';
import { LinkStyle } from './link.style';

interface LinkProps {
  className?: string;
  ariaLabel?: string;
  children: any;
  disableIcon?: boolean;
  href: string;
  tabIndex?: number;
  title?: string;
}

export const Link = ({
  children,
  ariaLabel,
  className,
  disableIcon = false,
  href,
  tabIndex,
  title,
}: LinkProps): JSX.Element => {
  const { isDarkTheme } = useContext(ThemeContext);
  // @ts-expect-error: I will resolve-it
  const style = LinkStyle({ isDarkTheme });

  return isExternalLink(href) ? (
    <NextLink href={href}>
      <a target="_blank" rel="noreferrer" tabIndex={tabIndex} title={title} className={className} aria-label={ariaLabel}>
        {children}
        {!disableIcon && <RiShareBoxLine className={style.icon} />}
      </a>
    </NextLink>
  ) : (
    <NextLink href={href}>
      <a target="_self" rel="noreferrer" tabIndex={tabIndex} title={title} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    </NextLink>
  );
};

const isExternalLink = (url: string): boolean =>
  (url.indexOf('http://') === 0 || url.indexOf('https://') === 0) &&
  url.indexOf(CONFIGS.SITE_URL) === -1;
