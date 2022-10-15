import React from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useTheme } from 'react-jss';

import CONFIGS from 'services/configs'
import { Link } from 'components'
import { PostData } from "components/types/posts.type";
import { THEME } from 'theme';
import { ListOfPostStyle } from "./list-posts.style";

interface ListProps {
  post: PostData,
  index: number,
}

const {
  DATE_DEFAULT_FORMAT,
  POST_DATE_FORMAT,
  SITE_URL,
} = CONFIGS

export const ListOfPost = ({ post, index }: ListProps) => {
  const theme: THEME = useTheme()
  const style = ListOfPostStyle({ theme });

  return (
    <article
      key={index}
      className={classNames(style.article, {
        [ style.articleFirst ]: index === 0,
      })}
    >
      <div className={style.articleContent}>
        <header>
          <Link href={`${SITE_URL}/${post.slug}`} className={style.titleLink}>
              {index === 0
                ? post?.title
                : post?.title?.length > 70
                ? post.title.slice(0, 70) + "..."
                : post.title }
          </Link>
        </header>
        { summary({ index, post }) }
        <footer className={style.category}>
          <span aria-label="Data de pulicação:">
            {dayjs(post.date, DATE_DEFAULT_FORMAT, "pt", true)
              .format(POST_DATE_FORMAT)
              .toString()}
          </span>
          {" "}-{" "}
          {post?.category?.map((cat, categoryIndex, arr) => (
            <span key={`${index}-category-${categoryIndex}`}>
              <Link href={`/category/${cat.toLowerCase()}`}>{cat.toUpperCase()}</Link>
              {categoryIndex < arr.length - 1
                ? " - "
                : null}
            </span>
          ))}
        </footer>
      </div>

      {post?.cover_image && (
        <a href={`${post.slug}`} className={style.imageLink} tabIndex={-1}>
          <img
            className={style.imageCover}
            src={`${post?.cover_image}`}
            alt={`${post?.cover_image_alt || post?.title || ""}`}
            height={index > 1 ? "144" : "500"}
            width={index > 1 ? "144" : "500"}
          />
        </a>
      )}
    </article>
  )
}

const summary = ({ post, index }: ListProps) => {
  if (index === 0) {
    return (
      <div className="home_content__article-body-summary">
        <ReactMarkdown skipHtml>
          { post?.summary as string ?? post?.content?.slice?.(0, 140) }
        </ReactMarkdown>
      </div>
    );
  }
  return;
};
