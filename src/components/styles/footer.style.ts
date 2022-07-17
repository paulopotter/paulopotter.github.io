import {createUseStyles} from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

export const FooterStyle = createUseStyles({
  backToTop: ({isDarkTheme}: {isDarkTheme: boolean}) => ({
    padding: '0.5em',
    position: 'fixed',
    display: 'flex',
    'align-items': 'center',
    bottom: '-5em',
    right: '3%',
    transition: 'bottom 0.5s ease-out',
    'background-color': THEME_VALUE( isDarkTheme, "card"),
    color: THEME_VALUE( isDarkTheme, "link"),

    '&:focus': {
      'background-color': THEME_VALUE( isDarkTheme, "card"),
      outline: `3px solid ${THEME_VALUE( isDarkTheme, "link")}`,
    },


    '&:active, &:hover': {
      'background-color': THEME_VALUE( isDarkTheme, "card"),
    },

    ['@media (min-width: 1400px)']: {
      left: '87%',
      right: 'inherit',
    },

    '& svg': {
      height: '3em',
      width: '3em',
      fill: THEME_VALUE( isDarkTheme, "link"),
    },

    '&:hover $backToTopText': {
      display: 'block',
    }

  }),
  backToTopShow: {
    '&$backToTop': {
     bottom: 0,
  }},
  backToTopText: {
    float: 'left',
    display: 'none',
    padding: '0 0.5em',
  },
})
