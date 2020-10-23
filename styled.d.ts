import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primary: string;
        lightGray: string;
        darkGray: string;
        darkText: string;
    },
    layout: {
        maxWidth: string;
    }
}
}