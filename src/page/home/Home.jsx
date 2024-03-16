import React from "react";
import LineInfoBox from "../../component/section/lineInfoBox/LineInfoBox";
import HomeCardBox from "../../component/section/homeCardBox/HomeCardBox";
import HomeService from "../../component/section/homeService/HomeService";
import Baner from "../../component/section/baner/Baner";

export default function Home() {
    return (
        <>
            <Baner/>
            <LineInfoBox nameBox={"infoService"} />
            <HomeCardBox />
            <HomeService />
        </>
    )
}
