import { createUseStyles } from 'react-jss'
import { FONT, THEME_VALUE } from '../config'

export const ResetStyle = createUseStyles({
  body: ({ isDarkTheme }: {isDarkTheme: boolean}) => ({
      "text-rendering": "auto",
      "min-width": 320,
      "background-color": THEME_VALUE(isDarkTheme, "background"),
      color: THEME_VALUE(isDarkTheme, "text"),

      '& *:focus': {
          outline: `3px solid ${THEME_VALUE(isDarkTheme, 'link')}`,
      },

      '& a': {
        "&:hover": {
          opacity: 0.8,
          "text-decoration": "underline",
        },
        "&, &:hover, &:visited, &:active": {
          color: THEME_VALUE(isDarkTheme, "link"),
        },
      },

      "& h1, & h2, & h3, & h4, & h5": {
        'font-family': FONT.secondary,
        color: THEME_VALUE(isDarkTheme, "heading"),
      },

      "& h2 a:hover": {
        opacity: 0.5,
        color: THEME_VALUE(isDarkTheme, "link"),
      },
    }),
})
