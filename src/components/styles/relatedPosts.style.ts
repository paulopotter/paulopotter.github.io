// @ts-nocheck
import {createUseStyles} from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

export const RelatedPostsStyle = createUseStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 500px)': {
       flexDirection: 'column-reverse',
    }
  },
  navLink: ({isDarkTheme}) => ({
    borderTop: `1px dashed ${THEME_VALUE(isDarkTheme, "border")}`,
    margin: '2em 0 1em',
    padding: '2em 1em',
    width: '50%',
    '@media (max-width: 500px)': {
       width: '100%',
    }
  }),

  prevPost: {
  },

  nextPost: {
    textAlign: 'right',
  },

  onlyOne: {
    width: '100% !important',
    textAlign: 'center !important',
    borderRight: 'inherit !important',
    borderLeft: 'inherit !important',
  },
})
