import { createUseStyles } from "react-jss";
import { ITHEME, FONT } from "theme";

export const GlobalStyle = createUseStyles<string, unknown, ITHEME>(( theme ) => ({
  "@global": {
    "*": {
      fontFamily: [ FONT.primary, FONT.secondary, FONT.mono, 'sans-serif', 'serif' ],

      "&:focus": {
        outline: [ '3px', 'solid', theme.outline ],
      },
    },

    body: {
      backgroundColor: theme.background,
      color: theme.color.primary,
      minWidth: 320,
      textRendering: "auto",
    },

    a: {
      "&:hover": {
        opacity: 0.8,
        textDecoration: "underline",
      },
      "&, &:hover, &:visited, &:active": {
        color: theme.link,
      },
    },

    "h1, h2, h3, h4, h5": {
      color: theme.color.secondary,
    },

    "h2 a:hover": {
      opacity: 0.5,
    },

    ".footnotes ol li p": {
      display: "inline-block",
      marginTop: "1em",
    },

    'abbr': {
      cursor: 'help',
    },
  },
}));
