import markdown from "../services/markdown";
import { getPost, getAllPosts } from "../services/api";
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
    "series",
    "seriesRelated",
  ]);

  // console.log(post);

  post.content = await markdown
    .toHTML(post.content)
    .then((value) => value.value);
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
