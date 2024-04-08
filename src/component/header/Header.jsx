import React, { useState } from "react";
import classes from "./header.module.css";
import Search from "../search/Search";
import Button from "../button/Button";

import logo from "/Logo.svg";
import SvgIcons from "../../../public/icons/svgIcons";
import { NavLink } from "react-router-dom";
import BasketBox from "../basketBox/BasketBox";


export default function Header() {


    const [basketActive, isBascetActive] = useState(false)

    if (basketActive) {

    }

    return (
        <>
            {basketActive ? <BasketBox clouse={isBascetActive} /> : <></>}
            <header className={classes.header}>
                <div className={`container ${classes.headerBox}`}>
                    <NavLink className={classes.containerImg} to="">
                        <img src={logo} className={classes.img} alt="logo" />
                    </NavLink>
                    <div className={classes.containerNav}>
                        <ul className={classes.navBox}>
                            <li><NavLink className={classes.link} to="/catalog">{"Каталог"}</NavLink></li>
                            <li><a className={classes.link} href="#">{"Послуги"}</a></li>
                            <li><a className={classes.link} href="#">{"Доставка"}</a></li>
                        </ul>
                    </div>
                    <div className={classes.containerIcons}>
                        <Button className={classes.phoneBox}>
                            <p>{"+38(093)554-55-88"}</p>
                            <SvgIcons name="phone" className={classes.iconPhoneSVG} />
                        </Button>
                        <Button className={classes.iconBasketButton} onClick={() => basketActive ? isBascetActive(false) : isBascetActive(true)}>
                            <SvgIcons name="basket" className={classes.iconBasketSVG} />
                        </Button>
                        <Search />
                    </div>
                </div>
            </header>
        </>
    )
};
