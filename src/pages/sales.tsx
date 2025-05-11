import { getAllSales } from 'services/api';
import { type PostData, SalesView } from "modules";

export default function SalesPage({ posts }: { posts: PostData[] }) {
  return <SalesView posts={posts} />;
}

export async function getStaticProps() {

  const posts = getAllSales({
    fields: ['content', 'title', 'slug', 'status']
  });

  return {
    props: { posts },
  };
}
