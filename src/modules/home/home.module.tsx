import { Head } from "../../components";
import { HomeStyle } from "./home.style";
import { PostData } from "../../components/types/posts.type";
import { ListOfPost } from "../../components/listOfPosts";

interface HomeView {
  posts: PostData[]
}

export function HomeView({ posts }: HomeView): JSX.Element {
  const homeStyle = HomeStyle();

  return (
    <>
      <Head />
      <section className={homeStyle.content}>
        {
          posts?.map((post, index) => (
            <ListOfPost key={index} post={post} index={index} />
          ))
        }
      </section>
    </>
  );
}
