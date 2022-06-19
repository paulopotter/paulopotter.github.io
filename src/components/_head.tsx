import React from "react";
import NextHead from "next/head";
import CONFIGS from "../services/configs";

const {
  AUTHOR,
  FEED_DOMAIN,
  FEED_ALL_ATOM,
  SITE_BAR_TITLE,
  SITEURL,
  SITEDESCRIPTION,
  HASH_GRAVATAR,
} = CONFIGS;

interface HeadProps {
  title?: string
  children?: any
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
    <meta charSet="UTF-8" />
    <title>
      {process.env.NODE_ENV === 'development' ? '[LOCAL] ' : null}
      {title ? title + " - " : null}
      {SITE_BAR_TITLE}
    </title>
    {/* META */}
    <meta name="description" content={meta?.description || ""} />
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
      content="#32373d"
    />
    <meta
      name="theme-color"
      media="(prefers-color-scheme: light)"
      content="#f5f5f5"
    />
    <meta property="og:title" content={`${meta?.ogTitle ?? SITE_BAR_TITLE}`} />
    <meta
      property="og:description"
      content={`${meta?.ogDescription ?? SITEDESCRIPTION}`}
    />
    <meta
      property="og:image"
      content={
        meta?.ogImage ??
        `https://www.gravatar.com/avatar/${HASH_GRAVATAR}?s=720`
      }
    />
    <meta property="og:url" content={`${meta?.ogUrl ?? SITEURL}/`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@paulofrauches" />
    <meta name="twitter:creator" content="@paulofrauches" />
    <meta
      name="twitter:image:alt"
      content={`${meta?.twitterAlt ?? SITE_BAR_TITLE}`}
    />
    {/* link */}
    <link rel="icon" href="./images/favicon.png" />
    <link rel="preconnect" href="https://www.google-analytics.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link
      href={`${FEED_DOMAIN}/${FEED_ALL_ATOM}`}
      type="application/atom+xml"
      rel="alternate"
      title={`${SITE_BAR_TITLE} - Atom Feed`}
    />
    {children}
    {/* Scripts */}
  </NextHead>
);
