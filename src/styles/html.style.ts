import { createUseStyles } from 'react-jss'
import { ITHEME, FONT } from 'theme'

export const ResetStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  body: {
      "text-rendering": "auto",
      "min-width": 320,
      "background-color": theme.background,
      color: theme.color.primary,

      '& *:focus': {
          outline: [ '3px', 'solid', theme.outline ],
      },

      '& a': {
        "&:hover": {
          opacity: 0.8,
          "text-decoration": "underline",
        },
        "&, &:hover, &:visited, &:active": {
          color: theme.link,
        },
      },

      "& h1, & h2, & h3, & h4, & h5": {
        'font-family': FONT.secondary,
        color: theme.color.secondary,
      },

      "& h2 a:hover": {
        opacity: 0.5,
        color: theme.link,
      }
  } }
))
