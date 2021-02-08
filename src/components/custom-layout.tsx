import * as React from 'react'

interface CustomLayoutProps {
  meta: {
    title: string
  }
}

const CustomLayout: React.FunctionComponent<CustomLayoutProps> = ({
  children,
  meta,
}) => {
  return (
    <div className="bg-purple-50 dark:bg-purple-900 space-y-8">
      <div className="px-12">
        <div className="py-12">
          <h1 className="text-5xl font-bold text-purple-500 dark:text-white">
            {meta.title}
          </h1>
          <div className="prose dark:prose-dark max-w-none">{children}</div>
        </div>
      </div>
    </div>
  )
}

export { CustomLayout }
