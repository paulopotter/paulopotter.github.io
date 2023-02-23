// @ts-nocheck

import type { GetStaticProps, GetStaticPaths } from 'next';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import type { PostData } from 'modules/posts/posts.type';
import CONFIGS from 'services/configs';
import { getFiltredPosts } from 'services/api';
import { HomeView } from 'modules';

dayjs.locale(CONFIGS.DEFAULT_LANG.toLowerCase());

export default function HomePage({ posts }: { posts: PostData[] }) {
  return <HomeView posts={posts} />;
}

export async function getStaticProps({ params }): GetStaticProps {
  const { category } = params;
  const posts = getFiltredPosts(['title', 'slug', 'date', 'category', 'cover_image', 'summary'],[['category', category.toLowerCase()]]);

  return posts.length === 0
    ? { notFound: true }
    : {
      props: { posts },
    };
}

export function getStaticPaths(): GetStaticPaths {
  const posts = getFiltredPosts(['category']);
  let categories = [];
  posts?.forEach(post => {
    categories.push(post.category);
  });
  categories = [...new Set(categories.flat())];

  return {
    /**
     * Retornamos para cada rota o parâmetro slug,
     * para conseguirmos usá-lo na função getStaticProps acima.
     */
    paths: categories?.map(category => ({
      params: {
        category: category.toLowerCase(),
      },
    })),
    fallback: true,
  };
}
