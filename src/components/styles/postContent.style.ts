import {createUseStyles} from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

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
  articleCover: {
    'text-align': 'center',
    'margin-top': '2em',
  },
  articleCoverImg: {
    'max-width': '100%',
  },
  articleCoverCredit: {
    'font-style': 'italic',
    'font-size': '0.7em',
  },
  articleContent: ({isDarkTheme}) => ({
    '& p, & h2, & h3': {
      margin: '1em auto',
    },

    '& blockquote': {
      padding: '0 2em',
      'border-left': `8px double ${THEME_VALUE( isDarkTheme,"blockquoteBorder")}`,
    },
  }),

  contentFigure: {
    'text-align': 'center',

    'max-width': '100%'
  }

})
