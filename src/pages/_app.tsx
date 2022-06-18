import '../styles/globals.css'

import { createContext, useEffect, useState } from "react";
import { JssProvider } from "react-jss";

import { toggleThemeStorage } from "../helpers/toggleTheme";
import { Footer, Header } from "../components";
import { GlobalStyle } from "../styles/reset.style";
import { ResetStyle } from "../styles/html.style";

export const ThemeContext = createContext({ isDarkTheme: false });

// This default export is required in a new `pages/_app.js` file.
// @ts-ignore
export default function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  const [canRender, setCanRender] = useState(false);
  // @ts-ignore
  const darkTheme = ResetStyle({ isDarkTheme: true });
  // @ts-ignore
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
