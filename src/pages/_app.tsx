import "../components/styles/vendor/concisecss/concise.css";
import Link from "next/link";
import { Menu } from "../components/menu";
import CONFIGS from "../services/configs";
import { useEffect } from "react";
import { isDarkTheme, toggleTheme } from "../helpers/toggleTheme";
import ToggleThemeButton from "../components/toggleThemeButton";

const { SITEURL, SITENAME, SITE_NAME_SUBTITLE } = CONFIGS;

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const isSODarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (
      isDarkTheme ||
      isSODarkMode
      // (window.localStorage.getItem("isDarkMode") === null && isSODarkMode)
    ) {
      toggleTheme();
    }
  }, []);

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
              href={SITEURL}
              className="header_site--title-link"
              aria-label={`${SITENAME}. ${SITE_NAME_SUBTITLE}. Ir para página inicial.`}
            >
              <>
                <span className="header_site--title-name">{SITENAME}</span>{" "}
                {SITE_NAME_SUBTITLE}
              </>
            </Link>
          </span>
          <ToggleThemeButton />
        </div>
      </header>

      <div className="wrapper_site">
        <div className="wrapper_site--content column_wrapper" id="start-site">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
