// @ts-nocheck
import {createUseStyles} from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

export const ThemeButtonStyle = createUseStyles({
  button: ({isDarkTheme}) => ({
    padding: '0.5em',
    height: '3em',
    width: '3em',
    position: 'absolute',
    top: "-3em",
    right: '3%',
    transition: 'transform 0.3s',
    'z-index': 1,
    'background-color': THEME_VALUE(isDarkTheme, "changeThemeButtonBg"),

    '&:focus': {
      outline: `3px solid ${THEME_VALUE(isDarkTheme,"changeThemeButton")}`,
    },

    '&:active, &:hover, &:focus' : {
      'background-color': THEME_VALUE(isDarkTheme, "changeThemeButtonBg"),
    },
  }),

  hasJs: {
    '&$button':{
        transform: 'translate(0, 100%)',

        '@media (min-width: 1300px)': {
          left: '83%',
          right: 'inherit',
        },
        '@media (max-width: 1299px)': {
          left: 'inherit',
          top: '3%',
          right: 0,
          transform: 'translateX(0)',
        },
    },
  },

  svg: ({isDarkTheme}) => ({
    transform: 'rotate(180deg)',
    fill: THEME_VALUE(isDarkTheme,"changeThemeButton"),
  })
})
