const React = require("react")
const ThemeProvider = require('styled-components').ThemeProvider;
const theme = require('./src/styles/theme').default;

exports.wrapPageElement = ({ element, props }) => {
    return (
    <ThemeProvider theme={theme} {...props}>
        {element}
    </ThemeProvider>
    )
  }