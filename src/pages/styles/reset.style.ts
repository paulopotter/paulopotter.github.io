import { createGlobalStyle } from "styled-components"
import { THEME_VALUE, FONT } from '../../config/config.style'


export const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${FONT.primary}, ${FONT.secondary}, ${FONT.mono}, sans-serif, serif;
  }

  body {
    text-rendering: auto;
    min-width: 320px;
    background-color: ${({isDarkTheme}) => THEME_VALUE(isDarkTheme, 'background') };
    color: ${({isDarkTheme}) => THEME_VALUE(isDarkTheme, 'text')};
  }

  a:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  *:focus {
      outline: 3px solid ${({isDarkTheme}) => THEME_VALUE(isDarkTheme, 'link')};
  }

  a,
  a:hover,
  a:visited,
  a:active {
      color: ${({isDarkTheme}) => THEME_VALUE(isDarkTheme, 'link')};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({isDarkTheme}) => THEME_VALUE(isDarkTheme, 'heading')};
  }
  h2 a:hover {
    opacity: 0.5;
    color: ${({isDarkTheme}) => THEME_VALUE(isDarkTheme, 'link')};
  }
`
