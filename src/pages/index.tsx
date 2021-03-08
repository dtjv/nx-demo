import { ThemeButton } from '@/components/theme-button'

function HomePage() {
  return (
    <div className="px-12">
      <div className="py-12">
        <div className="space-y-8">
          <h1 className="text-3xl text-bold">Hello World</h1>
          <div>
            <ThemeButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
