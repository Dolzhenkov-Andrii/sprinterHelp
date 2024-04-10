import React, { useEffect, useState } from "react"
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./page/home/Home"
import Catalogue from "./page/catalogue/Catalogue"
import Layout from "./page/Layout";



function App() {


  const[tmp, istmp] = useState(false)
  function tmp1(activ){
    istmp(activ)
    console.log(tmp)
  }


  return (
    <Routes>
      <Route path="/" element={<Layout testTmp={tmp} clouse={istmp}/>}>
        <Route index="home" element={<Home />} />
        <Route path="catalog" element={<Catalogue isModalCardActive={tmp1}/>} />
      </Route>
    </Routes>
  )
}

export default App
