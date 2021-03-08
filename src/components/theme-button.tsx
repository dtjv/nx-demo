import * as React from 'react'
import { useTheme } from 'next-themes'

function ThemeButton() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => setMounted(true), [])

  if (!mounted) return <ThemeButtonSkeleton />

  return (
    <button
      className="px-4 py-2 font-medium text-white bg-gray-900 dark:text-gray-900 dark:bg-white rounded-md focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme}
    </button>
  )
}

export { ThemeButton }

function ThemeButtonSkeleton(): React.ReactElement {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 w-14 rounded-md"></div>
    </div>
  )
}
