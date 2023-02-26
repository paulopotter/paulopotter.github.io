import { createUseStyles } from 'react-jss';
import { ITHEME } from 'theme';

export const ImagesStyle = createUseStyles<string, unknown, ITHEME>(() => ({

  articleCover: {
    marginTop: '2em',
    textAlign: 'center',
  },
  articleCoverImg: {
    margin: ['0', 'auto'],
    maxWidth: '100%',
    textAlign: 'center',
  },
  articleCoverCredit: {
    fontSize: '0.7em',
    fontStyle: 'italic',
  },
  contentFigure: {
    maxWidth: '100%',
    textAlign: 'center',
  },
}))
