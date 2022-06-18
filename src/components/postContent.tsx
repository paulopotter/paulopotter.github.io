import React, { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "rehype-figure";
import remarkGfm from 'remark-gfm';
import rehypeRewrite from "rehype-rewrite";
import { DiscussionEmbed } from "disqus-react";
import {
  dracula,
  materialOceanic,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import { Head } from ".";
import { ThemeContext } from "../pages/_app";
import CONFIGS from "../services/configs";
import { PostStyle } from "./styles/postContent.style";


type PostType = {
  content: string;
  date: string;
  excerpt: string;
  imagePath: string;
  slug: string;
  title: string;
};
interface Props {
  post: PostType;
}
const { SITEURL } = CONFIGS;

SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

export const PostContent = ({ post }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const postStyle = PostStyle({ isDarkTheme });

  const [codeTheme, setCodeTheme] = useState(
    isDarkTheme ? materialOceanic : dracula
  );

  useEffect(() => {
    setCodeTheme(isDarkTheme ? materialOceanic : dracula);
  }, [isDarkTheme]);

  return (
    <>
      <Head
        title={post.title}
        meta={{
          ogTitle: post.title,
          ogDescription: post?.summary,
          ogImage: post?.cover_image_url,
          ogUrl: `${SITEURL}/${post.slug}`,
          twitterAlt: post?.cover_image_alt,
        }}
      ></Head>
      <section className={postStyle.articleSection}>
        <article className={postStyle.articleBody}>
          <h1 className={postStyle.articleTitle}>
            {post.title} {post?.subtitle && <small> {post.subtitle} </small>}
          </h1>
          {post?.readingTime && (
            <small> Tempo médio de leitura: {post.readingTime}.</small>
          )}
          <div className={postStyle.articleContent}>
            <CoverImage post={post} postStyle={postStyle} />

            <ReactMarkdown
              skipHtml
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeRaw,
                rehypeSlug,
                [rehypeFigure, { className: postStyle.contentFigure }],
                [
                  rehypeRewrite,
                  {
                    rewrite: (node, index, parent) => {
                      if (
                        node.tagName == "img" &&
                        !(
                          node.properties.src.indexOf("http://") == 0 ||
                          node.properties.src.indexOf("https://") == 0
                        )
                      ) {
                        node.properties.src = fixImgSRC(node.properties.src);
                      }
                    },
                  },
                ],
              ]}
              components={{
                h2({ node, className, children, ...props }) {
                  return !props.id.includes("footnote") ? (
                    <h2 id={props.id} className={className}>
                      {children}
                    </h2>
                  ) : (
                    <hr />
                  );
                },
                img({ node, className, children, ...props }) {
                  // TODO: corrigir imagens e descrições
                  return (
                    <figure className={postStyle.articleCover}>
                      <img
                        className={postStyle.articleCoverImg}
                        src={props.src}
                        alt={props.title ?? props.alt}
                      />
                    </figure>
                  );
                },
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      showLineNumbers
                      style={codeTheme}
                      language={match[1]}
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* <SeriesPosts post={post} /> */}
        </article>
      </section>
      {/* // url: "https://umdevqualquer.com.br/criando-sua-primeira-app-para-smart-tvs.html", */}
      <section>
        <DiscussionEmbed
          shortname="umdevqualquer"
          config={{
            url: `${window.location.href}`,
            identifier: post.slug,
            title: post.title,
            language: "pt_BR",
          }}
        />
      </section>
    </>
  );
};

const CoverImage = ({ post, postStyle }) => {
  return (
    <>
      {post?.cover_image && (
        <figure className={postStyle.articleCover}>
          <img
            className={postStyle.articleCoverImg}
            src={fixImgSRC(post.cover_image)}
            alt={`"${post?.cover_image_alt}"`}
          />
          <FigureCaption post={post} postStyle={postStyle} />
        </figure>
      )}
    </>
  );
};

const FigureCaption = ({ post, postStyle }) =>
  post?.cover_image_by && (
    <figcaption className={postStyle.articleCoverCredit}>
      Créditos:{" "}
      {post?.cover_image_link ? (
        <a href={`${post.cover_image_link}`}>{post.cover_image_by || ""}</a>
      ) : (
        post?.cover_image_by || ""
      )}
    </figcaption>
  );

const fixImgSRC = (src: string): string => {
  if (src.indexOf("http://") == 0 || src.indexOf("https://") == 0) {
    return src;
  }
  return src.replace("./", "../");
};

const CodeBlock = ({ language, value }) => {
  const lang = language?.replace("language-", "") ?? "text";
  return (
    <SyntaxHighlighter language={lang} style={dark}>
      {value}
    </SyntaxHighlighter>
  );
};
