import { createContext, useEffect, useState } from "react";
import { JssProvider } from "react-jss";
import type { AppProps } from 'next/app';
import '../styles/globals.css'

import { toggleThemeStorage } from "../helpers/toggleTheme";
import { Footer, Header } from "../components";
import { GlobalStyle } from "../styles/reset.style";
import { ResetStyle } from "../styles/html.style";

export const ThemeContext = createContext({ isDarkTheme: false });

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  const [canRender, setCanRender] = useState(false);
  const darkTheme = ResetStyle({ isDarkTheme: true });
  const lightTheme = ResetStyle({ isDarkTheme: false });
  const themes = { light: lightTheme, dark: darkTheme };

  const toggleTheme = () => {
    setIsDark(!isDark);
    toggleThemeStorage(isDark, themes);
  };

  useEffect(() => {
    const isSODarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      isDark ||
      (window.localStorage.getItem("isDarkMode") !== "false" && isSODarkMode)
    ) {
      toggleTheme();
    }
    setCanRender(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  GlobalStyle();

  return (
    canRender && (
      <ThemeContext.Provider value={{ isDarkTheme: isDark }}>
        <JssProvider>
          <Header toggleTheme={toggleTheme} ThemeContext={ThemeContext} />

          <div className="wrapper_site container max-w-7xl">
            <div
              className="wrapper_site--content column_wrapper"
              id="start-site"
            >
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
        </JssProvider>
      </ThemeContext.Provider>
    )
  );
}
