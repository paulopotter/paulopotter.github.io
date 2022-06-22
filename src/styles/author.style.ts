import {createUseStyles} from 'react-jss'
import { FONT } from '../config'

export const AuthorStyle = createUseStyles({
  // @ts-ignore
  messageTitle: ({isDarkTheme}) => ({
       fontFamily: FONT.secondary,
       fontSize: '2em',
       textAlign: 'center',
       marginTop: '25%',
    }),
})
