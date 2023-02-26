//
import React, { useEffect, useState } from 'react';
import { dracula, materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from 'react-jss';
import ReactMarkdown from 'react-markdown';
import rehypeFigure from 'rehype-figure';
import rehypeRaw from 'rehype-raw';
import rehypeRewrite from 'rehype-rewrite';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import { ITHEME } from 'theme';
import { Head, Link, Image, isExternalLink } from 'components';
import { TipsStyles } from './tips.style';
import { PostData } from 'modules/posts/posts.type';

interface HomeView {
  posts: PostData[];
}

export function TipsView({ posts }: HomeView): JSX.Element {
  const theme: ITHEME = useTheme();
  const isDarkTheme = theme.name === 'dark';
  const style = TipsStyles()
  const [codeTheme, setCodeTheme] = useState(isDarkTheme ? materialOceanic : dracula);

  useEffect(() => {
    setCodeTheme(isDarkTheme ? materialOceanic : dracula);
  }, [isDarkTheme]);

  return (
    <>
      <Head />
      {posts?.map((post, index) => (
        <article key={`tips-${index}-${post.slug}`} className={style.article}>
          <div className={style.articleContent}>
            <header>
              <p className={style.articleTitle}>
                {post?.title}
              </p>

              {/* <p>
                {post.category?.map((category, indexCategory) => (
                  <span key={`category-${index}-${indexCategory}`}>{category}</span>
                ))}
              </p> */}
            </header>
            <div>
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
                    // eslint-disable-next-line react/prop-types
                    return !props?.id?.includes('footnote') ? (
                    // eslint-disable-next-line react/prop-types
                      <h2 id={props?.id} className={className}>
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
          </div>
        </article>
      ))}
    </>
  );
}
const fixImgSRC = (src: string): string => (isExternalLink(src) ? src : src.replace('./', '../'));
