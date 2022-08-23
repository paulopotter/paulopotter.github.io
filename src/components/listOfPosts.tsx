import React, { useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import { ThemeContext } from "../pages/_app";
import { ListOfPostStyle } from "./styles/listOfPosts.sytle";
import { PostData } from "./types/posts.type";
import CONFIGS from '../services/configs'

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
  const { isDarkTheme } = useContext(ThemeContext);
  const style = ListOfPostStyle({ isDarkTheme });

  return (
    <article
      key={index}
      className={classNames(style.article, {
        [style.articleFirst]: index === 0,
      })}
    >
      <div className={style.articleContent}>
        <header>
          <Link href={`${SITE_URL}/${post.slug}`}>
            <a className={style.titleLink}>
              {index === 0
                ? post?.title
                : post?.title?.length > 70
                ? post.title.slice(0, 70) + "..."
                : post.title }
            </a>
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
