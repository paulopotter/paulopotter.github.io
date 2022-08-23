// @ts-nocheck
import { useContext } from "react";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import CONFIGS from '../../services/configs'
import { Head } from "../../components";
import { getFiltredPosts } from "../../services/api";
import { HomeStyle } from "../../styles";
import { ThemeContext } from "../_app";
import { PostData } from "components/types/posts.type";
import type { GetStaticProps, GetStaticPaths } from "next";
import { ListOfPost } from "components/listOfPosts";

const {
  DEFAULT_LANG,
} = CONFIGS

dayjs.locale(DEFAULT_LANG.toLowerCase());


export default function Page({ posts }: { posts: PostData[] } ) {
  const { isDarkTheme } = useContext(ThemeContext);
  const homeStyle = HomeStyle({ isDarkTheme });

  return (
    <>
      <Head />
      <section className={homeStyle.content}>
        {posts?.map((post, index) => (
          <ListOfPost
            key={index}
            post={post}
            index={index}
          />
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
