import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import type { PostData } from "modules/posts/posts.type";
import { HomeView } from "modules";
import CONFIGS from 'services/configs'
import generateRssFeed from "services/generateRssFeed";
import { getFiltredPosts } from "services/api";

dayjs.locale(CONFIGS.DEFAULT_LANG.toLowerCase());

export default function HomePage({ posts }: { posts: PostData[] } ) {
  return <HomeView posts={posts} />
}

export async function getStaticProps() {
  await generateRssFeed();

  const posts = getFiltredPosts([
    "title",
    "slug",
    "date",
    "category",
    "cover_image",
    "summary",
  ]);

  return {
    props: { posts },
  };
}
