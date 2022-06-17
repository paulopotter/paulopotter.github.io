import classNames from "classnames";
import Link from "next/link";
import { Fragment, useContext } from "react";
import { Head } from "../components";
import { getAllPosts } from "../services/api";
import { HomeStyle } from "../styles/";
import { ThemeContext } from "./_app";

export default function Page({ posts }) {
  const summary = (index, post) => {
    if (index === 0) {
      console.log(post)
      return (
        <div className="home_content__article-body-summary">
          {post.summary ?? post?.content?.slice(0, 140)}
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
                <Link href={`${post.slug}`}>
                  <a className={homeStyle.titleLink}>
                    {index === 0
                      ? post.title
                      : post.title.lenght > 70
                      ? post.title.slice(0, 70) + "..."
                      : post.title}
                  </a>
                </Link>
              </header>
              {summary(index, post)}
              <footer className={homeStyle.category}>
                {post.date} -{" "}
                {post?.category?.split(",")?.map((cat, categoryIndex) => (
                  <Fragment key={`${index}-category-${categoryIndex}`}>
                    <Link href={`/${cat.trim()}`}>{cat.toUpperCase()}</Link>
                    {categoryIndex < post.category.split(",").length - 1
                      ? " - "
                      : null}
                  </Fragment>
                ))}
              </footer>
            </div>

            {post?.cover_image && (
              <a href={`${post.slug}`} className={homeStyle.imageLink}>
                <img
                  className={homeStyle.imageCover}
                  src={`${post?.cover_image}`}
                  alt={`${post?.cover_image_alt || ""}`}
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

export function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "slug",
    "date",
    "category",
    "cover_image",
    "summary",
  ]);

  return {
    props: { posts },
  };
}
