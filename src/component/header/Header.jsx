import React from "react";
import classes from "./header.module.css";
import Search from "../search/Search";
import Button from "../button/Button";

import logo from "/Logo.svg";
import iconPhone from "/icons/iconPhone.svg";
import iconBasket from "/icons/iconBasket.svg";


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
                        <img src={iconPhone} className={classes.iconPhone} width="30px" alt="icon_phone" />
                    </Button>
                    <Button className="imgButton">
                        <img src={iconBasket} alt="icon_bascet" width="30px" />
                    </Button>
                    <Search />
                </div>
            </div>
        </header>
    )
};
