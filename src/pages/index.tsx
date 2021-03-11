import Link from 'next/link'

import { ThemeButton } from '@/components/theme-button'

function HomePage() {
  return (
    <div className="px-12">
      <div className="py-12">
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-200">
            Hello World
          </h1>
          <div>
            <ThemeButton />
          </div>
          <div className="space-x-4">
            <Link href="/" passHref>
              <a href="placeholder">Home</a>
            </Link>
            <Link href="/about" passHref>
              <a href="placeholder">About</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
