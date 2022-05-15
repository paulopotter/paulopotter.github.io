// Importamos a nossa função getAllPosts()
import markdown from '../services/markdown';
import { getPost, getAllPosts } from '../services/api';

export default function Page({ post }) {
 return (
   <div style={{
     margin: 'auto',
     maxWidth: '600px',
     fontFamily: 'sans-serif'
   }}>
     <h1>{ post.title }</h1>
     <p>{ post.author } · { post.date }</p>
     { /*
     Inserimos nosso na String HTML com
     dangerouslySetInnerHTML, para o React.js
     a interpretar como HTML.
     */ }
     <div dangerouslySetInnerHTML={{ __html: post.content }} />
   </div>
 );
}

export async function getStaticProps({ params }) {
  const post = getPost(params.slug, [
    'title',
    'date',
    'author',
    'slug',
    'content'
  ]);

  /**
   * Como a função toHTML é async, ela
   * retorna uma Promise, então devemos
   * aguardar ela ser finalizada com o await.
   */
  post.content = await markdown.toHTML(post.content);

  return {
    props: { post }
  }
}

// Usamos a função do Next.js, getStaticPaths()
export function getStaticPaths() {
  // Buscamos todos os slugs e date de todos os posts
  const posts = getAllPosts(['slug']);

  return {
    /**
     * Retornamos para cada rota o parâmetro slug,
     * para conseguirmos usá-lo na função
     * getStaticProps acima.
     */
    paths: posts?.map(post => ({
        params: {
          slug: post!.slug
        }
    })),
    /**
     * A opção fallback: false fala para o Next.js
     * não tentar executar essa rota se o arquivo
     * markdown para ela não existir
     */
    fallback: false
  };
}
