import React, { createContext, useReducer } from "react"

export const ObjectContext = createContext()

// assign initial z-index values to each component
// on the front page
const initialState = {
  window: 0,
  glass: 1,
  message: 0,
  folder1: 0,
  folder2: 0,
  folder3: 0,
}

// get the current highest z-index value
const maxValue = state => {
  let arr = Object.values(state)
  return Math.max(...arr)
}

const reducer = (state, action) => {
  if (state[action.type] !== undefined) {
    console.log(state)

    // if the current component doesn't have the
    // highest z-index, then increase its value.
    // This ensures that the item currently being
    // being dragged will move to the top
    const max = maxValue(state)
    if (max !== state[action.type]) {
      state[action.type] = max + 1
    }
  }

  return {
    ...state,
  }
}

const ObjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <ObjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ObjectContext.Provider>
  )
}

export default ObjectProvider
