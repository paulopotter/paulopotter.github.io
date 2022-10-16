import { useRouter } from 'next/router';
import { useTheme } from 'react-jss';

import CONFIGS from 'services/configs';
import { ITHEME } from 'theme';
import { ToggleThemeButton, Menu, Link } from '..';

import { HeaderStyle } from './header.style';

const { SITE_URL, SITE_NAME, SITE_NAME_SUBTITLE } = CONFIGS;

interface HeaderProps {
  toggleTheme: (themeName: string) => void;
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  const theme: ITHEME = useTheme();
  const router = useRouter();
  const style = HeaderStyle({ theme } );

  return (
    <>
      <a className={style.skipContent} tabIndex={0} href="#start-site">
        Pular para o conteúdo
      </a>
      <header className={style.header} id="start-page">
        <div className={style.wrapper}>
          <Menu />
          {router.pathname === '/' ? (
            <span className={style.titleLink}>
              <span className={style.titleName}>{SITE_NAME}</span> {SITE_NAME_SUBTITLE}
            </span>
          ) : (
            <Link
              href={SITE_URL}
              ariaLabel={`${SITE_NAME}. ${SITE_NAME_SUBTITLE}. Ir para página inicial.`}
              className={style.titleLink}
            >
              <span className={style.titleName}>{SITE_NAME}</span> {SITE_NAME_SUBTITLE}
            </Link>
          )}
          <ToggleThemeButton onClicked={toggleTheme} />
        </div>
      </header>
    </>
  );
};
