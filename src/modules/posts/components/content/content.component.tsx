import React, { useEffect, useState } from "react";
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
import { useTheme } from 'react-jss';
import { ITHEME } from 'theme';

import { Head, Link } from "components";
// import type { PostData } from "components/types/posts.type";
import CONFIGS from "services/configs";
import { PostStyle } from "./content.style";

import { Author as AuthorCard, Series as SeriesPosts, Related as  RelatedPosts } from '../'

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

export const Post = ({ post }: Props) => {
  const theme: ITHEME = useTheme()
  const isDarkTheme = theme.name === 'dark'
  const style = PostStyle({ theme });

  const [ codeTheme, setCodeTheme ] = useState(
    isDarkTheme ? materialOceanic : dracula
  );

  useEffect(() => {
    setCodeTheme(isDarkTheme ? materialOceanic : dracula);
  }, [ isDarkTheme ]);

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
          ogType: 'article',
          ogArticle: {
            publishedTime: new Date(post!.date as string).toISOString(),
            modifiedTime: new Date(post!.date as string).toISOString(),
            section: 'Technology',
            authors: [
              `${SITE_URL}/author`,
            ],
            tags: post?.category,
          }
        }}
      ></Head>
      <section className={style.articleSection}>
        <article className={style.articleBody}>
          <h1 className={style.articleTitle}>
            {post.title} {post?.subtitle && <small> {post.subtitle} </small>}
          </h1>
          {post?.readingTime && (
            <small> Tempo médio de leitura: {post.readingTime}.</small>
          )}
          <div className={style.articleContent}>
            <CoverImage post={post} postStyle={style} />

            <ReactMarkdown
              skipHtml
              remarkPlugins={[ remarkGfm ]}
              rehypePlugins={[
                rehypeRaw,
                rehypeSlug,
                [ rehypeFigure, { className: style.contentFigure } ],
                [
                  rehypeRewrite,
                  {
                    rewrite: (node: {tagName: string, properties: {src: string}}): void => {
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
                a({ className, children, ...props }) {
                  return (
                    <Link href={props!.href!} className={className}>
                      {children}
                    </Link>
                  )
                },
                img({ ...props }) {
                  // TODO: corrigir imagens e descrições
                  return (
                    <figure className={style.articleCover}>
                      <img
                        className={style.articleCoverImg}
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
                      // @ts-expect-error: I dont know
                      style={codeTheme}
                      language={match[ 1 ]}
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
              {post.content!}
            </ReactMarkdown>
          </div>

          <AuthorCard isDarkTheme={isDarkTheme} />
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
  postStyle: Record<string, string>,
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

const FigureCaption = ({ post, postStyle }: CoverImageProps): JSX.Element | null =>
  post?.cover_image_by ? (
    <figcaption className={postStyle.articleCoverCredit}>
      Créditos:{" "}
      {post?.cover_image_link ? (
        <Link
          href={post.cover_image_link}
        >
          {post.cover_image_by || ""}
        </Link>
      ) : (
        post?.cover_image_by || ""
      )}
    </figcaption>
  ) : null;

const fixImgSRC = (src: string): string => (isExternalLink(src) ? src : src.replace("./", "../"))

const isExternalLink = (url: string): boolean => (url.indexOf("http://") == 0 || url.indexOf("https://") == 0)
