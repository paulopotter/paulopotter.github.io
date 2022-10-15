import { THEME } from './theme.types';
import * as TOKENS from './tokens';

export const THEME_LIGHT: THEME = {
  name: 'light',
  background: TOKENS.COLOR_CULTURED,
  border: TOKENS.COLOR_PASTEL_BLUE,
  boxShadow: TOKENS.COLOR_BLACK_ALPHA_34,
  button: {
    background:TOKENS.COLOR_CULTURED,
    color:TOKENS.COLOR_ELETRIC_INDIGO,
    inverted: {
      background: TOKENS.COLOR_ONYX,
      color: TOKENS.COLOR_MEDIUM_SKY_BLUE,
    }
  },
  card: {
    background: TOKENS.COLOR_WHITE,
  },
  code: {
    background: TOKENS.COLOR_PLATINUM,
    color: TOKENS.COLOR_GOLDEN_GATE_BRIDGE,
  },
  color: {
    primary: TOKENS.COLOR_ONYX_LIGHT,
  },
  link: TOKENS.COLOR_ELETRIC_INDIGO,
  related: TOKENS.COLOR_VIOLET,
  table: {
    header: {
      background: {
        primary: TOKENS.COLOR_AURO_METAL_SAURUS,
        secondary: TOKENS.COLOR_CULTURED,
      },
      color: TOKENS.COLOR_WHITE,
    },
    body: {
      background: {
        primary: TOKENS.COLOR_AURO_METAL_SAURUS,
        secondary: TOKENS.COLOR_SONIC_SILVER,
      },
      color: TOKENS.COLOR_CULTURED,
    }
  }
};
