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
          <meta name="description" content="Haidery Covid Helpline" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Volunteer driven, crowdsourced tracker for Covid19 cases in Mira-Bhayander area"
          />
          <meta
            property="og:description"
            content="This website provides you the information about Hospital beds, Oxygen Cylinders to the needy ones at right time."
          />
          <meta
            property="og:url"
            content="https://haiderycovidhelpline.netlify.app/"
          />
          <meta property="og:site_name" content="Haidery Covid Helpline" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Haidery Covid Helpline" />
          <meta
            name="twitter:description"
            content="This website provides you the information about Hospital beds, Oxygen Cylinders to the needy ones at right time."
          />
          <meta
            name="twitter:image"
            content="https://haiderycovidhelpline.netlify.app/images/coronavirus.png"
          />
          <meta name="theme-color" content="#ee5b3e" />
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
