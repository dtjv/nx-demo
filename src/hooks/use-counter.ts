import * as React from 'react'

function useCounter() {
  const [count, setCount] = React.useState(0)
  const increment = React.useCallback(() => {
    setCount((x) => x + 1)
  }, [])
  const decrement = React.useCallback(() => {
    setCount((x) => x - 1)
  }, [])

  return { count, increment, decrement }
}

export { useCounter }
