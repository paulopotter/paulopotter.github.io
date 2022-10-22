import React, { useEffect, useState } from 'react';
import { dracula, materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from 'react-jss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import ReactMarkdown from 'react-markdown';
import rehypeFigure from 'rehype-figure';
import rehypeRaw from 'rehype-raw';
import rehypeRewrite from 'rehype-rewrite';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';

import { ITHEME } from 'theme';
import CONFIGS from 'services/configs';
import { Head, Link, Image, isExternalLink } from 'components';
import { Author as AuthorCard, Series as SeriesPosts, Related as RelatedPosts, Comments } from '../';


import { PostStyle } from './content.style';
import type { PostData } from '../../posts.type';

const { SITE_URL } = CONFIGS;

interface Props {
  post: PostData;
}

SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

export const Post = ({ post }: Props) => {
  const theme: ITHEME = useTheme();
  const isDarkTheme = theme.name === 'dark';
  const style = PostStyle({ theme });

  const [codeTheme, setCodeTheme] = useState(isDarkTheme ? materialOceanic : dracula);

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
          ogType: 'article',
          ogArticle: {
            publishedTime: new Date(post!.date as string).toISOString(),
            modifiedTime: new Date(post!.date as string).toISOString(),
            section: 'Technology',
            authors: [`${SITE_URL}/author`],
            tags: post?.category,
          },
        }}
      ></Head>
      <section className={style.articleSection}>
        <article className={style.articleBody}>
          <h1 className={style.articleTitle}>
            {post.title} {post?.subtitle && <small> {post.subtitle} </small>}
          </h1>
          {post?.readingTime && <small> Tempo médio de leitura: {post.readingTime}.</small>}
          <div className={style.articleContent}>
            {
              post?.cover_image && (
                <Image
                  src={post.cover_image}
                  alt={post.cover_image_alt}
                  className={style}
                  caption={{
                    link: post.cover_image_link,
                    className: style,
                    text: post.cover_image_by,
                  }}
                />
              )
            }

            <ReactMarkdown
              skipHtml
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                rehypeRaw,
                rehypeSlug,
                [rehypeFigure, { className: style.contentFigure }],
                [
                  rehypeRewrite,
                  {
                    rewrite: (node: { tagName: string; properties: { src: string } }): void => {
                      if (
                        node.tagName == 'img' &&
                        !(
                          node.properties.src.indexOf('http://') == 0 ||
                          node.properties.src.indexOf('https://') == 0
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
                  return !props?.id?.includes('footnote') ? (
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
                  );
                },
                img({ ...props }: {
                  src?: string
                  title?: string
                  alt?: string
                }) {
                  // TODO: corrigir imagens e descrições
                  return props.src !== undefined ? (
                    <Image
                      className={style}
                      src={props.src}
                      alt={props.title ?? props.alt}
                    />
                  ) : null
                },
                code({ inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      showLineNumbers
                      // @ts-expect-error: I dont know
                      style={codeTheme}
                      language={match[1]}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
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

          <AuthorCard />
          <SeriesPosts posts={post?.series} />
          <RelatedPosts {...post.related} />
        </article>
      </section>
      <section>
        <Comments
          title={post.title}
        />
      </section>
    </>
  );
};
const fixImgSRC = (src: string): string => (isExternalLink(src) ? src : src.replace('./', '../'));
