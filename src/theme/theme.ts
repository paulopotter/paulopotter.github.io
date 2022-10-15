import { THEME_DARK } from "./dark.theme";
import { THEME_LIGHT } from "./light.theme";
import { THEME as ITHEME } from "./theme.types";

const THEME: Record<string, ITHEME> = {
  dark: THEME_DARK,
  light: THEME_LIGHT,
};

export default THEME
