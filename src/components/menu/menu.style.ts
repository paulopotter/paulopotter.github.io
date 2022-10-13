// @ts-nocheck
import { createUseStyles } from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

export const MenuStyle = createUseStyles({
  menu: {
    display: 'inline',
    paddingInlineStart: '0.5em',
    position: 'relative',
    zIndex: 2,
  },
  menuOpened: {
    '&$menu': {
      transition: 'all 0.3s',
    }
  },
  menuOverlay: {
    display: 'inline',
    height: 0,
    width: 0,
    opacity: 0
  },
  menuOverlayActive: {
    '&$menuOverlay': {
      background: 'rgba(0,0,0,0.5)',
      content: " ",
      display: 'block',
      height: 'calc(100vh - 6em)',
      left: 0,
      position: 'absolute',
      bottom: 0,
      width: '100vw',
      zIndex: 1,
      opacity: 1,
      transition: 'opacity 0.4s',
    }
  },
  menuIcon: {
    backgroundColor: 'transparent',
    height: '3em',
    padding: 1,
    width: '3em',

    '&:focus, &:hover': {
      backgroundColor: 'transparent',
    },
  },
  menuIconSVG: ({ isDarkTheme }) => ({
    color: THEME_VALUE( isDarkTheme,"link"),
    display: 'inline-block',
    height: '3em',
    width: '3em',

    '&:hover': {
      color: `${THEME_VALUE( isDarkTheme,"linkHover")}`,
    },
  }),
  menuList: ({ isDarkTheme = false }) => ({
    backgroundColor: THEME_VALUE(isDarkTheme, "background"),
    margin: '0 auto',
    maxWidth: '1400px',
    width: '100vw',
    left: 0,
    opacity: 0,
    padding: '1em 2em',
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateY(-140%)',
    transition: 'transform 0.3s, opacity 0.3s',
    zIndex: 2,
  }),
  menuListActive: ({ isDarkTheme = false }) => ({
    '&$menuList':{
      borderTop: [ 2, 'dotted', THEME_VALUE(isDarkTheme, 'border') ],
      opacity: 1,
      top: '140%',
      transform: 'translateY(0)',
    }
  }),
  menuListItem: {
    display: 'inline-block',
    fontSize: '1rem',
    padding: '1rem 2rem',
  },
});
