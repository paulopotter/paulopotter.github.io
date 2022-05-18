
import {createUseStyles} from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

export const MenuStyle = createUseStyles({
  menu: {
      'display': 'inline',
      'zIndex': 9,
      'paddingInlineStart': 0,
  },
  menuOpened: {
    '&$menu': {
      bottom: 0,
      transition: 'all 0.3s',
    }
  },
  menuOverlay: {
    width: 0,
    height: 0,
    display: 'inline',
  },
  menuOverlayActive: {
    '&$menuOverlay': {
      background: 'rgba(0,0,0,0.5)',
      content: " ",
      display: 'block',
      height: '100vh',
      left: 0,
      position: 'absolute',
      top: '5.5rem',
      width: '100vw',
      'z-index': 1,
    }
  },
  menuIcon: {
    padding: 1,
    height: '3em',
    width: '3em',
    'background-color': 'transparent',
    '&:focus, &:hover':  {
      'background-color': 'transparent',
    },
  },
  menuIconSVG: ({isDarkTheme}) => ({
      fill: THEME_VALUE( isDarkTheme,"link"),
      height: '100%',
      display: 'inline-block',
      '&:hover': {
          fill: `${THEME_VALUE( isDarkTheme,"link")}aa`,
      },
    }),
    menuList: ({isDarkTheme = false}) => ({
      position: 'absolute',
      'z-index': 9,
      'background-color': THEME_VALUE(isDarkTheme, "background"),
      padding: '1em 2em',
      top: 0,
      right: 0,
      left: '4rem',
      transform: 'translateY(-100%)',
      transition: 'transform 0.3s, opacity 0.3s',
      opacity: 0,
      'max-width': '1380px',
      margin: '0 auto'
    }),
    menuListActive: {
      '&$menuList':{
      transform: 'translateY(0)',
      opacity: 1,
      '@media (max-width: 425px)': {
        transition: 'transform 0.3s, opacity 0.5s',
        display: 'block',
        top: 88,
        left: 0,
      },
    }},

    menuListItem: {
      'font-size': '1rem',
      display: 'inline-block',
      padding: '1rem 2rem',

      '@media (max-width: 400px)': {
        display: 'block',
      },
    },
})
