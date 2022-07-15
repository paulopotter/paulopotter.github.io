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

import { AuthorCard, Head } from ".";
import { ThemeContext } from "../pages/_app";
import CONFIGS from "../services/configs";
import { PostStyle } from "./styles/postContent.style";
import RelatedPosts from "./relatedPosts";
import { PostData } from "@types/posts.type";
import SeriesPosts from "./seriesPost";

const {
  SITE_URL,
  DISQUS_SITENAME,
} = CONFIGS;


interface Props {
  post: PostData;
}

SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("markdown", markdown);
SyntaxHighlighter.registerLanguage("json", json);

export const PostContent = ({ post }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext);
  // @ts-ignore
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
          description: post?.summary,
          ogImage: post?.cover_image,
          ogUrl: `${SITE_URL}/${post.slug}`,
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
                    // rewrite: (node: any, index: any, parent: any) => {
                    rewrite: (node: unknown) => {
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
                h2({ className, children, ...props }) {
                  return !props?.id?.includes("footnote") ? (
                    <h2 id={props.id} className={className}>
                      {children}
                    </h2>
                  ) : (
                    <hr />
                  );
                },
                img({ ...props }) {
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
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      showLineNumbers
                      // @ts-ignore
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
              {post!.content}
            </ReactMarkdown>
          </div>

          <AuthorCard isDarkTheme={isDarkTheme} />
            {/* @ts-ignore */}
          <SeriesPosts posts={post?.series} isDarkTheme />

          <RelatedPosts {...post.related} isDarkTheme />

        </article>
      </section>
      <section>
        <DiscussionEmbed
          shortname={DISQUS_SITENAME}
          config={{
            url: `${window.location.href.indexOf('.html') > -1 ? window.location.href : window.location.href + '.html'}`,
            identifier: `${window.location.href.indexOf('.html') > -1 ? window.location.href : window.location.href + '.html'}`,
            title: post.title,
            language: "pt_BR",
          }}
        />
      </section>
    </>
  );
};

interface CoverImageProps {
  post: PostData,
  postStyle: unknown,
}

const CoverImage = ({ post, postStyle }: CoverImageProps) => {
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

const FigureCaption = ({ post, postStyle }: CoverImageProps): Element =>
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
