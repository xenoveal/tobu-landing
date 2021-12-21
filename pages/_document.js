import Document, { Html, Head, Main, NextScript } from 'next/document'

class _document extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
    }
  
    render() {
        return (
            <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
  }
export default _document
