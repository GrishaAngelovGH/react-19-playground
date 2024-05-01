import { useState, createContext } from "react"

export const ThemeContext = createContext()

const UIThemeProvider = ({ children }) => {
  const [value, setValue] = useState("light")

  const toggleValue = () => {
    setValue(value === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{value, toggleValue}}>
			{children}
		</ThemeContext.Provider>
  )
}

export default UIThemeProvider