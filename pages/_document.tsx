import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,400;0,500;0,600;1,400&family=Sen:wght@700;800&family=Kanit:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="/og-image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
