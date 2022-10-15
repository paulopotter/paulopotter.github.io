export type COLOR = `#${string}` | `rgba(${number}, ${number}, ${number}, ${number})`;

export interface THEME {
  background: COLOR;
  border: COLOR;
  boxShadow: COLOR;
  button: {
    background: COLOR;
    color: COLOR;
    inverted: {
      background: COLOR;
      color: COLOR;
    };
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
  };
  link: COLOR;
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
      color: COLOR;
    };
  };
}
