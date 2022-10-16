import { useTheme } from 'react-jss';
import { ITHEME } from 'theme';
import { SeriesPostsStyle } from "./series.style";

type RelatedProps = {
  posts?: posts[]
}

type posts = {
  slug?: string;
  title: string;
  series?: string;
}

export const Series = ({ posts }: RelatedProps): JSX.Element | null => {
  const theme: ITHEME = useTheme()

  if(posts === undefined || posts?.length === 0) return null

  const style = SeriesPostsStyle({ theme });

  const items = (post: posts): unknown => post?.slug ? (<a href={post.slug} >{post.title}</a>) : post.title

  return(
    <div className={style.wrapper} >
      <p className={style.title}>Este post faz parte da serie &quot;<span className={style.titleHighlight}>{posts[ 0 ].series}</span>&quot;</p>

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
