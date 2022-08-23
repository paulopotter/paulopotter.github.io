import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import CONFIGS from '../services/configs'
import { Head } from "../components";
import { getFiltredPosts } from "../services/api";
import { HomeStyle } from "../styles/";
import generateRSS from "../services/generateRssFeed";
import { PostData } from "components/types/posts.type";
import { ListOfPost } from "components/listOfPosts";

const {
  DEFAULT_LANG,
} = CONFIGS

dayjs.locale(DEFAULT_LANG.toLowerCase());


export default function Page({ posts }: { posts: PostData[] } ) {

  const homeStyle = HomeStyle();

  return (
    <>
      <Head />
      <section className={homeStyle.content}>
        {
          posts?.map((post, index) => (
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

export async function getStaticProps() {
  await generateRSS();
  const posts = getFiltredPosts([
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
