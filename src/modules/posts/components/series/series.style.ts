import { createUseStyles } from 'react-jss'

import { THEME } from 'theme';

export const SeriesPostsStyle = createUseStyles((theme: THEME) => ({
  wrapper: {
    border: '1px dashed',
    display: 'block',
    marginTop: '1.5em',
    padding: '1em',
  },
  title: {
    fontStyle: 'italic',
  },
  titleHighlight: {
    fontWeight: 700,
  },
  list: {
    marginLeft: '1rem',
  },
  textHighlight: {
    color: theme.related,
    display: 'inline-block',
    margin: '0.7em 0',
    position: 'relative',
    textTransform: 'uppercase',
  },

  listItem: {
    listStyleType: 'circle'
  },
}))
