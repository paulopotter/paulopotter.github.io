import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import CONFIGS from '../services/configs';

const { IS_DEV_MODE, GA_CODE, FULL_DATE_DEFAULT_FORMAT, DEFAULT_LANG } = CONFIGS;

dayjs.locale(DEFAULT_LANG);

const Document = () => {
  return (
    <Html
      lang={DEFAULT_LANG}
      data-info={`${dayjs().format(FULL_DATE_DEFAULT_FORMAT).toString()}`}
      prefix="og: https://ogp.me/ns#"
    >
      <Head>
        <Script
          async={true}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2474646572295965"
          crossOrigin="anonymous"
        />
        <Script
          async={true}
          src={IS_DEV_MODE ? './static/new-relic-dev.js' : './static/new-relic.js'}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;1,700&family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            ga('create', "${GA_CODE}", 'auto');
            ga('send', 'pageview');
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', "${GA_CODE}");
        `}
      </Script>
      <Script
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_CODE}`}
        strategy="afterInteractive"
      />
    </Html>
  );
};

export default Document;
