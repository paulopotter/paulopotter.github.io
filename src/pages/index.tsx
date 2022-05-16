import Link from 'next/link';
import Header from '../components/header';
import { getAllPosts } from '../services/api';

export default function Page({ posts }) {
  const summary = (index, post) => {
      if(index === 0) {
        return (
        <div className='home_content__article-body-summary'>
          { post.summary }
        </div>
      )
    }
      return
  }

  return (
    <>
      <Header>
        <link href={`./static/styles/index.css`} rel="stylesheet" />
      </Header>
      <section className="home_content">
        {
          posts?.map((post, index) =>
            <article key={index} className={`home_content__article ${ index === 0 ? 'home_content__article--first' : null}`}>
              <div className="home_content__article-content">
                <header>
                  <Link href={ `/${ post.slug }`} className={'home_content__article-title-link'} >
                    {
                      index === 0 ? post.title : post.title.slice(0, 70) + "..."
                    }
                  </Link>
                </header>
                { summary(index, post) }
                <footer className="home_content__article-category">
                { post.date } -
                {
                  post?.category?.map(cat => (
                    <>
                    <Link href={`/${cat}`} className='home_content__article-header-category-link logo-{{article.category|lower}}'>{ cat.toUppercase() }</Link>{ index !== post.category.length - 1 ?  " - " : null }</>
                  ))
                }
                </footer>
              </div>
            </article>
          )
        }

      </section>
    </>
  );
}


export function getStaticProps() {
  const posts = getAllPosts([ 'title', 'slug', 'date' ]);

  return {
    props: { posts }
  }
}
