import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

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

  fields.forEach(field => {
    // Se houver o campo conteúdo, o adicionamos
    if (field === 'content') post[field] = content;
    // Se houver o campo slug, o adicionamos
    if (field === 'slug') post[field] = slug;
    /**
     * Se houver o campo dentro do cabeçalho do
     * markdown, o adicionamos no post
     */
    if (data[field]) post[field] = data[field];
  })
  /**
   * Retornamos todo o conteúdo do markdown
   * junto com o slug.
   */
  // return { content, slug, ...data };
  return post;
}

/**
 * Criamos uma função para buscar todos os posts.
 * Exportamos também para consegir buscar de dentro da página
 * de listagem de posts
 */
export function getAllPosts(fields) {
  const slugs = getMarkdownsFiles();
  const posts = slugs
    .map(slug => getPost(slug, fields))
    // @ts-ignore
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}



// import fs from 'fs'
// import { join } from 'path'
// import matter from 'gray-matter'

// const postsDirectory = join(process.cwd(), 'content/')

// export function getPostSlugs() {
//   const dirents = fs.readdirSync(postsDirectory, { withFileTypes: true, encoding: 'utf-8' });
//   return dirents
//       .filter(dirent => dirent.isFile())
//       .map(dirent => dirent.name);
// }

// export function getPostBySlug(slug, fields = []) {
//   const realSlug = slug.replace(/\.md$/, '')
//   const fullPath = join(postsDirectory, `${realSlug}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const { data, content } = matter(fileContents)

//   const items = {}

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === 'title') {
//       items[field] = data?.title
//     }
//     if (field === 'slug') {
//       items[field] = realSlug
//     }
//     if (field === 'content') {
//       items[field] = content
//     }

//     if (typeof data[field] !== 'undefined') {
//       items[field] = data[field]
//     }
//   })

//   return items
// }

// export function getAllPosts(fields = []) {
//   const slugs = getPostSlugs()
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     .filter(post => !!post?.title )
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
//   return posts
// }
