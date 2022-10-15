import { createUseStyles } from 'react-jss';
import { THEME, FONT, MEDIA_QUERIES } from 'theme';

export const ListOfPostStyle = createUseStyles((theme: THEME) => ({
  article: {
    backgroundColor: theme.card.background,
    boxShadow: [ '2px', '2px', '4px', '0', theme.boxShadow ],
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2em 1em',
    maxWidth: '50%',
    minHeight: 150,
    padding: '1em',
    position: 'relative',
    width: '45%',

    [ `@media (max-width: ${MEDIA_QUERIES.xs})` ]: {
      margin: '.5em 0',
      maxWidth: '100%',
      width: '100%',
    },
  },
  articleFirst: {
    flexDirection: 'column-reverse',
    minWidth: '100%',
    width: '100%',
  },
  articleContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    [ `@media (min-width: ${MEDIA_QUERIES.lg})` ]: {
      ':not($articleFirst) > &':{
        width: 'calc(100% - 13em)',
      }
    },

  },
  titleLink: {
    color: theme.color.primary,
    fontFamily: FONT.primary,
    fontSize: '1.1em',
    fontWeight: 'bold',
    letterSpacing: '-0.5px',
    lineHeight: 1,

    '&:visited, &:focus': {
      color: theme.color.primary,
    },
  },

  imageCover: {
    backgroundColor: theme.card.background,
    boxShadow: [ '2px', '2px', '4px', '0', theme.boxShadow ],
    height: '11em',
    objectFit: 'cover',
    padding: '1em',
    position: 'absolute',
    right: 0,
    top: '-0.8em',
    width: '11em',

    '$articleFirst &': {
      backgroundColor: 'inherit',
      boxShadow: 'inherit',
      display: 'block',
      height: '15em',
      left: 0,
      padding: 0,
      position: 'relative',
      top: 0,
      width: '100%',
    },
  },
  imageLink: {
      display: 'block',

      '$articleFirst &': {
        position: 'relative',
        width: '100%',
        height: '15em',
        padding: 0,
        margin: '0 0 1em',
        display: 'block',
      },

    [ `@media (max-width: ${MEDIA_QUERIES.lg})` ]: {
        display: 'none',
    }
  },
  category: {
    color: theme.color.tertiary,
    fontSize: '0.8125em',
    fontWeight: 700,
    marginTop: '2em',
    textTransform: 'capitalize',
  },
}));
