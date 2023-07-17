import Document, { Head, Html, Main, NextScript } from 'next/document'
import { SkipNavLink } from 'nextra-theme-docs'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={"#91DDF2"} />
        </Head>
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
