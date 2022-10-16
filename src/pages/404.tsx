import { ErrorStyle } from '../styles/';

export default function Custom404() {
  const errorStyle = ErrorStyle();

  return <h1 className={errorStyle.messageTitle}>404 - Page Not Found</h1>;
}
