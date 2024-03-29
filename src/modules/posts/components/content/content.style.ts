import { createUseStyles } from 'react-jss';
import { ITHEME, FONT } from 'theme';

export const PostStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  articleSection: {
    backgroundColor: theme.card.background,
    boxShadow: ['2px', '2px', '4px', '0', theme.boxShadow],
    margin: '1rem 0.5rem',
    padding: '1rem 0',
  },
  articleBody: {
    minHeight: '85vh',
    overflowX: 'auto',
    padding: '0 2rem',
  },
  articleTitle: {
    fontFamily: FONT.secondary,
    fontSize: '2em',
    fontWeight: 'bold',
  },
  articleContent: {
    fontSize: '1em',

    '& p, & h2, & h3': {
      margin: '1em auto',
    },

    '& h1, & h2, & h3': {
      fontFamily: FONT.secondary,
    },

    '& h2': {
      fontSize: '1.7em',
    },

    '& h3': {
      fontSize: '1.5em',
    },
    '& blockquote': {
      borderLeft: ['8px', 'double', theme.border],
      padding: '0 2em',
    },
    '& ul, & ol': {
      margin: 'inherit',
      padding: 'revert',
    },
    '& ul': {
      listStyle: 'inherit',
    },
    '& ol': {
      listStyle: 'decimal',
    },
    '& code': {
      color: theme.code.color,
      backgroundColor: theme.code.background,
      padding: '.3em',
    },

    '& table': { ...table(theme) },
  },
}));

const table = (theme: ITHEME) => ({
  '& thead tr': {
    backgroundColor: theme.table.header.background.primary,
    color: theme.table.header.color,

    '& th': {
      padding: '.3em 1.5em',

      '&:first-of-type': {
        paddingLeft: '1.5em',
      },
    },
  },
  '& tbody tr': {
    '& td': {
      padding: '1em 1.5em',
    },
    '&:nth-child(even)': {
      backgroundColor: theme.table.body.background.primary,
    },
    '&:hover': {
      backgroundColor: theme.table.body.background.secondary,
      cursor: 'default',
    },
  },
});
