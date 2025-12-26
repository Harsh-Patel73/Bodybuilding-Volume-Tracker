import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Load saved theme from localStorage or default to 'dark'
    const saved = localStorage.getItem('workout-planner-theme')
    return saved || 'dark'
  })

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('workout-planner-theme', theme)
    // Apply theme class to document body
    document.body.classList.remove('light-theme', 'dark-theme')
    document.body.classList.add(`${theme}-theme`)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
