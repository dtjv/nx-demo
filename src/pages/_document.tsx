import { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body className="text-white bg-white dark:bg-black dark:text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
