import React from "react";
import { SeriesPostsStyle } from "./styles/seriesPosts.style";

type RelatedProps = {
  posts?: posts[],
  isDarkTheme: boolean
}

type posts = {
  slug?: string;
  title: string;
  series?: string;
}

const SeriesPosts = ({ posts, isDarkTheme }: RelatedProps): JSX.Element | null => {
  if(posts === undefined || posts?.length === 0) return null

  const style = SeriesPostsStyle({ isDarkTheme });

  const items = (post: posts): unknown => post?.slug ? (<a href={post.slug} >{post.title}</a>) : post.title

  return(
    <div className={style.wrapper} >
      <p className={style.title}>Este post faz parte da serie &quot;<span className={style.titleHighlight}>{posts[0].series}</span>&quot;</p>

      <ul className={style.list}>
        {
          posts?.map((post, index) => (
            <li key={post.title} className={style.listItem} >
              <>
                <span className={style.textHighlight}>PARTE { index + 1}: &nbsp;</span>
                {items(post)}
              </>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default SeriesPosts
