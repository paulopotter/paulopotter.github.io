import { useContext } from "react";
import Link from "next/link";
import CONFIGS from "../services/configs";

import { ToggleThemeButton, Menu } from "./";
import { HeaderStyle } from "./styles/header.style";

const { SITEURL, SITENAME, SITE_NAME_SUBTITLE } = CONFIGS;

export const Header = ({ toggleTheme, ThemeContext }) => {
  const { isDarkTheme = false } = useContext(ThemeContext);
  const headerStyle = HeaderStyle({ isDarkTheme });

  return (
    <>
      <a className="site__skip-content" tab-index="0" href="#start-site">
        Pular para o conteúdo
      </a>
      <header className="header_site" id="start-page">
        <div className="header_site--wrapper">
          <Menu />
          <span className="header_site--title">
            <Link
              href={`${SITEURL}`}
              className="header_site--title-link"
              aria-label={`${SITENAME}. ${SITE_NAME_SUBTITLE}. Ir para página inicial.`}
            >
              <a>
                <span className="header_site--title-name">{SITENAME}</span>{" "}
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
