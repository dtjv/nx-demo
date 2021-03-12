import { render, screen } from '@testing-library/react'
import HomePage from '../index'

test('shows the correct greeting', () => {
  render(<HomePage />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
