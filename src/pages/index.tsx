import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ThemeButton } from '@/components/theme-button'

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => setTheme(systemTheme ?? 'light'), [])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-gray-100">
          Hello World
        </h1>
        <ThemeButton toggleTheme={toggleTheme} />
        {/*
        <ThemeButton
          toggleTheme={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        />
        */}
      </div>
    </div>
  )
}
