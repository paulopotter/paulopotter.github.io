import { createUseStyles } from 'react-jss';
import { MEDIA_QUERIES, ITHEME, FONT } from 'theme';

export const HeaderStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  header: {
    overflow: 'visible',
    padding: '1.5rem 0',
  },
  wrapper: {
    maxWidth: MEDIA_QUERIES.xxl,
    margin: '0 auto',
    display: 'flex',
  },

  skipContent: {
    fontSize: '1em',
    backgroundColor: [theme.button.background, '!important'],
    height: '3em',
    padding: '0.5em 1em',
    position: 'absolute',
    transform: 'translateY(-100%)',
    transition: 'transform 0.3s',
    color: [theme.button.color, '!important'],
    zIndex: 999,

    '&:visited': {
      color: [theme.button.color, '!important'],
    },

    '&:focus': {
      transform: 'translateY(0%)',
      outline: ['3px', 'solid', theme.border, '!important'],
    },
  },

  titleLink: {
    alignItems: 'center',
    color: [theme.color.primary, '!important'],
    display: 'flex',
    flexDirection: 'column',
    fontFamily: FONT.primary,
    fontSize: '1em',
    fontWeight: 400,
    margin: '0 auto',
    textDecoration: 'none !important',
    textTransform: 'uppercase',

    [`@media (min-width: ${MEDIA_QUERIES.xs})`]: {
      margin: 'auto',
      marginLeft: '.5em',
      flexDirection: 'row',
      fontSize: '1.25em',
    },
  },

  titleName: {
    color: theme.color.primary,
    fontWeight: 700,
    marginRight: '10px',
  },
}));
