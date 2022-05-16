import Link from "next/link";
import { Fragment } from "react";
import { Header } from "../components";
import { getAllPosts } from "../services/api";

export default function Page({ posts }) {
  const summary = (index, post) => {
    if (index === 0) {
      return (
        <div className="home_content__article-body-summary">{post.summary}</div>
      );
    }
    return;
  };

  return (
    <>
      <Header>
        <link href={`./static/styles/index.css`} rel="stylesheet" />
      </Header>
      <section className="home_content">
        {posts?.map((post, index) => (
          <article
            key={index}
            className={`home_content__article ${
              index === 0 ? "home_content__article--first" : ""
            }`.trim()}
          >
            <div className="home_content__article-content">
              <header>
                <Link
                  href={`/${post.slug}`}
                  className={"home_content__article-title-link"}
                >
                  {index === 0 ? post.title : post.title.slice(0, 70) + "..."}
                </Link>
              </header>
              {summary(index, post)}
              <footer className="home_content__article-category">
                {post.date} -{" "}
                {post?.category?.split(",")?.map((cat, categoryIndex) => (
                  <Fragment key={`${index}-category-${categoryIndex}`}>
                    <Link
                      href={`/${cat.trim()}`}
                      className={`home_content__article-header-category-link logo-${post.category.toLowerCase()}`}
                    >
                      {cat.toUpperCase()}
                    </Link>
                    {categoryIndex < post.category.split(",").length - 1
                      ? " - "
                      : null}
                  </Fragment>
                ))}
              </footer>
            </div>

            {post?.cover_image && (
              <a
                href={`${post.url}`}
                className="home_content__article-image-link"
              >
                <img
                  className="home_content__article-cover-image image-process-article_thumb"
                  src={`./images/${post?.cover_image}`}
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
  ]);

  return {
    props: { posts },
  };
}
