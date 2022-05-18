import "../components/styles/vendor/concisecss/concise.css";

import { createContext, useEffect, useState } from "react";
import { toggleThemeStorage } from "../helpers/toggleTheme";
import { Footer, Header } from "../components";
import { GlobalStyle } from "./styles/reset.style";

import { JssProvider } from "react-jss";

export const ThemeContext = createContext({ isDarkTheme: false });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  const [canRender, setCanRender] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    toggleThemeStorage(isDark);
  };

  useEffect(() => {
    const isSODarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      isDark ||
      // isSODarkMode
      (window.localStorage.getItem("isDarkMode") !== "false" && isSODarkMode)
    ) {
      toggleTheme();
      setIsDark(true);
    }
    setCanRender(true);
  }, []);

  return (
    canRender && (
      <ThemeContext.Provider value={{ isDarkTheme: isDark }}>
        <JssProvider>
          <Header toggleTheme={toggleTheme} ThemeContext={ThemeContext} />

          <div className="wrapper_site">
            <div
              className="wrapper_site--content column_wrapper"
              id="start-site"
            >
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
          <GlobalStyle isDarkTheme={isDark} />
        </JssProvider>
      </ThemeContext.Provider>
    )
  );
}
