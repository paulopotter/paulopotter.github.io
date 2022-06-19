import { Html, Head, Main, NextScript } from "next/document";
import  dayjs from "dayjs";
import 'dayjs/locale/pt-br';

import CONFIGS from "../services/configs";

const { GA_CODE } = CONFIGS;

dayjs.locale('pt-br')

const Document = () => {
  return (
    <Html lang="pt-BR" data-info={ `${dayjs().format('YYYY-MM-DD hh:mm:ss').toString()} ` }>
      <Head>
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', "${GA_CODE}", 'auto');
            ga('send', 'pageview');
        `,
        }}
      />
    </Html>
  );
};

export default Document;
