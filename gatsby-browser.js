// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "fontsource-ibm-plex-mono"

// normalize CSS across browsers
import "./src/normalize.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import React from "react"
import { StoreProvider } from "./src/components/store/store"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
