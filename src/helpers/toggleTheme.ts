export const toggleThemeStorage = (isDarkTheme = false) => {
  const html = document.querySelector('html');
  const isDarkMode = html.classList.contains('theme--dark') || isDarkTheme

  if(isDarkMode){
    window.localStorage.setItem('isDarkMode', "false");
    html.classList.remove('theme--dark');
    html.classList.add('theme--light');
  } else {
    window.localStorage.setItem('isDarkMode', "true");
    html.classList.remove('theme--light');
    html.classList.add('theme--dark');
  }
}
