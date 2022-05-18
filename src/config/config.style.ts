export const THEME_VALUE = (isDark: boolean, prop: string): string => (isDark ? COLOR.dark[prop] : COLOR.light[prop])

export const FONT = {
  size: 16,
  letterSpacing: 0.05,
  primary: 'Montserrat, sans-serif',
  secondary: 'Bitter, serif',
  mono: 'Consolas, monospace'
}


export const COLOR = {
  dark: {
    background: '#32373d',
    blockquoteBorder:' rgba(255, 255, 255, 0.6)',
    border:' #adbdc7',
    boxShadow:' rgba(255, 255, 255, 0.05)',
    card:' #171717',
    changeThemeButton:' #6f11fb',
    changeThemeButtonBg:' #f5f5f5',
    code:' #ff7171',
    codeBg:' #3e3e3e',
    dated:' #858e94',
    heading:' #e7f5ff',
    link:' #79ddf5',
    tableHeaderBg:' #68757e',
    tableHeaderBgInverted:' #212121',
    tableHeaderColor:' white',
    text:' #dadada',
    related:' #9700a1',
  },
  light: {
    background:' #f5f5f5',
    blockquoteBorder:' rgba(0, 0, 0, 0.34)',
    border:' #adbdc7',
    boxShadow:' rgba(0, 0, 0, 0.05)',
    card:' #fff',
    changeThemeButton:' #79ddf5',
    changeThemeButtonBg:' #32373d',
    code:' #b73333',
    codeBg:' #e8e8e8',
    dated:' #717679',
    heading:' #384a56',
    link:' #6f11fb',
    related:' #9700a1',
    text:' #363d42',
    tableHeaderBg:' #68757e',
    tableHeaderBgInverted:' #f5f5f5',
    tableHeaderColor:' white',
  }
}
