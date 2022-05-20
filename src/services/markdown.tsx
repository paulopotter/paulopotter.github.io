import { remark } from "remark"; // Processador para parsear markdown
import remarkHtml from "remark-html"; // Serializador de markdown para string
import { rehypeHighlightCodeBlock } from "@mapbox/rehype-highlight-code-block";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import removeComments from "remark-remove-comments";
import readingTime from "remark-reading-time";

export async function toHTML(markdown) {
  // Processamos nosso conteúdo Markdown
  const result = await remark()
    .use(remarkGfm)
    .use(remarkImages)
    .use(readingTime, { attribute: "readingTime" })
    .use(remarkHtml, {
      sanitize: false,
    })
    .use(rehypeHighlightCodeBlock, {
      highlight: CodeBlock,
    })
    .use(removeComments)
    .process(markdown);

  return result;
}
const CodeBlock = ({ language, value }) => {
  const lang = language?.replace("language-", "") ?? "text";
  return <SyntaxHighlighter language={lang}>{value}</SyntaxHighlighter>;
};

export default { toHTML };

/*
  * remark-a11y-emoji - https://github.com/florianeckerstorfer/remark-a11y-emoji
  * remark-lint - https://github.com/remarkjs/remark-lint
  * remark-remove-comments - https://github.com/alvinometric/remark-remove-comments
  * rehype-meta - https://github.com/rehypejs/rehype-meta
  * rehype-minify - https://github.com/rehypejs/rehype-minify

  ? remark-code-frontmatter - https://github.com/s0/remark-code-frontmatter
  ? remark-directive - https://github.com/remarkjs/remark-directive
  ? remark-directive-rehype - https://github.com/IGassmann/remark-directive-rehype
  ? remark-frontmatter - https://github.com/remarkjs/remark-frontmatter
  ? remark-mdx - https://github.com/mdx-js/mdx/tree/main/packages/remark-mdx
  ? remark-img-links - https://github.com/Pondorasti/remark-img-links
  ? remark-macro - https://github.com/dimerapp/remark-macro
  ? remark-oembed - https://github.com/agentofuser/remark-oembed
  ? remark-prettier - https://github.com/remcohaszing/remark-prettier
  ? remark-sectionize - https://github.com/jake-low/remark-sectionize
  ? remark-title - https://github.com/RichardLitt/remark-title
  ? remark-typescript - https://github.com/trevorblades/remark-typescript
  ?


*/
