import React from "react";
import NextHead from "next/head";
import CONFIGS from "../services/configs";
import { COLOR } from "config";

const {
  IS_DEV_MODE,
  AUTHOR_IMG,
  AUTHOR,
  FEED_ALL_ATOM,
  FEED_ALL_RSS,
  FEED_DOMAIN,
  SITE_DESCRIPTION,
  SITE_URL,
  DEFAULT_LANG,
  TITLE,
  TWITTER_CARD,
  TWITTER_SITE,
  TWITTER_CREATOR,
} = CONFIGS;

interface HeadProps {
  title?: string
  children?: unknown
  meta?: {
    description?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: string
    ogUrl?: string
    twitterAlt?: string
  }
}

export const Head = ({ title = "", children = null, meta = {} }: HeadProps) => (
  <NextHead>
    <>
      <meta charSet="UTF-8" />
      <title>
        { IS_DEV_MODE ? '[LOCAL] ' : null}
        {title ? title + " - " : null}
        {TITLE}
      </title>
      {/* META */}
      <meta name="title" content={ (title ? title + " - " : null) + TITLE} />

      <link rel="canonical" href={`${meta?.ogUrl ?? SITE_URL}`} />
      <meta name="description" content={meta?.description || SITE_DESCRIPTION} />
      <meta name="author" content={AUTHOR} />
      <meta name="robots" content="noimageindex" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content={COLOR.dark.background}
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content={COLOR.light.background}
      />
      <meta property="og:title" content={`${meta?.ogTitle ?? TITLE}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={DEFAULT_LANG} />
      <meta
        property="og:description"
        content={`${meta?.ogDescription ?? SITE_DESCRIPTION}`}
      />
      <meta
        property="og:image"
        itemProp="image"
        content={ meta?.ogImage ? `${SITE_URL}/${meta?.ogImage.replace('./', '')}`: `${AUTHOR_IMG}?s=1200`}
      />
      <meta
        name="msapplication-TileImage"
        content={ meta?.ogImage ? `${SITE_URL}/${meta?.ogImage.replace('./', '')}`: `${AUTHOR_IMG}?s=1200`}
      />
      <meta property="og:image:type" content="image/jpeg"></meta>
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:url" content={`${meta?.ogUrl ?? SITE_URL}`} />
      <meta name="twitter:card" content={TWITTER_CARD} />
      <meta name="twitter:site" content={TWITTER_SITE} />
      <meta name="twitter:creator" content={TWITTER_CREATOR} />
      <meta property="twitter:url" content={`${meta?.ogUrl ?? SITE_URL}`} />
      <meta property="twitter:title" content={`${meta?.ogTitle ?? TITLE}`} />
      <meta
        property="twitter:image"
        content={ meta?.ogImage ? `${SITE_URL}/${meta?.ogImage.replace('./', '')}`: `${AUTHOR_IMG}?s=1200`}
      />
      <meta
        itemProp="thumbnailUrl"
        content={ meta?.ogImage ? `${SITE_URL}/${meta?.ogImage.replace('./', '')}`: `${AUTHOR_IMG}?s=1200`}
      />
      <meta
        property="twitter:description"
        content={`${meta?.ogDescription ?? SITE_DESCRIPTION}`}
      />
      <meta
        name="twitter:image:alt"
        content={`${meta?.twitterAlt ?? TITLE}`}
      />
      {/* link */}
      <link rel="icon" href="./images/favicon.png" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link
        href={`${FEED_DOMAIN}/${FEED_ALL_RSS}`}
        type="application/rss+xml"
        rel="alternate"
        title={`${TITLE} - RSS Feed`}
      />
      <link
        href={`${FEED_DOMAIN}/${FEED_ALL_ATOM}`}
        type="application/atom+xml"
        rel="alternate"
        title={`${TITLE} - Atom Feed`}
      />
      {children}
      {/* Scripts */}
    </>
  </NextHead>
);
