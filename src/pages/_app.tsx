import '@fontsource/inter/variable.css'
import '../styles/app.css'

import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
