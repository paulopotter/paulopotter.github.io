import { useContext } from "react";
import { ErrorStyle } from "../styles/";
import { ThemeContext } from "./_app";

export default function Custom500() {
  const { isDarkTheme } = useContext(ThemeContext);
  // @ts-ignore
  const errorStyle = ErrorStyle({ isDarkTheme });

  return <h1 className={errorStyle.messageTitle}>500 - Server-side error occurred</h1>
}
