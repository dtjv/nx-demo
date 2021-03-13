import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Counter } from '@/components/counter'

test('shows the correct initial count', () => {
  render(<Counter />)
  const expectedCount = 0
  expect(screen.getByText(/count is:/i)).toHaveTextContent(
    new RegExp(`${expectedCount}`, 'i')
  )
})

test('shows the correct incremented count', () => {
  render(<Counter />)
  const expectedCount = 1

  userEvent.click(screen.getByRole('button', { name: /increment/i }))

  expect(screen.getByText(/count is:/i)).toHaveTextContent(
    new RegExp(`${expectedCount}`, 'i')
  )
})

test('shows the correct decremented count', () => {
  render(<Counter />)
  const expectedCount = -1

  userEvent.click(screen.getByRole('button', { name: /decrement/i }))

  expect(screen.getByText(/count is:/i)).toHaveTextContent(
    new RegExp(`${expectedCount}`, 'i')
  )
})
