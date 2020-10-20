import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,*:after,*:before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    a{
        color: initial;
        text-decoration: none;
    }
    ul{
        text-decoration: none;
    }
    button {
        border: none;
        outline: none;
        cursor: pointer;
    }
`

export default GlobalStyle;