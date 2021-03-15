import * as React from 'react'
import { NextSeo } from 'next-seo'
import { seoDefaults } from '@/next-seo.config'

interface Props {
  meta: {
    title: string
  }
  children: React.ReactElement
}

function MdxLayout({ meta, children }: Props) {
  return (
    <>
      <NextSeo
        title={meta.title}
        titleTemplate={`${seoDefaults.defaultTitle} | %s`}
      />
      <div className="text-gray-500 prose dark:prose-dark max-w-none dark:bg-black dark:text-gray-200">
        <div className="px-12">
          <div className="py-12">
            <h1
              className="text-5xl font-bold dark:text-gray-200"
              data-test="about-title"
            >
              {meta.title}
            </h1>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export { MdxLayout }
