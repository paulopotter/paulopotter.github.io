import { useRouter } from 'next/router';
import { Context, useContext } from 'react';

import CONFIGS from 'services/configs';
import { ToggleThemeButton, Menu, Link } from './';

import { HeaderStyle } from './styles/header.style';

const { SITE_URL, SITE_NAME, SITE_NAME_SUBTITLE } = CONFIGS;

interface HeaderProps {
  toggleTheme: () => void;
  ThemeContext: Context<{ isDarkTheme: boolean }>;
}

export const Header = ({ toggleTheme, ThemeContext }: HeaderProps) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const headerStyle = HeaderStyle({ isDarkTheme });
  const router = useRouter();

  return (
    <>
      <a className={headerStyle.skipContent} tabIndex={0} href="#start-site">
        Pular para o conteúdo
      </a>
      <header className={headerStyle.header} id="start-page">
        <div className={headerStyle.wrapper}>
          <Menu />
          {router.pathname === '/' ? (
            <span className={headerStyle.titleLink}>
              <span className={headerStyle.titleName}>{SITE_NAME}</span> {SITE_NAME_SUBTITLE}
            </span>
          ) : (
            <Link
              href={SITE_URL}
              ariaLabel={`${SITE_NAME}. ${SITE_NAME_SUBTITLE}. Ir para página inicial.`}
              className={headerStyle.titleLink}
            >
              <span className={headerStyle.titleName}>{SITE_NAME}</span> {SITE_NAME_SUBTITLE}
            </Link>
          )}
          <ToggleThemeButton onClicked={toggleTheme} />
        </div>
      </header>
    </>
  );
};
