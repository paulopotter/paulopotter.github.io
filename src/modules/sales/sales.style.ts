import { createUseStyles } from 'react-jss';
import { ITHEME, MEDIA_QUERIES } from 'theme';

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

  tabs: {
  },
  oneTab: {
    '&$tabPanel': {
      background: 'none',
      border: 'none',
      padding: 0,
    }
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
  },
}));
