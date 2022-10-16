import { createUseStyles } from 'react-jss'
import { ITHEME, MEDIA_QUERIES } from 'theme'

export const RelatedPostsStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',

    [ `@media (max-width: ${MEDIA_QUERIES.xs})` ]: {
       flexDirection: 'column-reverse',
    }
  },
  navLink: {
    borderTop: [ '1px', 'dashed', theme.border ],
    margin: '2em 0 1em',
    padding: '2em 1em',
    width: '50%',
    [ `@media (max-width: ${MEDIA_QUERIES.xs})` ]: {
       width: '100%',
    }
  },

  prevPost: {
  },

  nextPost: {
    textAlign: 'right',
  },

  onlyOne: {
    borderLeft: 'inherit !important',
    borderRight: 'inherit !important',
    textAlign: 'center !important',
    width: '100% !important',
  },
}))
