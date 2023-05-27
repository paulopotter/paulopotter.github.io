import React from 'react';
import NextHead from 'next/head';
import { NextSeo } from 'next-seo';

import CONFIGS from '../services/configs';
import { THEME } from 'theme';

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
  title?: string;
  children?: unknown;
  meta?: {
    description?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    ogType?: 'website' | 'article';
    ogArticle?: Record<string, unknown>;
    twitterAlt?: string;
  };
}
enum ImageExtensionWhitelist {
  jpeg = 'jpeg',
  jpg = 'jpg',
  png = 'png',
  webp = 'webp',
  gif = 'gif',
}

type ImgWhitelist = keyof typeof ImageExtensionWhitelist;

export const Head = ({ title = '', children = null, meta = {} }: HeadProps) => {
  const customTitle = `${IS_DEV_MODE ? '[LOCAL]' : ''} ${title ? title + ' -' : ''} ${TITLE}`;
  const description = meta?.description || SITE_DESCRIPTION;
  const canonical = `${meta?.ogUrl ?? SITE_URL}`;
  const getImageExtension: ImgWhitelist =
    (meta?.ogImage?.split('.').at(-1) as ImgWhitelist) ?? 'jpeg';
  const imageExtension: ImgWhitelist = ImageExtensionWhitelist[getImageExtension] ?? 'jpeg';
  const image = {
    url: meta?.ogImage
      ? meta.ogImage.startsWith(SITE_URL)
        ? meta.ogImage.replace('./', '')
        : `${SITE_URL}/${meta?.ogImage.replace('./', '')}`
      : `${AUTHOR_IMG}?s=1200`,
    type: `image/${imageExtension}`,
  };
  const article = meta?.ogType === 'article' && meta?.ogArticle ? meta.ogArticle : {};

  return (
    <>
      <NextHead>
        <>
          <meta charSet="UTF-8" />
          <title>{customTitle}</title>
          {/* META */}
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content={THEME.dark.background}
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content={THEME.light.background}
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
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
          <link
            itemProp="thumbnailUrl"
            href={image.url}
          />

          {children}
          {/* Scripts */}
        </>
      </NextHead>
      <NextSeo
        title={customTitle}
        description={description.substring(0, 150).trim() + `${description.length > 150 ?  '...' : ''}`}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: customTitle.substring(0, 32).trim() + `${customTitle.length > 32 ?  '...' : ''}`,
          site_name: TITLE,
          locale: DEFAULT_LANG,
          images: [{ ...image }],
          type: meta?.ogType ?? 'website',
          description: description.substring(0, 60).trim() + `${description.length > 60 ?  '...' : ''}`,
          article,
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
            rel: 'preconnect',
            href: 'https://www.google-analytics.com',
          },
          {
            rel: 'preconnect',
            href: 'https://www.googletagmanager.com',
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com/',
          },
          {
            rel: 'preconnect',
            href: 'https://pagead2.googlesyndication.com/',
          },
          {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'anonymous',
          },
        ]}
      />
    </>
  );
};
