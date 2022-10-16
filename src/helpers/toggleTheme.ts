export const toggleThemeStorage = (themeName = 'light') => {
  const body = document.getElementsByTagName('body')[0];
  const theme = body.classList.contains(themeName) || themeName;

  window.localStorage.setItem('theme', `${theme}`);
  body.className = themeName;
};
