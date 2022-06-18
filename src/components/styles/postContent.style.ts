// @ts-nocheck
import {createUseStyles} from 'react-jss'
import { THEME_VALUE, FONT } from '../../config/config.style'

export const PostStyle = createUseStyles({
  articleSection: ({isDarkTheme}) => ({
    'background-color': THEME_VALUE( isDarkTheme,"card"),
    'box-shadow': `2px 2px 4px 0 ${THEME_VALUE( isDarkTheme,"boxShadow")}`,
    margin: '1rem 0.5rem',
    padding: '1rem 0',
  }),
  articleBody: {
    'min-height': '85vh',
    padding: '0 2rem',
    'overflow-x': 'auto',
  },
  articleTitle: {
    fontFamily: FONT.secondary,
    fontSize: '2em',
    fontWeight: 'bold',
  },
  articleCover: {
    'text-align': 'center',
    'margin-top': '2em',
  },
  articleCoverImg: {
    'max-width': '100%',
    'textAlign': 'center',
    margin: ['0', 'auto'],
  },
  articleCoverCredit: {
    'font-style': 'italic',
    'font-size': '0.7em',
  },
  articleContent: ({isDarkTheme}) => ({
    fontSize: '1em',

    '& p, & h2, & h3': {
      margin: '1em auto',
    },

    '& h1, & h2, & h3': {
      fontFamily: FONT.secondary,
    },

    '& h2': {
      fontSize: '1.7em',
    },

    '& h3': {
      fontSize: '1.5em',
    },

    '& table': {...table(isDarkTheme)},

    '& blockquote': {
      padding: '0 2em',
      'border-left': `8px double ${THEME_VALUE( isDarkTheme,"blockquoteBorder")}`,
    },

    '& ul, & ol': {
      'margin': 'inherit',
      'padding': 'revert',
    },

    '& ul': {
      'list-style': 'inherit',
    },
    '& ol': {
      'list-style': 'decimal',
    },

    '& code': {
      color: THEME_VALUE(isDarkTheme, 'code'),
      backgroundColor: THEME_VALUE(isDarkTheme, 'codeBg'),
      padding: '.3em'
    },
  }),

  contentFigure: {
    'text-align': 'center',
    'max-width': '100%'
  },

})

const table = (isDarkTheme) => ({
  '& thead tr': {
    backgroundColor: THEME_VALUE(isDarkTheme, 'tableHeaderBg'),
    color: THEME_VALUE(isDarkTheme, 'tableHeaderColor'),

    '& th': {
      padding: '.3em 1.5em',

      '&:first-of-type': {
        paddingLeft: '1.5em'
      },
    }
  },
  '& tbody tr': {
    '&:nth-child(even)': {
      backgroundColor: THEME_VALUE(isDarkTheme, 'tableHeaderBgInverted'),
    },

    '&:hover': {
      color: THEME_VALUE(isDarkTheme, 'tableTrHoverText'),
      backgroundColor: THEME_VALUE(isDarkTheme, 'tableTrHover'),
    },

    '& td': {
      padding: '1em 1.5em',
    }
  }
})
