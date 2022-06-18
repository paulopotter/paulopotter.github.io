import { Context, useContext } from "react";
import Link from "next/link";
import CONFIGS from "../services/configs";

import { ToggleThemeButton, Menu } from "./";
import { HeaderStyle } from "./styles/header.style";

const { SITEURL, SITENAME, SITE_NAME_SUBTITLE } = CONFIGS;

interface HeaderProps {
  toggleTheme: () => void;
  ThemeContext: Context<{ isDarkTheme: boolean }>
}


export const Header = ({ toggleTheme, ThemeContext }: HeaderProps) => {
  const { isDarkTheme } = useContext(ThemeContext);
  // @ts-ignore
  const headerStyle = HeaderStyle({ isDarkTheme });

  return (
    <>
      <a className={headerStyle.skipContent} tab-index="0" href="#start-site">
        Pular para o conteúdo
      </a>
      <header className={headerStyle.header} id="start-page">
        <div className={headerStyle.wrapper}>
          <Menu />
          <span className={headerStyle.title}>
            <Link href={`${SITEURL}`}>
              <a
                className={headerStyle.titleLink}
                aria-label={`${SITENAME}. ${SITE_NAME_SUBTITLE}. Ir para página inicial.`}
              >
                <span className={headerStyle.titleName}>{SITENAME}</span>{" "}
                {SITE_NAME_SUBTITLE}
              </a>
            </Link>
          </span>
          <ToggleThemeButton onClicked={toggleTheme} />
        </div>
      </header>
    </>
  );
};
