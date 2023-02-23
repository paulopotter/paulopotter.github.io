import { getAllTips } from 'services/api';
import { type PostData, TipsView } from "modules";

export default function TipsPage({ posts }: { posts: PostData[] }) {
  return <TipsView posts={posts} />;
}

export async function getStaticProps() {

  const posts = getAllTips({
    fields: ['content', 'title', 'slug', 'category', 'date']
  });


  return {
    props: { posts },
  };
}
