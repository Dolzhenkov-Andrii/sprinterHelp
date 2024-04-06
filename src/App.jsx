import React from "react"
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./page/home/Home"
import Catalogue from "./page/catalogue/Catalogue"
import Layout from "./page/Layout";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index="home" element={<Home />} />
        <Route path="catalog" element={<Catalogue />} />
      </Route>
    </Routes>
  )
}

export default App
