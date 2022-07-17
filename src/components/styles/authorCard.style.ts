import { createUseStyles } from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

type StyleProps = { isDarkTheme: boolean}

export const AuthorCardStyle = createUseStyles({
  header: ({isDarkTheme}: StyleProps) => ({
    'border-radius': 20,
    'backgroundColor': THEME_VALUE(isDarkTheme, 'card'),
    'padding': 40,
    margin: '0 auto',
    color: THEME_VALUE(isDarkTheme, 'text'),
    'text-align': 'center',
  }),
  img: {
    'border-radius': '50%',
    display: 'block',
    margin: 'auto',
  },
  name: ({isDarkTheme}: StyleProps) => ({
    color: THEME_VALUE(isDarkTheme, 'heading'),
    'font-size': '2em',

    '&:visited': {
        color: THEME_VALUE(isDarkTheme, 'heading'),

    }
  }),
  socialList: ({isDarkTheme}: StyleProps) => ({
    color: THEME_VALUE(isDarkTheme, 'heading'),
    'font-size': '2em',
  }),
  socialItem: ({isDarkTheme}: StyleProps) => ({
    color: THEME_VALUE(isDarkTheme, 'link'),
    'font-size': '1em',
    display: 'inline-block',
    margin: '0.2em'
  }),
  socialIcon: ({isDarkTheme}: StyleProps) => ({
    fill: THEME_VALUE(isDarkTheme, 'text'),

    '&:hover': {
      fill: THEME_VALUE(isDarkTheme, 'link'),
    },

    'a:focus &': {
      fill: THEME_VALUE(isDarkTheme, 'link'),
    }
  }),

})
