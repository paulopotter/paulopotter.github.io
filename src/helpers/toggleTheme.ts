export const toggleThemeStorage = (themeName = 'light') => {
  const body = document.getElementsByTagName('body')[0];

  window.localStorage.setItem('theme', `${themeName}`);
  body.className = themeName;
};
