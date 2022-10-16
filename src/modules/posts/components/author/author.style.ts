import { createUseStyles } from 'react-jss'
import { ITHEME } from 'theme';

export const AuthorCardStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  header: {
    backgroundColor: theme.card.background,
    borderRadius: 20,
    color: theme.color.primary,
    margin: '0 auto',
    padding: 40,
    textAlign: 'center',
  },
  img: {
    borderRadius: '50%',
    display: 'block',
    margin: 'auto',
  },

  name: {
    color: theme.color.secondary,
    fontSize: '2em',

    '&:visited': {
      color: theme.color.secondary,
    },
  },
  socialList: {
    color: theme.color.secondary,
    fontSize: '2em',
  },
  socialItem: {
    color: theme.link,
    display: 'inline-block',
    fontSize: '1em',
    height: '35px',
    margin: '0.2em',
    verticalAlign: 'bottom',
    width: '35px',
  },
  socialIcon: {
    color: theme.color.primary,
    fill: theme.color.primary,
    height: '35px',
    width: '35px',

    '&:hover, a:focus &': {
      color: theme.link,
      fill: theme.link,
    },
  },

}))
