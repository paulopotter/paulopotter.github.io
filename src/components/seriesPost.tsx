import { SeriesPostsStyle } from "./styles/seriesPosts.style";

type RelatedProps = {
  posts?: posts[],
  isDarkTheme: boolean
}

type posts = {
  slug?: string;
  title: string;
  series: string;
}

const SeriesPosts = ({ posts, isDarkTheme }: RelatedProps): any => {
  if(posts === undefined || posts?.length === 0) return

  // @ts-expect-error: isdark nao aceito
  const style = SeriesPostsStyle({ isDarkTheme });

  const items = (post: posts): any => post?.slug ? (<a href={post.slug} >{post.title}</a>) : post.title

  return(
    <div className={style.wrapper} >
      <p className={style.title}>Este post faz parte da serie "<span className={style.titleHighlight}>{posts[0].series}</span>"</p>

      <ul className={style.list}>
        {
          posts?.map((post, index) => (
            <li key={post.title} className={style.listItem} >
              <span className={style.textHighlight}>PARTE { index + 1}: &nbsp;</span>
              {items(post)}
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default SeriesPosts
