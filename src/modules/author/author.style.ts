import { createUseStyles } from 'react-jss'
import { THEME_VALUE } from '../../config'

type StyleProp = {isDarkTheme: boolean}

export const AuthorStyle = createUseStyles({
    content: ({ isDarkTheme }: StyleProp) => ({
      margin: '1rem .5rem',
      padding: '1rem',
      backgroundColor: THEME_VALUE(isDarkTheme, 'card'),
      boxShadow: `0.13em 0.13em 0.25em 0 ${THEME_VALUE(isDarkTheme, 'boxShadow')}`,
    }),

    img: {
      borderRadius: '15%',
      margin: '0 1em 1em',
      display: 'inline-block',
      float: 'right',
      verticalAlign: 'top'
    },

    name: {
      fontSize: '1.2em',
      fontWeight: 'bold',
    },

    highlight: {
      fontSize: '1.1em',
      fontWeight: 'bold',
    },

    section: {
      marginTop: '1em',
      paddingLeft: '1em',
      paddingRight: '1em',
    },

    sectionDivision: {
      clear: 'both',
    },

    socialList: ({ isDarkTheme }: StyleProp) => ({
      color: THEME_VALUE(isDarkTheme, 'heading'),
      'font-size': '2em',
    }),
    socialItem: ({ isDarkTheme }: StyleProp) => ({
      color: THEME_VALUE(isDarkTheme, 'link'),
      'font-size': '1em',
      display: 'inline-block',
      margin: '0.2em',
      width: '35px',
      height: '35px',
      verticalAlign: 'bottom',
    }),
    socialIcon: ({ isDarkTheme }: StyleProp) => ({
      fill: THEME_VALUE(isDarkTheme, 'text'),

      '&:hover': {
        fill: THEME_VALUE(isDarkTheme, 'link'),
      }
    }),

    timeline: {
        borderLeft: '2px solid',
    },

    timelineMark: {
      listStyle: 'inside disclosure-closed',
      padding: '1em 0',

      '&:first-of-type': {
        padding: 0
      }
    },
    timelineDate: {
      fontWeight: 'bold',
    },
    timelineContent: {
      display: 'block',
      paddingLeft: '1em',
    },
    timelineJobTitle: {
      fontSize: '1.2em',
    },
    timelineCompany: {
      fontStyle: 'italic',
    },

    languageIcon : {
      width: '4em !important',
      height: '4em !important',
    }

})
