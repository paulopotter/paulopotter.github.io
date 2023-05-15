import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import CONFIGS from './configs';

import type { PostData, PostMetaStructure } from '../modules/posts/posts.type';

type PostsType = 'post' | 'tips'

const postsDirectory = join(process.cwd(), 'src/posts');
const tipsDirectory = join(process.cwd(), 'src/tips');
const getMarkdownsFiles = (directoryType: PostsType = 'post'): string[] => {
  if(directoryType === "tips"){
    return fs.readdirSync(tipsDirectory);
  }
  return fs.readdirSync(postsDirectory);
}

type RelatedPost = {
  nextPost?: PostData;
  prevPost?: PostData;
};

// type PostKey = keyof PostData;

type getPostProps = {
  filename: string,
  fields?: string[],
  postType?: PostsType
}
/**
 * Busca um post baseado no nome do arquivo.
 * @param filename Slug ou nome do arquivo com extensão.
 * @param fields Campos do post que será retornado.
 */
export function getPost({ filename, fields = [], postType = 'post' }: getPostProps): PostData | undefined {
  if(filename === undefined){
    return
  }
  const slug = filename.replace(/\.md$/, ''); // Remover o .md do fim do arquivo
  const directory = join(postType === 'post' ? postsDirectory : tipsDirectory, `${slug}.md`); // Buscando pelo nome do arquivo markdown, com o .md
  const fileContents = fs.readFileSync(directory, 'utf8'); // Ler o conteúdo do arquivo markdown

  /**
   * Buscar o seu conteúdo com o matter, o cabeçalho do Markdown
   * vem na chave data, e o conteúdo, dentro do content.
   */
  const { data, content } = matter(fileContents);

  if (!data || !data.title) {
    return;
  }

  const post = {
    // ...data,
    ...formatPostMetaData(data as PostMetaStructure),
    summary: content ? getSummary(content) : undefined,
    slug: slug,
    content: content,
  } as PostData;

  if (fields.length === 0) {
    return post
  }

  const filtered = Object.keys(post)
    .filter((key: string) => fields.includes(key as never))
    .reduce((obj: Record<string, any>, key: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      obj[key] = post?.[key];
      return obj;
    }, {}) as PostData;


  return filtered || {}
}

/**
 * Gera summary baseado no conteudo.
 * @param content Corpo do post.
 */
function getSummary(content: string): string {
  const summaryStartKey = '<!-- START_SUMMARY -->';
  const summaryStartKeyIndex = content.indexOf(summaryStartKey) || 0;
  const summaryEndKey = '<!-- END_SUMMARY -->';
  const summaryEndKeyIndex = content.indexOf(summaryEndKey);
  const substrLength = summaryEndKeyIndex > -1 ? summaryEndKeyIndex : 140;

  const startSubstr = summaryStartKeyIndex > 1 && summaryEndKeyIndex > summaryEndKeyIndex ? summaryStartKeyIndex : 0

  return content.substr(startSubstr, substrLength);
}


/**
 * Busca todos os posts e retorna posts com os campos selecionados.
 * @param fields Lista de campos a serem retonados dos posts.
 */
export function getAllPosts(fields?: string[]): PostData[] {
  const slugs = getMarkdownsFiles('post');
  return slugs
    .map((slug: string): PostData => getPost({ filename:slug, fields }) as PostData)
    .filter(post => post)
    // .filter(post => post.date)
    .sort((a, b): number => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .filter(post => Object.keys(post)?.length !== 0);
}

// type getFiltredPostsProps = {
//   fields?: string[],
//   filter?: string[][]
//   postType?: PostsType

// }
/**
 * Busca posts filtrado.
 * @param fields Lista de campos a serem retornardos
 * @param filter Array de array para filtrar
 * @return PostData[]
 */
export function getFiltredPosts(fields?: string[], filter?: string[][]): PostData[] {
  const allPosts =  getAllPosts(fields);

  if (filter === undefined || filter?.length === 0) return allPosts;

  const filtered = filter
    ?.map(filters => {
      return allPosts.filter(post => {
        const [key, values] = filters;
        // @ts-expect-error: preguiça
        const item = post?.[key];

        if (typeof item === 'string') {
          return values.includes(item);
        }

        if (Array.isArray(item)) {
          return item.some(r => values.includes(r.toLowerCase()));
        }
      });
    })
    .flat();

  return [...new Set(filtered)];
}

/**
 * Busca por posts proximos (anterior e proximo).
 * @param date data do post atual.
 */
export function getRelatedPosts(date: string): RelatedPost {
  const allPosts = getAllPosts(['title', 'slug', 'date']);

  return filterRelatedPosts(date, allPosts);
}

/**
 * Filtra posts e retorna os posts próximos.
 * based on https://stackoverflow.com/a/11795472/3498055
 */
function filterRelatedPosts(
  postDate: string,
  listOfPosts: PostData[]
): RelatedPost | Record<string, never> {
  const result: RelatedPost = {};
  const date = new Date(postDate).getTime();

  const maxDateValue = Math.abs(new Date(0, 0, 0).valueOf());
  let bestPrevDiff = maxDateValue;
  let bestNextDiff = -maxDateValue;

  let currDiff = 0;

  for (let i = 0; i < listOfPosts.length; i++) {
    currDiff = date - new Date(listOfPosts[i].date!).getTime();
    if (currDiff < 0 && currDiff > bestNextDiff) {
      result['nextPost'] = listOfPosts[i];
      bestNextDiff = currDiff;
    }
    if (currDiff > 0 && currDiff < bestPrevDiff) {
      result['prevPost'] = listOfPosts[i];
      bestPrevDiff = currDiff;
    }
  }
  return result;
}

/**
 * Busca por posts da serie, se existir.
 * @param serie Titulo da serie
 * @param postTitle ?
 */
export function getRelatedSeries(serie: string, postTitle = ''): unknown {
  const posts = getAllPosts( ['series', 'title', 'slug', 'date'] );

  const relatedPosts = posts
    // @ts-expect-error: i will grow up post type
    .filter((post: PostData) => serie !== undefined && post.series === serie);

  relatedPosts.map((post, index) => post.title === postTitle && delete relatedPosts[index].slug);

  if (relatedPosts.length <= 1) {
    return [];
  }

  return relatedPosts.sort(
    (a, b): number => new Date(a.date!).getTime() - new Date(b.date!).getTime()
  );
}

/**
 * Procura pela a key de um objeto Insensitive.
 *
 * @param {Record<string, unknown>} object objeto para buscar o item.
 * @param {string} key key para ser buscada no objeto.
 * @returns {string} parameter.
 */
function getParameterCaseInsensitive(object: Record<string, unknown>, key: string): string {
  const asLowercase = key.toLowerCase();
  return Object.keys(object).find(key => key.toLowerCase() === asLowercase) || key;
}

type getAllTipsProps = {
  fields?: string[]
}
export function getAllTips({ fields = [] }: getAllTipsProps) {
  const slugs = getMarkdownsFiles('tips');
  return slugs
    .map((slug: string): PostData => getPost({ filename: slug, fields ,postType: "tips" }) as PostData)
    .sort((a, b): number => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .filter(post => Object.keys(post).length !== 0);
}

///


function formatPostMetaData(
  metaData: PostMetaStructure,
  // fields = []
): PostData | undefined {

  if(!metaData.title){
    return;
  }

  const post: PostData = {
    title: metaData.title,
    category: metaData?.category || ['Sem categoria'],
    date: typeof metaData.date === 'object' ? metaData.date.string : metaData.date,
    cover_image: CONFIGS.SITE_URL + metaData.cover_image?.replace('./', '/')?.replace('public/', '/'),
    cover_image_alt: metaData.cover_image_alt,
    cover_image_link: metaData?.cover_image_link,
    cover_image_by: metaData?.cover_image_by,
    Status: metaData?.Status || 'Publicado',
    series: metaData?.series,
  }

  return post
}
