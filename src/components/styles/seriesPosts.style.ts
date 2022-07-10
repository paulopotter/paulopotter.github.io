// @ts-nocheck
import {createUseStyles} from 'react-jss'
import { THEME_VALUE } from '../../config/config.style'

export const SeriesPostsStyle = createUseStyles({
  wrapper: {
    border: '1px dashed',
    display: 'inline-block',
    padding: '1em',
    marginTop: '1.5em',
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
  textHighlight: ({isDarkTheme}) => ({
    textTransform: 'uppercase',
    margin: '0.7em 0',
    color: THEME_VALUE(isDarkTheme, "related"),
    display: 'inline-block',
    position: 'relative',
  }),
  listItem: {
    listStyleType: 'circle'
  },
})
