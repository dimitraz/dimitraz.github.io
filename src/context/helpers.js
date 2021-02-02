import { useContext } from "react"
import { ThemeContext } from "./theme"

export const useThemeContext = () => {
  const { state, dispatch } = useContext(ThemeContext)

  return {
    background: state.background,
    theme: state.theme,
    updateTheme: (url, color) =>
      dispatch({ type: "theme", theme: color, background: url }),
  }
}
