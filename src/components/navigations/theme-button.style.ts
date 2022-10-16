import { createUseStyles } from 'react-jss';
import { ITHEME, MEDIA_QUERIES } from 'theme';

export const ThemeButtonStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  button: {
    padding: '0.5em',
    height: '3em',
    width: '3em',
    top: '-3em',
    right: '3%',
    transition: 'transform 0.3s',
    zIndex: 1,
    backgroundColor: theme.button.inverted.background,

    '&:focus': {
      outline: `3px solid ${theme.button.inverted.color}`,
    },
    '&:active, &:hover, &:focus': {
      backgroundColor: theme.button.inverted.background,
    },

    [ `@media (min-width: ${MEDIA_QUERIES.xs})` ]: {
      position: 'absolute',
    },

    [ `@media (min-width: ${MEDIA_QUERIES.xxl})` ]: {
      left: '87%',
      right: 'inherit',
    },
  },

  hasJs: {
    [ `@media (min-width: ${MEDIA_QUERIES.xs})` ]: {
      '&$button': {
        transform: 'translate(0, 100%)',
      },
    },
  },

  svg: {
    transform: 'rotate(180deg)',
    color: theme.button.inverted.color,
    width: 32,
    height: 32,
  },
}));
