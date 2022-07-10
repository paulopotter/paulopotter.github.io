// @ts-nocheck
import markdown from "../services/markdown";
import { getPost, getAllPosts, getRelatedPosts, getRelatedSeries } from "../services/api";
import { PostContent } from "../components";

const Page = ({ post }) => <PostContent post={post} />;

export default Page;

export async function getStaticProps({ params }) {
  const post = getPost(params.slug, [
    "title",
    "date",
    "author",
    "slug",
    "content",
    "cover_image",
    "cover_image_alt",
    "cover_image_link",
    "cover_image_by",
    "category",
    "summary",
    "series",
    "seriesRelated",
  ]);

  const md = await markdown.toHTML(post.content);
  post.content = md.value;
  post.readingTime = md.data.readingTime?.text.replace(" read", "");
  post.related = getRelatedPosts(post.date)
  post.series = getRelatedSeries(post.series, post.title)
  console.info(post.series)
  return {
    props: { post },
  };
}

// Usamos a função do Next.js, getStaticPaths()
export function getStaticPaths() {
  // Buscamos todos os slugs e date de todos os posts
  const posts = getAllPosts(["slug", "series"]);

  return {
    /**
     * Retornamos para cada rota o parâmetro slug,
     * para conseguirmos usá-lo na função
     * getStaticProps acima.
     */
    paths: posts?.map((post) => ({
      params: {
        slug: post!.slug,
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
