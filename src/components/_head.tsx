import React from "react";
import NextHead from "next/head";
import CONFIGS from "../services/configs";
import { COLOR } from "config";
import { NextSeo } from 'next-seo';

const {
  IS_DEV_MODE,
  AUTHOR_IMG,
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
    ogType?: 'website' | 'article'
    ogArticle?: Record<string, unknown>
    twitterAlt?: string
  }
}
enum ImageExtensionWhitelist {
  'jpeg',
  'jpg',
  'png',
  'webp',
  'gif',
}

export const Head = ({ title = "", children = null, meta = {} }: HeadProps) => {
  const customTitle = `${IS_DEV_MODE ? '[LOCAL]' : ''} ${title ? title + " -" : ''} ${TITLE}`
  const description = meta?.description || SITE_DESCRIPTION
  const canonical = `${meta?.ogUrl ?? SITE_URL}`
  const siteName = TITLE
  const getImageExtension: string = meta?.ogImage?.split('.').at(-1) ?? 'jpeg'
  // @ts-expect-error: I dont know whyyy
  const imageExtension: string = ImageExtensionWhitelist[ImageExtensionWhitelist[getImageExtension]] ?? 'jpeg'
  const image = {
    url: meta?.ogImage
          ? meta.ogImage.startsWith(SITE_URL)
            ? meta.ogImage.replace('./', '')
            : `${SITE_URL}/${meta?.ogImage.replace('./', '')}`
          : `${AUTHOR_IMG}?s=1200`,
    type: `image/${ imageExtension }`
  }
  const article = meta?.ogType === 'article' && meta?.ogArticle ? meta.ogArticle : {}

  return (
    <>
      <NextHead>
        <>
          <meta charSet="UTF-8" />
          <title>{ customTitle }</title>
          {/* META */}
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            key="viewport"
          />
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
      <NextSeo
        title={ customTitle }
        description={ description }
        canonical={ canonical }
        openGraph={{
          url: canonical,
          title: customTitle,
          site_name: siteName,
          locale: DEFAULT_LANG,
          images: [{ ...image }],
          type: meta?.ogType ?? 'website',
          description,
          article
        }}
        twitter={{
          handle: TWITTER_CREATOR,
          site: TWITTER_SITE,
          cardType: TWITTER_CARD,
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `${SITE_URL}/images/favicon.png`,
          },
          {
            rel:"preconnect",
            href:"https://www.google-analytics.com",
          },
          {
            rel:"preconnect",
            href:"https://www.googletagmanager.com",
          },
          {
            rel:"preconnect",
            href:"https://fonts.googleapis.com/",
          },
          {
            rel:"preconnect",
            href:"https://pagead2.googlesyndication.com/",
          },
          {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            crossOrigin: "anonymous",
          },
        ]}
      />
    </>
)};

