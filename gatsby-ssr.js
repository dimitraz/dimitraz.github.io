const React = require("react")
const ThemeProvider = require("./src/context/theme").default

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
