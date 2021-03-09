/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-code-titles')],
    rehypePlugins: [
      require('rehype-slug'),
      [require('rehype-autolink-headings'), { behavior: 'wrap' }],
      require('mdx-prism'),
    ],
  },
}

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
}

module.exports = withMDX(mdxConfig)(nextConfig)
