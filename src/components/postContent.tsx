import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { Header } from ".";
import CONFIGS from "../services/configs";

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

export const PostContent = ({ post }: Props) => {
  return (
    <>
      <Header
        title={post.title}
        meta={{
          ogTitle: post.title,
          ogDescription: post?.summary,
          ogImage: post?.cover_image_url,
          ogUrl: `${SITEURL}/${post.slug}`,
          twitterAlt: post.cover_image_alt,
        }}
      >
        <>
          <link href={`./static/styles/article.css`} rel="stylesheet" />
        </>
      </Header>
      <section className="article_content" container={"true"}>
        <article className="article_content-body">
          <h1 className="article_content-title">{post.title} {
            post?.subtitle && (
              <small> {post.subtitle} </small>)
          }
          </h1>
          {
            post?.readtime_string && (
              <small> Tempo médio de leitura: {post.readtime_string}}.</small>)
          }
          <div className="article_content-content">
            <CoverImage post={post} />

            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                code({ className, children }) {
                  const language = className?.replace("language-", "");

                  return (
                    <SyntaxHighlighter
                      style={materialDark}
                      language={language}
                      // @ts-ignore
                      children={children[0]}
                    />
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

        </article>
      </section>
    </>
  );
};


const CoverImage = ({ post }) => {
  return (
    <>
      {
        post?.cover_image && (
          <figure className='article_cover'>
            <img
              className='article_cover__img image-process-article_cover'
              src={`./static/images/${post.cover_image}`}
              alt={`"${post?.cover_image_alt}"`}
            />
            <FigureCaption post={post} />
          </figure>
        )
      }
    </>
  )
}

const FigureCaption = ({ post }) => (
  post?.cover_image_by && (
    <figcaption className='article_cover__credit'>Créditos: {" "}
      {post?.cover_image_link ? (
        <a href={`${post.cover_image_link}`}>{post.cover_image_by || ''}</a>)
        :
        post?.cover_image_by || ''
      }
    </figcaption>
  )
)
