import classNames from "classnames";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../pages/_app";
import { ThemeButtonStyle } from "./styles/toggleThemeButton.style";

export function ToggleThemeButton({ onClicked = () => {} }) {
  const { isDarkTheme } = useContext(ThemeContext);
  const [canAnimate, setCanAnimate] = useState(false);

  const style = ThemeButtonStyle({ isDarkTheme });

  useEffect(() => {
    setTimeout(() => setCanAnimate(true), 1000);
  }, [canAnimate]);

  const toggleButtonOnClick = (event) => {
    onClicked?.();
    event.currentTarget.ariaLabel = `Trocar para o tema ${
      isDarkTheme ? "claro" : "escuro"
    }`;
  };

  return (
    <button
      className={classNames(style.button, { [style.hasJs]: canAnimate })}
      type="button"
      aria-label={`Trocar para o tema ${isDarkTheme ? "claro" : "escuro"}`}
      onClick={toggleButtonOnClick}
    >
      <svg viewBox="0 0 24 24" className={style.svg}>
        <path d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z" />
      </svg>
    </button>
  );
}
