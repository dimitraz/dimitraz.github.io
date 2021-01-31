import { useStore } from "./store"

export const useContext = () => {
  const { state, dispatch } = useStore()

  return {
    background: state.background,
    theme: state.theme,
    updateBackground: url => dispatch({ type: "background", background: url }),
    updateTheme: (url, color) =>
      dispatch({ type: "theme", theme: color, background: url }),
  }
}
