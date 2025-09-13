import { createUseStyles } from 'react-jss';
import { FONT, ITHEME, MEDIA_QUERIES } from 'theme';

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
    display: 'block',

    '& h3': {
      fontFamily: FONT.secondary,
      fontSize: '1.2em',
      fontWeight: 'bold',
      clear: 'both',
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
      float: 'left',
      clear: 'right',
      marginTop: '2em',
      width: 'calc(100% - 360px)',

      [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
        width: '100%',
        display: 'block',
        border: `1px solid ${theme.color.primary}`,

        '& th, & td': {
          display: 'block',
          width: '100%',
          textAlign: 'left',
        },
      },
      '& *': {
        fontWeight: 'normal',
      },

      '& tr': {
        borderBottom: `1px dashed ${theme.color.primary}`,
      },

      '& tr th': {
        borderBottom: `1px solid ${theme.color.primary}`,
        [`@media (max-width: ${MEDIA_QUERIES.xs})`]: {
          borderBottom: 'none',
        },
      },
      '& th:first-child, & td:first-child': {
        textAlign: 'left',
        fontStyle: 'italic',
        verticalAlign: 'baseline',
      },
      '& th:last-child *, & th:last-child, & th strong': {
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
