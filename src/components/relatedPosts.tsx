import React from "react";
import classNames from "classnames";
import { RelatedPostsStyle } from "./styles/relatedPosts.style";

type RelatedProps = {
  nextPost?: posts,
  prevPost?: posts,
  isDarkTheme: boolean
}

type posts = {
  date: string;
  slug: string;
  title: string;
}

const RelatedPosts = ({ nextPost, prevPost, isDarkTheme }: RelatedProps) => {
  // @ts-expect-error: erro de tema
  const style = RelatedPostsStyle({ isDarkTheme });

  return(
    <nav className={style.wrapper}>
      { prevPost && (
        <a href={`./${prevPost.slug}`}
        className={classNames(
          {
            [ style.navLink ]: true,
            [ style.prevPost ]: true,
            [ style.onlyOne ]: !nextPost
          },
        )}
        >&lt; {prevPost.title}</a>
        )
      }
      { nextPost && (
        <a href={`./${nextPost.slug}`}
        className={classNames(
          {
            [ style.navLink ]: true,
            [ style.nextPost ]: true,
            [ style.onlyOne ]: !prevPost
          },
        )}
        >{nextPost.title} &gt;</a>
      )}
    </nav>
  )
}

export default RelatedPosts
