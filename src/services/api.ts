import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import slugify from 'slugify';

const postsDirectory = join(process.cwd(), 'src/posts');

function getMarkdownsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPost(slugOrFilename, fields = []) {
  // Remover o .md do fim do arquivo
  const slug = slugOrFilename.replace(/\.md$/, '');
  // Buscando pelo nome do arquivo markdown, com o .md
  const directory = join(postsDirectory, `${ slug }.md`);
  // Ler o conteúdo do arquivo markdown
  const fileContents = fs.readFileSync(directory, 'utf8');
  /**
   * Buscar o seu conteúdo com o matter, o cabeçalho do Markdown
   * vem na chave data, e o conteúdo, dentro do content.
   */
  const { data, content } = matter(fileContents);

  const post = {};

  fields
  .map(field => {
    if(!data[getParameterCaseInsensitive(data, 'title')]){
      return
    } else {
      post['title'] = data[getParameterCaseInsensitive(data, 'title')]
    }
    if (field === 'category') post[field] = data?.category?.split(',');
    if (field === 'content') post[field] = content;
    if (field === 'slug') post[field] = slug
    // if (field === 'slug') post[field] = slugify(post.title, {
    //    lower: true,
    //    remove: /[*+~.()'"!:@]/g,
    // });

    if (data[getParameterCaseInsensitive(data, field)]) post[field] = data[getParameterCaseInsensitive(data, field)];
  })
  return post;
}

/**
 * Busca todos os posts.
 */
export function getAllPosts(fields) {
  const slugs = getMarkdownsFiles();
  const posts = slugs
    .map(slug => getPost(slug, fields))
    // @ts-ignore
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter(post => Object.keys(post).length !== 0);

  return posts
}

export function getRelatedSeries(serie, postTitle = '') {
  const posts = getAllPosts([
    'series',
    'title',
    'slug'
  ])

  const series = posts?.filter((post) => !!post.series);
  const seriesRelated = Array.from(groupBy(series, (ser) => ser.series))
    .filter(
    series => {
      Object.keys(series) === series
    }
  )
  console.log(seriesRelated)


  return seriesRelated

}

/**
 * Procura pela a key de um objeto Insensitivamente.
 */
function getParameterCaseInsensitive(object, key) {
  const asLowercase = key.toLowerCase();
  return  Object.keys(object).find(key => key.toLowerCase() === asLowercase)
}


function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}
