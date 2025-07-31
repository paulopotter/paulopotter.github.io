import { createUseStyles } from 'react-jss';
import { FONT, ITHEME } from 'theme';

export const SalesStyles = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  articleTitleContent: {
    display: 'block',
  },

  articleTitle: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: theme.color.primary,
    margin: '0 0 1em',
  },
  articleCallout: {
    fontSize: '1em',
    color: theme.color.secondary,
    margin: '0 0 2em',
    lineHeight: '1.5em',
    fontStyle: 'italic',
  },

  tabs: {},
  oneTab: {
    '&$tabPanel': {
      background: 'none',
      border: 'none',
      padding: 0,
    },
  },
  tabList: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'flex-start',
  },
  tabButton: {
    border: `1px solid ${theme.color.primary}`,
    margin: [0, '4px', '-1px', 0],
    padding: ['5px', '2em'],
    borderBottom: 'none',
  },
  tabItemActive: {
    background: theme.background,
    color: theme.button.color,
    borderBottomColor: theme.background,
  },
  tabPanel: {
    background: theme.background,
    margin: ['0', 'auto'],
    padding: ['2em', '1em'],
    border: `1px solid ${theme.color.primary}`,

    '& h3': {
      fontFamily: FONT.secondary,
      fontSize: '1.2em',
      fontWeight: 'bold',
    },

    '& h4': {
      // fontFamily: FONT.secondary,
      fontSize: '1.1em',
    },

    '& figure': {
      maxWidth: '350px',
      float: 'left',
      clear: 'left',
      paddingBottom: '1em',

      '& figure': {
        paddingBottom: '0',
      },

      '& figcaption': {
        fontSize: '0.6em',
        fontStyle: 'italic',
        marginTop: '0.3em',
        position: 'relative',
      },
    },

    '& table': {
      '& *': {
        fontWeight: 'normal',
      },
      '& th:first-child, & td:first-child': {
        textAlign: 'right',
        fontStyle: 'italic',
        paddingRight: '3px',
        verticalAlign: 'baseline',
      },
      '& th:last-child *, & th:last-child': {
        fontWeight: 'bold',
      },
      '& th:last-child, & td:last-child': {
        textAlign: 'left',
        paddingLeft: '6px',
        verticalAlign: 'bottom',
      },
    },

    '& hr': {
      clear: 'both',
      margin: '1em 0',
    },
  },
}));
