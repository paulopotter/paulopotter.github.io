import React from 'react';

import CONFIGS from 'services/configs';
import { Head, Image, Markdown } from 'components';
import {
  Author as AuthorCard,
  Series as SeriesPosts,
  Related as RelatedPosts,
  Comments
} from '../';

import { PostStyle } from './content.style';
import type { PostData } from '../../posts.type';

const { SITE_URL } = CONFIGS;

interface Props {
  post: PostData;
}

export const Post = ({ post }: Props) => {
  const style = PostStyle();

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
          wordcount: post.content?.length,
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
            <Markdown>
              { post.content as any }
            </Markdown>
          </div>

          <AuthorCard />
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
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
