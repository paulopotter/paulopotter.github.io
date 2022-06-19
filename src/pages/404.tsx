import { useContext } from "react";
import { ErrorStyle } from "../styles/";
import { ThemeContext } from "./_app";

export default function Custom404() {
  const { isDarkTheme } = useContext(ThemeContext);
  // @ts-ignore
  const errorStyle = ErrorStyle({ isDarkTheme });

  return <h1 className={errorStyle.messageTitle}>404 - Page Not Found</h1>
}
