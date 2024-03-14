import React from "react"
import Header from "./component/header/Header"
import Baner from "./component/section/baner/Baner"
import LineInfoBox from "./component/section/lineInfoBox/LineInfoBox"
import HomeCardBox from "./component/section/homeCardBox/HomeCardBox"
import HomeService from "./component/section/homeService/HomeService"



function App() {

  return (
    <>
      <Header />
      <Baner />
      <LineInfoBox nameBox={"infoService"}/>
      <HomeCardBox/>
      <HomeService/>
      <LineInfoBox nameBox={"infoContacts"}/>
    </>
  )
}

export default App
