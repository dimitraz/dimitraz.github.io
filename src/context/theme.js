import React, { createContext, useReducer } from "react"

export const ThemeContext = createContext()

const initialState = {
  theme: "black",
  background: "",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "background":
      return {
        ...state,
        background: action.background,
      }
    case "theme":
      return {
        theme: action.theme,
        background: action.background,
      }
    default:
      console.log(`Unhandled action type: ${action.type}`)
  }
}

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
