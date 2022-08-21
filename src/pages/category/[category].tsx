// @ts-nocheck
import { useContext } from "react";
import classNames from "classnames";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import ReactMarkdown from "react-markdown";

import CONFIGS from '../../services/configs'
import { Head } from "../../components";
import { getFiltredPosts } from "../../services/api";
import { HomeStyle } from "../../styles";
import { ThemeContext } from "../_app";
import { PostData } from "components/types/posts.type";
import type { GetStaticProps, GetStaticPaths } from "next";

const {
  DATE_DEFAULT_FORMAT,
  DEFAULT_LANG,
  POST_DATE_FORMAT,
  SITE_URL,
} = CONFIGS

dayjs.locale(DEFAULT_LANG.toLowerCase());


export default function Page({ posts }: { posts: PostData[] } ) {
  const summary = (index: number, post: PostData) => {
    if (index === 0) {
      return (
        <div className="home_content__article-body-summary">
          <ReactMarkdown skipHtml>
            {post?.summary as string ?? post?.content?.slice?.(0, 140)}
          </ReactMarkdown>
        </div>
      );
    }
    return;
  };
  const { isDarkTheme } = useContext(ThemeContext);
  const homeStyle = HomeStyle({ isDarkTheme });

  return (
    <>
      <Head />
      <section className={homeStyle.content}>
        {posts?.map((post, index) => (
          <article
            key={index}
            className={classNames(homeStyle.article, {
              [homeStyle.articleFirst]: index === 0,
            })}
          >
            <div className={homeStyle.articleContent}>
              <header>
                <Link href={`${SITE_URL}/${post.slug}`}>
                  <a className={homeStyle.titleLink}>
                    {index === 0
                      ? post?.title
                      : post?.title.length > 70
                      ? post.title.slice(0, 70) + "..."
                      : post.title }
                  </a>
                </Link>
              </header>
              {summary(index, post)}
              <footer className={homeStyle.category}>
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
              <a href={`${post.slug}`} className={homeStyle.imageLink} tabIndex={-1}>
                <img
                  className={homeStyle.imageCover}
                  src={`${post?.cover_image}`}
                  alt={`${post?.cover_image_alt || post?.title || ""}`}
                  height={index > 1 ? "144" : "500"}
                  width={index > 1 ? "144" : "500"}
                />
              </a>
            )}
          </article>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps({ params }): GetStaticProps {
  const { category } = params
  const posts = getFiltredPosts([
    "title",
    "slug",
    "date",
    "category",
    "cover_image",
    "summary",
  ], [['category', category.toLowerCase()]]);

  if (posts.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts },
  };
}

export function getStaticPaths(): GetStaticPaths {
  const posts = getFiltredPosts(["category"]);
  let categories = []
  posts?.forEach(post => { categories.push(post.category)})
  categories = [...new Set(categories.flat())]

  return {
    /**
     * Retornamos para cada rota o parâmetro slug,
     * para conseguirmos usá-lo na função getStaticProps acima.
     */
    paths: categories?.map(category => ({
      params: {
        category: category.toLowerCase()
      },
    })),
    /**
     * A opção fallback: false fala para o Next.js
     * não tentar executar essa rota se o arquivo
     * markdown para ela não existir
     */
    fallback: true,
  };
}
