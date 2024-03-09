import React from "react"
import Header from "./component/header/Header"
import Baner from "./component/section/baner/Baner"
import Qualities from "./component/section/qualities/Qualities"
import HomeCardBox from "./component/section/homeCardBox/HomeCardBox"



function App() {

  return (
    <>
      <Header />
      {/* <Baner /> */}
      <Qualities/>
      <HomeCardBox/>
    </>
  )
}

export default App
