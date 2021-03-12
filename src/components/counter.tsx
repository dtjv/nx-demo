import { useCounter } from '@/hooks/use-counter'
import { PlusIcon } from '@/components/icons/plus-icon'
import { MinusIcon } from '@/components//icons/minus-icon'

function Counter() {
  const { count, increment, decrement } = useCounter()

  return (
    <div className="py-4 border border-gray-900 dark:border-gray-100 rounded-md space-y-2">
      <div className="text-center">
        <span className="text-3xl">{count}</span>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="focus:outline-none" onClick={() => decrement()}>
          <MinusIcon className="w-6 h-6 text-white bg-gray-900 rounded dark:bg-gray-100 dark:text-gray-900" />
        </button>
        <button className="focus:outline-none" onClick={() => increment()}>
          <PlusIcon className="w-6 h-6 text-white bg-gray-900 rounded dark:bg-gray-100 dark:text-gray-900" />
        </button>
      </div>
    </div>
  )
}

export { Counter }
