import { createUseStyles } from 'react-jss'
import { FONT } from '../config'

export const ErrorStyle = createUseStyles({
  messageTitle: {
       fontFamily: FONT.secondary,
       fontSize: '2em',
       textAlign: 'center',
       marginTop: '25%',
    },
})
