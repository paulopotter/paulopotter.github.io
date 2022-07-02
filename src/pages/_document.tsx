import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
import  dayjs from "dayjs";
import 'dayjs/locale/pt-br';

import CONFIGS from "../services/configs";

const { GA_CODE } = CONFIGS;

dayjs.locale('pt-br')

const Document = () => {
  return (
    <Html lang="pt-BR" data-info={ `${dayjs().format('YYYY-MM-DD hh:mm:ss').toString()}` }>
      <Head>
        <script async={true} src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2474646572295965"
        crossOrigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

      </Head>
      <body className="container 2xl">
        <Main />
        <NextScript />
      </body>
      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;1,700&family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_CODE}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_CODE});
        `}
      </Script>
    </Html>
  );
};

export default Document;
