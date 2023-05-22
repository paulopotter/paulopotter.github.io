import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useTheme } from 'react-jss';

// Syntax Highlighter Theme
import { dracula, materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

// Syntax Highlighter Languages
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import sass from 'react-syntax-highlighter/dist/cjs/languages/prism/sass';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';

// React Markdown Plugins
import rehypeFigure from 'rehype-figure';
import rehypeRaw from 'rehype-raw';
import rehypeRewrite from 'rehype-rewrite';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

// Project Components
import { isExternalLink, Link, Image } from 'components';
import { MarkdownStyle } from './markdown.style';

import type { ITHEME } from 'theme';

type MarkdownProp = {
  children: any,
}

SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('sass', sass);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

export function Markdown({ children }: MarkdownProp){

  const theme: ITHEME = useTheme();
  const isDarkTheme = theme.name === 'dark';
  const [codeTheme, setCodeTheme] = useState(isDarkTheme ? materialOceanic : dracula);
  const style = MarkdownStyle();

  useEffect(() => {
    setCodeTheme(isDarkTheme ? materialOceanic : dracula);
  }, [isDarkTheme]);

  return (

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
              src={props.src?.replace('public/', '/')}
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
      {children}
    </ReactMarkdown>
  )
}

const fixImgSRC = (src: string): string => (isExternalLink(src) ? src : src.replace('./', '../'));
