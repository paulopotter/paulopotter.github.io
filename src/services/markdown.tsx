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
