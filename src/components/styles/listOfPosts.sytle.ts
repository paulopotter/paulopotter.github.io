import { createUseStyles } from 'react-jss'
import { FONT, THEME_VALUE, MEDIA_QUERIES } from '../../config'

type StyleProp = {isDarkTheme: boolean}

export const ListOfPostStyle = createUseStyles({
  article: ({ isDarkTheme }: StyleProp) => ({
    display: 'flex',
    'justify-content': 'space-between',
    margin: '2em 1em',
    'max-width': '50%',
    'min-height': 150,
    padding: '1em',
    position: 'relative',
    width: '45%',
    'background-color': THEME_VALUE( isDarkTheme, "card"),
    'box-shadow': `2px 2px 4px 0 ${THEME_VALUE( isDarkTheme, "boxShadow")}`,

    [ `@media (max-width: ${MEDIA_QUERIES.small})` ]: {
      margin: '.5em 0',
      'max-width': '100%',
      width: '100%',
    },

    [ `@media (max-width: ${MEDIA_QUERIES.medium})` ]: {
      'max-width': '100%',
      width: '100%',
    },
  }),
  articleFirst: {
    margin: '2em 1em',
    'flex-direction': 'column-reverse',
    'min-width': '100%',
    width: '100%',
  },

  articleContent: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'space-between',
    width: 'calc(100% - 13em)',

    [ `@media (max-width: ${MEDIA_QUERIES.small})` ]: {
      width: '100%',
    },

    '$articleFirst &' : {
      width: '100%',
    }
  },

  titleLink: ({ isDarkTheme }: StyleProp) => ({
    'font-family': FONT.primary,
    'font-size': '1.1em',
    'font-weight': 'bold',
    'line-height': 1,
    'letter-spacing': '-0.5px',
    color: THEME_VALUE( isDarkTheme,"text"),

    '&:visited, &:focus': {
      color: THEME_VALUE( isDarkTheme,"text"),
    }
  }),

  category: ({ isDarkTheme }: StyleProp) => ({
    'margin-top': '2em',
    'font-weight': 700,
    'font-size': '0.8125em',
    'text-transform': 'capitalize',
    color: THEME_VALUE( isDarkTheme,"dated"),
  }),

  imageLink: {
    display: 'block',
    '$articleFirst &': {
      position: 'relative',
      width: '100%',
      height: '15em',
      padding: 0,
      margin: '0 0 1em',
      display: 'block',
    },
    [ `@media (max-width: ${MEDIA_QUERIES.small})` ]: {
        display: 'none',
    }
  },

  imageCover: ({ isDarkTheme }: StyleProp) => ({
    height: '11em',
    'object-fit': 'cover',
    padding: '1em',
    position: 'absolute',
    right: 0,
    top: '-0.8em',
    width: '11em',
    'background-color': THEME_VALUE( isDarkTheme,"card"),
    'box-shadow': `2px 2px 4px 0 ${THEME_VALUE( isDarkTheme,"boxShadow")} `,

    '$articleFirst &': {
      'background-color': 'inherit',
      'box-shadow': 'inherit',
      height: '15em',
      width: '100%',
      top:0,
      left: 0,
      position: 'relative',
      display: 'block',
      padding: 0,
    },
  })
})
