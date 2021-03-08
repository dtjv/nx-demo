import '@fontsource/inter/variable.css'
import '../styles/app.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/components/layout'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
