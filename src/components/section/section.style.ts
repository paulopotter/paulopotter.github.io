import { createUseStyles } from 'react-jss';
import { ITHEME, MEDIA_QUERIES } from 'theme';

export const SectionStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  content: {
    margin: '1rem .5rem',
    padding: '1rem',
    backgroundColor: theme.card.background,
    boxShadow: ['0.13em', '0.13em', '0.25em', '0', theme.boxShadow],
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 150,
    position: 'relative',
    flexDirection: 'column',

    [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
      margin: '.5em 0 1em',
      maxWidth: '100%',
      width: '100%',
    },
  },
}))
