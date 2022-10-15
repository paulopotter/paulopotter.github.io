import classNames from "classnames";
import { RelatedPostsStyle } from "./related.style";
import { useTheme } from 'react-jss';
import { THEME } from 'theme';

type RelatedProps = {
  nextPost?: posts,
  prevPost?: posts,
}

type posts = {
  date: string;
  slug: string;
  title: string;
}

export const Related = ({ nextPost, prevPost }: RelatedProps): JSX.Element | null => {
  const theme: THEME = useTheme()
  const style = RelatedPostsStyle({ theme });
  if(!prevPost && !nextPost) return null

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
