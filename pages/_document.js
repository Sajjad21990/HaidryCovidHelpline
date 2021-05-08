import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="Haidery Covid Helpline" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Haidery Covid Helpline"
          />
          <meta
            name="description"
            content="Volunteer driven 24x7 Helpline for Covid19 Cases in Mira-Bhayander Area."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-TileColor" content="#2B5797" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="manifest" href="/manifest.json" />

          <link rel="apple-touch-icon" href="/images/icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/images/icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/images/icon.png"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://haiderycovidhelpline.in/" />
          <meta name="twitter:title" content="Haidery Covid Helpline" />
          <meta
            name="twitter:description"
            content="Volunteer driven 24x7 Helpline for Covid19 Cases in Mira-Bhayander Area."
          />
          <meta name="twitter:image" content="images/icon.png" />
          <meta name="twitter:creator" content="@Sajjad21990" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Haidery Covid Helpline" />
          <meta
            property="og:description"
            content="Volunteer driven 24x7 Helpline for Covid19 Cases in Mira-Bhayander Area."
          />
          <meta property="og:site_name" content="Haidery Covid Helpline" />
          <meta property="og:url" content="https://haiderycovidhelpline.in/" />
          <meta
            property="og:image"
            content="https://haiderycovidhelpline.in/images/icon.png"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/icon.png"
            sizes="2048x2732"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/icon.png"
            sizes="1668x2224"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/icon.png"
            sizes="1536x2048"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/icon.png"
            sizes="1125x2436"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/icon.png"
            sizes="1242x2208"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/icon.png"
            sizes="750x1334"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/icon.png"
            sizes="640x1136"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
