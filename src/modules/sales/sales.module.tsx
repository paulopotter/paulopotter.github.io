import React, { useState } from 'react';

import { Head,  Markdown, Section } from 'components';
import { SalesStyles } from './sales.style';
import { PostData } from 'modules/posts/posts.type';
import classNames from 'classnames';
import { useTheme } from 'react-jss';
import { ITHEME } from 'theme';

interface HomeView {
  posts: PostData[];
}

export function SalesView({ posts }: HomeView): JSX.Element {
  const [activeTab, setActiveTab] = useState<string | null>(posts?.[0]?.title || null);
  const theme: ITHEME = useTheme();
  const style = SalesStyles({ theme })

  const tabTitles: string[] = [];
  const tabContents: Record<string, any> = {};

  posts?.forEach((post) => {
    const title = post.title;
    if (!title) return;
    tabTitles.push(title);
    tabContents[title] = post.content;
  })

  return (
    <>
      <Head />
      <Section>
        <header className={style.articleTitleContent}>
          <h2 className={style.articleTitle}>Lojinha de recomendações.</h2>
          <p className={style.articleCallout}>
            Vira e mexe eu recebo mensagens de pessoas perguntando sobre alguns produtos para
            comprar. <br />
            Então resolvi fazer essa pagina com algumas recomendações de produtos para você dar uma olhada.
          </p>
        </header>

        <section className={style.tabs}>
          <div className={style.tabList} role="tablist">
            {tabTitles.length > 1 &&
              tabTitles?.map((title, index) => (
                <button
                  key={`tab-${index}`}
                  className={classNames(style.tabItem, style.tabButton, {
                    [style.tabItemActive]: activeTab === title,
                  })}
                  role="tab"
                  aria-controls={`panel-${index}`}
                  aria-selected={index === 0}
                  onClick={() => {
                    setActiveTab(title);
                  }}
                >
                  {title}
                </button>
              ))}
          </div>

          {tabContents?.[activeTab!] && (
            <div
              key={`panel-${activeTab}`}
              id={`panel-${activeTab}`}
              role="tabpanel"
              className={classNames(style.tabPanel, {
                [style.oneTab]: tabTitles.length === 1,
              })}
            >
              <Markdown>{tabContents[activeTab!]}</Markdown>
            </div>
          )}
        </section>
      </Section>
    </>
  );
}
