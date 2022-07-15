import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import type { PostData } from '../types/posts.type';

const postsDirectory = join(process.cwd(), 'src/posts');
const getMarkdownsFiles = (): string[] => fs.readdirSync(postsDirectory);

type RelatedPost = {
  nextPost?: {},
  prevPost?: {},
}

/**
 * Busca um post baseado no nome do arquivo.
 * @param filename Slug ou nome do arquivo com extensão.
 * @param fields Campos do post que será retornado.
*/
export function getPost(filename: string, fields: string[] = []): PostData | {} {
  const slug = filename.replace(/\.md$/, ''); // Remover o .md do fim do arquivo
  const directory = join(postsDirectory, `${ slug }.md`); // Buscando pelo nome do arquivo markdown, com o .md
  const fileContents = fs.readFileSync(directory, 'utf8'); // Ler o conteúdo do arquivo markdown

  /**
   * Buscar o seu conteúdo com o matter, o cabeçalho do Markdown
   * vem na chave data, e o conteúdo, dentro do content.
   */
  const { data, content } = matter(fileContents);
  if(!data) {
    return {}
  }

  const post: PostData = {
    title: undefined,
  };

  fields
  .map((field: string) => {
    if(!data?.[getParameterCaseInsensitive(data, 'title')]){
      return
    } else {
      post['title'] = data[getParameterCaseInsensitive(data, 'title')]
    }
    if (field === 'category') post[field] = data?.category?.split(',');
    if (field === 'content') post[field] = content;
    if (field === 'summary') post[field] = getSummary(content)
    if (field === 'slug') post[field] = slug

    // @ts-expect-error: ??
    if (data[getParameterCaseInsensitive(data, field)]) post[field] = data[getParameterCaseInsensitive(data, field)];
  })
  return post;
}

/**
 * Gera summary baseado no conteudo.
 * @param content Corpo do post.
*/
function getSummary(content: string): string {
  const summaryKey = '<!-- PELICAN_END_SUMMARY -->'
  const summaryKeyIndex = content.indexOf(summaryKey);
  const substrLength = summaryKeyIndex > -1 ? summaryKeyIndex : 140

  return content.substr(0, substrLength)

}

/**
 * Busca todos os posts e retorna posts com os campos selecionados.
 * @param fields Lista de campos a serem retonados dos posts.
 */
export function getAllPosts(fields?: string[]): {} | PostData[] {
  const slugs = getMarkdownsFiles();
  return slugs
    .map((slug: string): PostData => getPost(slug, fields) as PostData)
    .sort((a, b): number => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .filter(post => Object.keys(post).length !== 0);
}

/**
 * Busca por posts proximos (anterior e proximo).
 * @param date data do post atual.
 */
export function getRelatedPosts(date: string): RelatedPost {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'date'
  ]);

  return filterRelatedPosts(date, allPosts)
}

/**
 * Filtra posts e retorna os posts próximos.
 * based on https://stackoverflow.com/a/11795472/3498055
*/
function filterRelatedPosts(postDate: string, listOfPosts: PostData[]): RelatedPost | {} {
    const result: RelatedPost = {}
    const date = new Date(postDate).getTime();

    const maxDateValue = Math.abs((new Date(0,0,0)).valueOf());
    let bestPrevDiff = maxDateValue;
    let bestNextDiff = -maxDateValue;

    let currDiff = 0;

    for(let i = 0; i < listOfPosts.length; i++) {
        currDiff = date - new Date(listOfPosts[i].date!).getTime();
        if(currDiff < 0 && currDiff > bestNextDiff){
            result['nextPost'] = listOfPosts[i]
            bestNextDiff = currDiff;
        }
        if(currDiff > 0 && currDiff < bestPrevDiff){
            result['prevPost'] = listOfPosts[i]
            bestPrevDiff = currDiff;
        }
    }
    return result
}

/**
* Busca por posts da serie, se existir.
* @param serie Titulo da serie
* @param postTitle ?
*/
export function getRelatedSeries(serie: string, postTitle: string = ''): any {
  const posts = getAllPosts([
    'series',
    'title',
    'slug',
    'date'
  ])

  const relatedPosts = posts
    .filter(post => serie !== undefined && post.series === serie)

  relatedPosts
  .map((post, index) => post.title === postTitle && delete relatedPosts[index].slug
  )

  if(relatedPosts.length <= 1){
    return []
  }

  return relatedPosts.sort((a, b): number => new Date(a.date!).getTime() - new Date(b.date!).getTime())

}

/**
 * Procura pela a key de um objeto Insensitivamente.
 * @param object
 * @param key
 */
function getParameterCaseInsensitive(object: Object, key: string): string {
  const asLowercase = key.toLowerCase();
  return Object.keys(object).find(key => key.toLowerCase() === asLowercase) || key
}
