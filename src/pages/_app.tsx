import "../components/styles/vendor/concisecss/concise.css";
import Link from "next/link";
import CONFIGS from "../services/configs";
import { createContext, useEffect, useState } from "react";
import { isDarkTheme, toggleTheme } from "../helpers/toggleTheme";
import { Footer, ToggleThemeButton, Menu } from "../components";
import { GlobalStyle } from "./styles/reset.style";

import { JssProvider } from "react-jss";

const { SITEURL, SITENAME, SITE_NAME_SUBTITLE } = CONFIGS;

export const ThemeContext = createContext({ isDarkTheme: false });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

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
      setIsDark(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme: isDark }}>
      {/* <ThemeContext.Provider value={isDark ? "dark" : "light"}> */}
      <JssProvider>
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

        <div className="wrapper_site">
          <div className="wrapper_site--content column_wrapper" id="start-site">
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
        <GlobalStyle isDarkTheme={isDark} />
      </JssProvider>
    </ThemeContext.Provider>
  );
}
