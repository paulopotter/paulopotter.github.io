// @ts-nocheck
import {createUseStyles} from 'react-jss'
import { FONT, THEME_VALUE } from '../config'

export const AuthorStyle = createUseStyles({
  // messageTitle: ({isDarkTheme}) => ({
  //      fontFamily: FONT.secondary,
  //      fontSize: '2em',
  //      textAlign: 'center',
  //      marginTop: '25%',
  //   }),
    content: ({isDarkTheme}) => ({
      margin: '1rem .5rem',
      padding: '1rem 0',
      backgroundColor: THEME_VALUE(isDarkTheme, 'card'),
      boxShadow: `0.13em 0.13em 0.25em 0 ${THEME_VALUE(isDarkTheme, 'boxShadow')}`,
    }),
})
