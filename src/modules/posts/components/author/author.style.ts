import { createUseStyles } from 'react-jss';
import { ITHEME, MEDIA_QUERIES } from 'theme';

export const AuthorCardStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({

  header: {
    backgroundColor: theme.card.background,
    borderRadius: 10,
    color: theme.color.primary,
    margin: '1em auto 0',
    padding: 40,
    display: 'flex',
    // remover
    border: '1px dashed black',

    [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
      flexDirection: 'column',
    }
  },

  img: {
    borderRadius: '50%',
    display: 'block',
    marginRight: '1em',
    verticalAlign: 'top',

    [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
      borderRadius: '50%',
      margin: 'auto',
      verticalAlign: 'middle'
    }
  },

  name: {
    color: theme.color.secondary,
    fontSize: '2em',

    [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
      display: 'block',
      margin: '0.5em 0 0',
      textAlign: 'center',
    }
  },

  socialList: {
    color: theme.color.secondary,
    fontSize: '2em',
  },

  socialItem: {
    display: 'inline-block',
    fontSize: '1em',
    margin: '0.2em',

    '&:first-of-type': {
      margin: '0 0.2em 0 0'
    },

    [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
      '&:first-of-type': {
        margin: '0 0.2em'
      },

      display: 'flex',
      flexDirection: 'column',
      verticalAlign: 'bottom',
    },
  },

  socialItemLink: {
    '& *': {
      color: theme.color.primary,
      fill: theme.color.primary,
    },

    '&:hover *, &:focus *': {
      color: theme.link,
      fill: theme.link,
    },
  },

  socialIcon: {
    height: '35px',
    width: '35px',
    display: 'inline-block',
  },

  socialIconName: {
    fontSize: '0.7em',
    margin: '0 0.5em',

    [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
      // display: 'none',
    },
  },



}));
