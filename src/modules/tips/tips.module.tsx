import React from 'react';

import { Head, Markdown } from 'components';
import { TipsStyles } from './tips.style';
import { PostData } from 'modules/posts/posts.type';

interface HomeView {
  posts: PostData[];
}

export function TipsView({ posts }: HomeView): JSX.Element {
  const style = TipsStyles()

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
            <Markdown>
              { post.content! }
            </Markdown>
          </div>
        </article>
      ))}
    </>
  );
}
