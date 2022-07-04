// @ts-nocheck
import fs from "fs";
import { Feed } from "feed";
import {remark} from 'remark'
import remarkHTML from "remark-html";


import { getAllPosts } from "./api";
import CONFIGS from "./configs";

const {
  SITE_BAR_TITLE,
  FEED_DOMAIN,
  SITEDESCRIPTION,
  FEED_ALL_ATOM,
  FEED_ALL_RSS,
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
  const siteURL = FEED_DOMAIN;
  const date = new Date();
  const author = {
    name: "Paulo Oliveira",
    email: "paulo@umdevqualquer.com",
    link: "https://umdevqualquer.com.br",
  };

  const feed = new Feed({
    title: SITE_BAR_TITLE,
    description: SITEDESCRIPTION,
    id: siteURL,
    link: siteURL,
    language: 'pt-BR',
    image: `${siteURL}/images/favicon.ico`,
    favicon: `${siteURL}/images/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Paulo Oliveira`,
    updated: date, // today's date
    generator: "Feed for Node.js",
    feedLinks: {
      atom1: `${siteURL}/${FEED_ALL_ATOM}`,  // xml format
      rss2: `${siteURL}/${FEED_ALL_RSS}`,  // xml format
      // json: `${siteURL}/rss/all.json`,// json fromat
    },
    author,
  });


  posts.forEach((post) => {
    const url = `${siteURL}/${post.slug}?resource=rss`;
    const description = remark()
    .use(remarkHTML)
    .processSync(post.summary)

    feed.addItem({
      title: post.title,
      link: url,
      description: String(description),
      image: `${siteURL}/${post.cover_image}`,
      date: new Date(),
      published: new Date(post.date),
      category: post.category,
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync(`./public/${FEED_ALL_ATOM}`, feed.atom1());
  fs.writeFileSync(`./public/${FEED_ALL_RSS}`, feed.rss2());
  // fs.writeFileSync("./public/rss/all.json", feed.json1());
}
