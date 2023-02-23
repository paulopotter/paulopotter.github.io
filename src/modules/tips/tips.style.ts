import { createUseStyles } from 'react-jss';
import { ITHEME, FONT } from 'theme';

export const TipsStyles = createUseStyles<string, unknown, ITHEME>((theme: ITHEME) => ({
  article: {
    backgroundColor: theme.card.background,
    boxShadow: ['2px', '2px', '4px', '0', theme.boxShadow],
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 150,
    padding: '1em',
    position: 'relative',
    margin: '.5em 0',
    maxWidth: '100%',
    width: '100%',

  },
  articleContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  articleTitle: {
    color: theme.color.primary,
    fontFamily: FONT.primary,
    fontSize: '1.1em',
    fontWeight: 'bold',
    letterSpacing: '-0.5px',
    lineHeight: 1,
    marginBottom: '1em'
  },
}))
