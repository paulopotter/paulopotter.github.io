import { createUseStyles } from 'react-jss'
import { ITHEME } from 'theme'

export const AuthorStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME)=> ({
    content: {
      margin: '1rem .5rem',
      padding: '1rem',
      backgroundColor: theme.card.background,
      boxShadow: [ '0.13em','0.13em','0.25em','0', theme.boxShadow ],
    },
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
    },
    socialList: {
      color: theme.color.secondary,
      fontSize: '2em',
    },
    socialItem: {
      color: theme.link,
      fontSize: '1em',
      display: 'inline-block',
      margin: '0.2em',
      width: '35px',
      height: '35px',
      verticalAlign: 'bottom',
    },
    socialIcon: {
      fill: theme.color.primary,
      color: theme.color.primary,
      width: '35px',
      height: '35px',

      '&:hover': {
        fill: theme.link,
        color: theme.link,
      }
    },
}))
