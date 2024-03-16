import React from "react"
import Header from "./component/header/Header"
import LineInfoBox from "./component/section/lineInfoBox/LineInfoBox"
import AdressLine from "./component/section/adress/AdressLine"
import Footer from "./component/section/footer/Footer"
import Home from "./page/home/Home"
import Catalogue from "./page/catalogue/Catalogue"




function App() {

  return (
    <>
      <Header />
      <Catalogue/>
      {/* <Home/> */}
      <LineInfoBox nameBox={"infoContacts"}/>
      <AdressLine/>
      <Footer/>
    </>
  )
}

export default App
