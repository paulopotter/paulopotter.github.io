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

const Header = ({ title = "", description = "", children = null }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {title ? title + " - " : null}
      {SITE_BAR_TITLE}
    </title>
    {/* META */}
    <meta name="description" content={description || ""} />
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
    />{" "}
    /
    <meta property="og:title" content={`${SITE_BAR_TITLE}`} />
    <meta property="og:description" content={`${SITEDESCRIPTION}`} />
    <meta
      property="og:image"
      content={`https://www.gravatar.com/avatar/${HASH_GRAVATAR}?s=720`}
    />
    <meta property="og:url" content={`${SITEURL}/`} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@paulofrauches" />
    <meta name="twitter:creator" content="@paulofrauches" />
    <meta name="twitter:image:alt" content={`${SITE_BAR_TITLE}`} />
    {/* link */}
    <link rel="icon" href="./static/images/favicon.png" />
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

export default Header;