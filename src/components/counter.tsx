import * as React from 'react'

import { PlusIcon } from '@/components/plus-icon'
import { MinusIcon } from '@/components/minus-icon'

function Counter() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="space-y-2">
      <div className="text-center">
        <span className="text-3xl">{count}</span>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={() => setCount(count + 1)}>
          <PlusIcon className="w-12 h-12" />
        </button>
        <button onClick={() => setCount(count - 1)}>
          <MinusIcon className="w-12 h-12" />
        </button>
      </div>
    </div>
  )
}

export { Counter }
