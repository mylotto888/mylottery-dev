import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-theme="light">
      <Head>
        <link rel="shortcut icon" href="/logo_square.png"  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
