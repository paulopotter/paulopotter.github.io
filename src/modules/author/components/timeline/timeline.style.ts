import { createUseStyles } from 'react-jss';
import { ITHEME } from 'theme';

export const TimelineStyle = createUseStyles<string, unknown, ITHEME>(() => ({

  timeline: {
    borderLeft: '2px solid',
  },

  timelineMark: {
    listStyle: 'inside disclosure-closed',
    padding: '1em 0',

    '&:first-of-type': {
      padding: 0,
    },
  },

  timelineDate: {
    fontWeight: 'bold',
  },

  timelineContent: {
    display: 'block',
    paddingLeft: '1em',
  },

  timelineJobTitle: {
    fontSize: '1.2em',
  },

  timelineCompany: {
    fontStyle: 'italic',
  },

}))
