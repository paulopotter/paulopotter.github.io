import { createUseStyles } from 'react-jss';
import { ITHEME } from 'theme';

export const EstimateStyle = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  content: {
    display: 'block',
  },

  head: {
    fontSize: '1.1em',
    fontStyle: 'italic',
    marginBottom: '1em',
  },

  subHead: {
    fontSize: '1.6em',
    fontWeight: 'bold',
  },

  line: {
    listStyle: 'outside disclosure-closed',
    padding: '0 0 0.5em',
    marginTop: '0.4em',
    marginLeft: '1em',
    lineHeight: 1.7,
    color: theme.outline,
  },

  question: {
    fontSize: '1.3em',
    // fontWeight: 'bold',
    fontStyle: 'italic',
    color: theme.outline,
  },

  answer: {
    fontSize: '1em',
    fontWeight: 'bold',
    // fontStyle: 'italic',
    color: theme.color.secondary,
  },

  highlight: {
    fontSize: '1em',
    // fontWeight: 'bold',
    fontStyle: 'italic',
    color: theme.color.primary,
  },
}));
