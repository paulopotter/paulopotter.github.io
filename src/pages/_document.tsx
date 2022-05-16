import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import CONFIGS from "../services/configs";

const { GA_CODE } = CONFIGS;
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html lang="pt-BR" className="theme--light">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <link
          href="https://fonts.googleapis.com/css?family=Bitter|Montserrat:400,700"
          rel="stylesheet"
          // @ts-ignore
          async={true}
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
  }
}

export default MyDocument;
