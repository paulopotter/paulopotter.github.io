import { remark } from "remark"; // Processador para parsear markdown
import remarkHtml from "remark-html"; // Serializador de markdown para string
import { rehypeHighlightCodeBlock } from "@mapbox/rehype-highlight-code-block";

import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import removeComments from "remark-remove-comments";
import readingTime from "remark-reading-time";

// import { h } from "hastscript";

export async function toHTML(markdown) {
  // Processamos nosso conteúdo Markdown
  const result = await remark()
    .use(remarkGfm)
    .use(remarkImages)
    .use(readingTime, { attribute: "readingTime" })
    .use(rehypeHighlightCodeBlock)
    // .use(remarkHtml, {
    //   sanitize: {
    //     tagNames: ["code"],
    //   },
    // })
    .use(removeComments)
    .process(markdown);

  return result;
}

export default { toHTML };
