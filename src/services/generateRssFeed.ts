import fs from "fs";
import { Feed } from "feed";
import {remark} from 'remark'
import remarkHTML from "remark-html";

import { getAllPosts } from "./api";
import CONFIGS from "./configs";

const {
  AUTHOR_EMAIL,
  AUTHOR,
  DEFAULT_LANG,
  FEED_ALL_ATOM,
  FEED_ALL_RSS,
  FEED_DOMAIN,
  TITLE,
  SITE_URL,
  SITE_DESCRIPTION,
} = CONFIGS

export default async function generateRssFeed() {
  const posts = getAllPosts([
    "title",
    "slug",
    "date",
    "cover_image",
    "summary",
    "category",
  ]);

  const date = new Date();
  const author = {
    name: AUTHOR,
    email: AUTHOR_EMAIL,
    link: SITE_URL,
  };

  const feed = new Feed({
    title: TITLE,
    description: SITE_DESCRIPTION,
    id: FEED_DOMAIN,
    link: FEED_DOMAIN,
    language: DEFAULT_LANG,
    image: `${FEED_DOMAIN}/images/favicon.ico`,
    favicon: `${FEED_DOMAIN}/images/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, ${AUTHOR}`,
    updated: date, // today's date
    feedLinks: {
      atom1: `${FEED_DOMAIN}/${FEED_ALL_ATOM}`,  // xml format
      rss2: `${FEED_DOMAIN}/${FEED_ALL_RSS}`,  // xml format
      // json: `${siteURL}/rss/all.json`,// json fromat
    },
    author,
  });


  posts.forEach((post) => {
    const url = `${FEED_DOMAIN}/${post.slug}?resource=rss`;
    const description = remark()
    .use(remarkHTML)
    .processSync(post.summary)

    feed.addItem({
      title: post.title,
      link: url,
      description: String(description),
      image: `${FEED_DOMAIN}/${post.cover_image}`,
      date: new Date(),
      published: new Date(post.date || new Date()),
      // @ts-expect-error: My category was different
      category: post.category,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync(`./public/${FEED_ALL_ATOM}`, feed.atom1());
  fs.writeFileSync(`./public/${FEED_ALL_RSS}`, feed.rss2());
  // fs.writeFileSync("./public/rss/all.json", feed.json1());
}
