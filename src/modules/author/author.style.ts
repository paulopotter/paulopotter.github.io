import { createUseStyles } from 'react-jss';
import { ITHEME, MEDIA_QUERIES } from 'theme';

export const AuthorStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  content: {
    display: 'block',
  },
  img: {
    borderRadius: '15%',
    margin: '0 1em 1em',
    display: 'inline-block',
    float: 'right',
    verticalAlign: 'top',

    [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
      display: 'block',
      margin: '0 auto',
      float: 'initial'
    },
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

  sectionTitle: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },

  sectionDivision: {
    clear: 'both',
  },

  languageIcon: {
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
    },
  },
}));
