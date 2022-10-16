import { useEffect, useState } from "react";
import { ThemeProvider } from "react-jss";
import type { AppProps } from 'next/app';
import '../styles/globals.css'

import { toggleThemeStorage } from "../helpers/toggleTheme";
import { Footer, Header } from "../components";
import { GlobalStyle } from "../styles/reset.style";
import { ITHEME, THEME } from "../theme";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  const [ canRender, setCanRender ] = useState(false);
  const [ themeName, setThemeName ] = useState('light')
  const theme: ITHEME = THEME[ themeName ]
  GlobalStyle( { theme } );

  const changeTheme = (themeName = 'light') => {
    setThemeName(themeName);
    toggleThemeStorage(themeName);
  }


  useEffect(() => {
    const isSODarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      window.localStorage.getItem("theme") === 'dark' ||
      (window.localStorage.getItem("theme") === null && isSODarkMode)
    ) {
      changeTheme('dark');
    }

    if(document.body.classList.length === 0) {
      toggleThemeStorage('light');
    }
    setCanRender(true);
  }, []);


  return (
    canRender && (
      <ThemeProvider theme={THEME[ themeName ]}>
          <Header toggleTheme={changeTheme} />

          <div className="wrapper_site container max-w-7xl">
            <div
              className="wrapper_site--content column_wrapper"
              id="start-site"
            >
              <Component {...pageProps} />
            </div>
          </div>
          <Footer />
      </ThemeProvider>
    )
  );
}
