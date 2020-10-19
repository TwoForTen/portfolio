import React from "react"
import GlobalStyle from "../styles/global"

import Appbar from "../components/Appbar/Appbar"

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Appbar />
    </>
  )
}

export default Home
