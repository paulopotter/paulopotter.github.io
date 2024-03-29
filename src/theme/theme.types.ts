export type COLOR = `#${string}` | `rgb(${number}, ${number}, ${number})` | `rgba(${number}, ${number}, ${number}, ${number})`;

export interface ITHEME {
  // workaround to know theme name
  name: string;
  background: COLOR;
  border: COLOR;
  boxShadow: COLOR;
  button: {
    background: COLOR;
    color: COLOR;
  };
  card: {
    background: COLOR;
  };
  code: {
    background: COLOR;
    color: COLOR;
  };
  color: {
    primary: COLOR;
    secondary: COLOR;
    tertiary: COLOR;
  };
  link: COLOR;
  outline: COLOR;
  related: COLOR;
  table: {
    header: {
      background: {
        primary: COLOR;
        secondary: COLOR;
      };
      color: COLOR;
    };
    body: {
      background: {
        primary: COLOR;
        secondary: COLOR;
      };
    };
  };
}
