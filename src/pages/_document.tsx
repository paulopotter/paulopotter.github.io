import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";

import CONFIGS from "../services/configs";
import { isDarkTheme } from "../helpers";

const { GA_CODE } = CONFIGS;

const Document = () => {
  const [isDark, setIsDark] = useState(isDarkTheme ?? false);
  return (
    <Html lang="pt-BR" className={`theme--${isDark ? "dark" : "light"}`}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
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
