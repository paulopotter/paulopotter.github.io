import { createUseStyles } from 'react-jss';
import { MEDIA_QUERIES, THEME } from 'theme';

export const FooterStyle = createUseStyles(( theme: THEME ) => ({
  backToTop: {
    alignItems: 'center',
    backgroundColor: theme.button.background,
    bottom: '-5em',
    color: theme.button.color,
    display: 'flex',
    padding: '0.5em',
    position: 'fixed',
    right: '3%',
    transition: 'bottom 0.5s ease-out',

    '&:focus': {
      outline: [ '3px','solid', theme.outline ],
    },

    '&:active, &:hover, &:focus': {
      backgroundColor: theme.button.background,
    },

    [ `@media (min-width: ${MEDIA_QUERIES.xxl})` ]: {
      left: '87%',
      right: 'inherit',
    },

    '& svg': {
      color: theme.button.color,
      height: '3em',
      width: '3em',
    },

    '&:hover $backToTopText': {
      display: 'block',
    }

  },
  backToTopShow: {
    '&$backToTop': {
      bottom: 0,
    }
  },
  backToTopText: {
    float: 'left',
    display: 'none',
    padding: '0 0.5em',
  },

}))
