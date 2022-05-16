import { useEffect, useState } from "react";
import { isDarkTheme, toggleTheme } from "../helpers";

export default function ToggleThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(isDarkTheme);

  useEffect(() => {
    const themeButton = document.querySelector(".site__theme-button");
    themeButton.classList.add("site__theme-button--has-js");
  }, []);

  const toggleButtonOnClick = (event) => {
    toggleTheme();
    event.currentTarget.ariaLabel = `Trocar para o tema ${
      isDarkMode ? "claro" : "escuro"
    }`;
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="site__theme-button"
      type="button"
      aria-label={`Trocar para o tema ${isDarkMode ? "claro" : "escuro"}`}
      onClick={toggleButtonOnClick}
    >
      <svg viewBox="0 0 24 24">
        <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z" />
      </svg>
    </button>
  );
}
