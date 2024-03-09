import React from "react";
import classes from "./header.module.css";
import Search from "../search/Search";
import Button from "../button/Button";

import logo from "/Logo.svg";
import SvgIcons from "../../../public/icons/svgIcons";


export default function Header() {



    return (
        <header className={classes.header}>
            <div className={`container ${classes.headerBox}`}>
                <div className={classes.containerImg}>
                    <img src={logo} className={classes.img} alt="logo" />
                </div>
                <div className={classes.containerNav}>
                    <ul className={classes.navBox}>
                        <li><a className={classes.link} href="#">{"Каталог"}</a></li>
                        <li><a className={classes.link} href="#">{"Послуги"}</a></li>
                        <li><a className={classes.link} href="#">{"Доставка"}</a></li>
                    </ul>
                </div>
                <div className={classes.containerIcons}>
                    <Button className={classes.phoneBox}>
                        <p>{"+38(093)554-55-88"}</p>
                        <SvgIcons name="phone" className={classes.iconPhoneSVG} />
                    </Button>
                    <Button className={classes.iconBasketButton}>
                        <SvgIcons name="basket" className={classes.iconBasketSVG} />
                    </Button>
                    <Search />
                </div>
            </div>
        </header>
    )
};
