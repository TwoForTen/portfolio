import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        darkText: string;
    },
    layout: {
        maxWidth: string;
    }
}
}