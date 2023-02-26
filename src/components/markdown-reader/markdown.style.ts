import { createUseStyles } from 'react-jss';
import { ITHEME } from 'theme';

export const MarkdownStyle = createUseStyles<string, unknown, ITHEME>(() => ({
  contentFigure: {
    maxWidth: '100%',
    textAlign: 'center',
  },
}))
