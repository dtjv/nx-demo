import * as React from 'react'
import { useTheme } from 'next-themes'

interface Props {
  children: React.ReactElement
}

function Layout({ children }: Props) {
  const { setTheme, systemTheme } = useTheme()

  React.useEffect(() => setTheme(systemTheme ?? 'light'), [
    setTheme,
    systemTheme,
  ])

  return (
    <div className="antialiased text-gray-500 bg-white dark:bg-black dark:text-gray-200">
      {children}
    </div>
  )
}

export { Layout }
