export const toggleThemeStorage = (isDarkTheme, themes) => {
  const body = document.getElementsByTagName('body')[0]
  const isDarkMode = body.classList.contains(themes.dark.body) || isDarkTheme


  if(isDarkMode){
    window.localStorage.setItem('isDarkMode', "false");
    body.className = themes.light.body
  } else {
    window.localStorage.setItem('isDarkMode', "true");
    body.className = themes.dark.body
  }
}
