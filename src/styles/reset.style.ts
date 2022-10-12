import { createUseStyles } from "react-jss";
import { THEME_VALUE, FONT } from "../config";

export const GlobalStyle = createUseStyles({
  "@global": {
    "*": {
      "font-family": `${FONT.primary}, ${FONT.secondary}, ${FONT.mono}, sans-serif, serif`,

      "&:focus": {
        outline: `3px solid ${THEME_VALUE(false, "link")}`,
      },
    },

    body: {
      "text-rendering": "auto",
      "min-width": 320,
      "background-color": THEME_VALUE(false, "background"),
      color: THEME_VALUE(false, "text"),
    },

    a: {
      "&:hover": {
        opacity: 0.8,
        "text-decoration": "underline",
      },
      "&, &:hover, &:visited, &:active": {
        color: THEME_VALUE(false, "link"),
      },
    },

    "h1, h2, h3, h4, h5": {
      color: THEME_VALUE(false, "heading"),
    },

    "h2 a:hover": {
      opacity: 0.5,
      color: THEME_VALUE(false, "link"),
    },

    ".footnotes ol li p": {
      "margin-top": "1em",
      display: "inline-block",
    },

    'abbr': {
      cursor: 'help',
    },
  },
});
