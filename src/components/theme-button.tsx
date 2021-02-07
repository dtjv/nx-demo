interface ThemeButtonProps {
  toggleTheme: () => void
}

const ThemeButton = ({ toggleTheme }: ThemeButtonProps) => {
  return (
    <button
      className="px-4 py-2 mt-16 font-semibold text-white bg-black dark:text-black dark:bg-white rounded-md"
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  )
}

export { ThemeButton }
