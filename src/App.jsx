import React from "react"
import Header from "./component/header/Header"
import Baner from "./component/section/baner/Baner"
import LineInfoBox from "./component/section/lineInfoBox/LineInfoBox"
import HomeCardBox from "./component/section/homeCardBox/HomeCardBox"
import HomeService from "./component/section/homeService/HomeService"
import AdressLine from "./component/section/adress/AdressLine"
import Footer from "./component/section/footer/Footer"



function App() {

  return (
    <>
      <Header />
      <Baner />
      <LineInfoBox nameBox={"infoService"}/>
      <HomeCardBox/>
      <HomeService/>
      <LineInfoBox nameBox={"infoContacts"}/>
      <AdressLine/>
      <Footer/>
    </>
  )
}

export default App
