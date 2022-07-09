import { Context, useContext } from "react";
import Link from "next/link";
import CONFIGS from "../services/configs";

import { ToggleThemeButton, Menu } from "./";
import { HeaderStyle } from "./styles/header.style";

const {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_SUBTITLE
  } = CONFIGS;

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
      <a className={headerStyle.skipContent} tabIndex={0} href="#start-site">
        Pular para o conteúdo
      </a>
      <header className={headerStyle.header} id="start-page">
        <div className={headerStyle.wrapper}>
          <Menu />
          <span className={headerStyle.title}>
            <Link href={`${SITE_URL}`}>
              <a
                className={headerStyle.titleLink}
                aria-label={`${SITE_NAME}. ${SITE_NAME_SUBTITLE}. Ir para página inicial.`}
              >
                <span className={headerStyle.titleName}>{SITE_NAME}</span>{" "}
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
