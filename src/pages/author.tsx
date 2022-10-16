import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');

import { AuthorView } from 'modules';

export default function AuthorPage() {
  return <AuthorView />;
}
