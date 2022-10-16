import { ErrorStyle } from '../styles/';

export default function Custom500() {
  const errorStyle = ErrorStyle();

  return <h1 className={errorStyle.messageTitle}>500 - Server-side error occurred</h1>;
}
