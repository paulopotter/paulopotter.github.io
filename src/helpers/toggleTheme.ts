import { useEffect, useState } from "react";


// const getDarkTheme = () => {
//   const [isDarkTheme, setIsDarkTheme] = useState(false)

//   useEffect(() => {
//     setIsDarkTheme( window.localStorage.getItem('isDarkMode') === 'true')
//   }, [isDarkTheme]);

//   return isDarkTheme
// }

// const isDarkTheme = getDarkTheme()
const isDarkTheme = false

const toggleTheme = () => {
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

export {
  toggleTheme,
  isDarkTheme,
}
