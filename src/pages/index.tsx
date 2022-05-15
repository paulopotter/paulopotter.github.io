import Link from 'next/link';
import { getAllPosts } from '../services/api';

export default function Page({ posts }) {
  return (
    <>
      <h1>Meu blog!</h1>
      <p>Listagem de posts:</p>
      <ul>
      {
        posts?.map((post, index) =>
          <li key={index}>
            <Link href={ `/${ post.slug }` }>
              <a>{ post.title }</a>
            </Link>
          </li>
        )
      }
      </ul>
    </>
  );
}

export function getStaticProps() {
  const posts = getAllPosts([ 'title', 'date', 'slug' ]);

  return {
    props: { posts }
  }
}
