import React, { createContext, useContext, useReducer } from "react"

const StoreContext = createContext()
const initialState = { background: "", theme: "black" }

const reducer = (state, message) => {
  switch (message.type) {
    case "background":
      return {
        background: message.background,
      }
    case "theme":
      return {
        theme: message.theme,
        background: message.background,
      }
    default:
      console.log(`Unhandled message type: ${message.type}`)
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
