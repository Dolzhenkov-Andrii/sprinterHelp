import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../component/header/Header"
import LineInfoBox from "../component/section/lineInfoBox/LineInfoBox"
import AdressLine from "../component/section/adress/AdressLine"
import Footer from "../component/section/footer/Footer"

function Layout() {


    return (
        <>
            <Header />
            <Outlet />
            <LineInfoBox nameBox={"infoContacts"} />
            <AdressLine />
            <Footer />
        </>
    )
}

export default Layout
