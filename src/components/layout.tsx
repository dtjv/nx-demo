import * as React from 'react'

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div>{children}</div>
    </div>
  )
}

export { Layout }
