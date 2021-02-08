import { useEffect, ReactElement } from 'react'
import { useTheme } from 'next-themes'
import { ThemeButton } from '@/components/theme-button'
import { Layout } from '@/components/layout'

export default function Home(): ReactElement {
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => setTheme(systemTheme ?? 'light'), [setTheme, systemTheme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Layout>
      <div className="px-12">
        <div className="py-12">
          <div className="space-y-8">
            <h1 className="text-5xl text-bold">Hello World</h1>
            <ThemeButton toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
