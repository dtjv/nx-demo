import '@fontsource/inter/variable.css'
import '../styles/app.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'

import { Layout } from '@/components/layout'
import { seoDefaults } from '@/next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Layout>
        <>
          <DefaultSeo {...seoDefaults} />
          <Component {...pageProps} />
        </>
      </Layout>
    </ThemeProvider>
  )
}

export default App
