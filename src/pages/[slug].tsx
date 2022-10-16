// @ts-nocheck
import type { GetStaticProps, GetStaticPaths } from 'next';
import markdown from '../services/markdown';
import { getPost, getAllPosts, getRelatedPosts, getRelatedSeries } from '../services/api';
import type { PostData } from '../modules/posts/posts.type';
import { PostsView } from 'modules';

export default function PostsPage({ post }: { post: PostData }) {
  return <PostsView post={post} />;
}

export async function getStaticProps({ params }): GetStaticProps {
  const post = getPost(params.slug, [
    'title',
    'date',
    'author',
    'slug',
    'content',
    'cover_image',
    'cover_image_alt',
    'cover_image_link',
    'cover_image_by',
    'category',
    'summary',
    'series',
    'seriesRelated',
  ]);

  const md = await markdown.toHTML(post.content);
  post.content = md.value;
  post.readingTime = md.data.readingTime?.text.replace(' read', '');
  post.related = getRelatedPosts(post.date);
  post.series = getRelatedSeries(post.series, post.title);
  return {
    props: { post },
  };
}

// Usamos a função do Next.js, getStaticPaths()
export function getStaticPaths(): GetStaticPaths {
  // Buscamos todos os slugs e date de todos os posts
  const posts = getAllPosts(['slug', 'series']);

  return {
    /**
     * Retornamos para cada rota o parâmetro slug,
     * para conseguirmos usá-lo na função
     * getStaticProps acima.
     */
    paths: posts?.map(post => ({
      params: {
        slug: post?.slug,
      },
    })),
    /**
     * A opção fallback: false fala para o Next.js
     * não tentar executar essa rota se o arquivo
     * markdown para ela não existir
     */
    fallback: false,
  };
}
