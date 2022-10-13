import { createUseStyles } from 'react-jss'
import { THEME_VALUE, FONT, MEDIA_QUERIES } from '../../config/config.style'

type StyleProps = {isDarkTheme: boolean}

export const HeaderStyle = createUseStyles({
  skipContent: ({ isDarkTheme }: StyleProps) => ({
    'font-size': '1em',
    'background-color': [ THEME_VALUE(isDarkTheme, "changeThemeButtonBg"), '!important' ],
    height: '3em',
    padding: '0.5em 1em',
    position: 'absolute',
    transform: 'translateY(-100%)',
    transition: 'transform 0.3s',
    color:[ THEME_VALUE(isDarkTheme, "changeThemeButton"), '!important' ],
    zIndex: 999,

    '&:visited': {
        color:[ THEME_VALUE(isDarkTheme, "changeThemeButton"), '!important' ],
    },

    '&:focus': {
      transform: 'translateY(0%)',
      outline:` 3px solid ${THEME_VALUE(isDarkTheme, "changeThemeButton")} !important`,
    }
  }),

  header: {
    overflow: 'visible',
    padding: '1.5rem 0',
  },
  wrapper: {
    'max-width': 1400,
    margin: '0 auto',
    display: 'flex',
  },
  titleLink: ({ isDarkTheme }: StyleProps) => ({
    'font-family': FONT.primary,
    'text-transform': 'uppercase',
    'font-size': '1em',
    'font-weight': 400,
    'text-decoration': 'none !important',
    color: [ THEME_VALUE(isDarkTheme, "text"), '!important' ],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',


     [ `@media (min-width: ${MEDIA_QUERIES.xs})` ]: {
        margin: 'auto',
        marginLeft: '.5em',
        flexDirection: 'row',
        fontSize: '1.25em',
     },
    //  '@media (max-width: 425px)': {
    //    display: 'inline-grid',
    //  },
  }),
  titleName: ({ isDarkTheme }: StyleProps) => ({
    'font-weight': 700,
    color: THEME_VALUE(isDarkTheme, "heading"),
    marginRight: '10px',

    // '@media (max-width: 400px)': {
    //   display: 'inline-block',
    //   width: '80%',
    // }
  })


})
