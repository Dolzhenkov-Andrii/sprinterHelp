import React from "react";
import classes from "./search.module.css"
import iconDandruff from "/icons/iconDandruff.svg";

export default function Search() {
    return (
        <div className={classes.seacrh}>
            <button className={classes.button}>
                <img src={iconDandruff} className={classes.img} alt="icon_search" width="30px"/>
            </button>
            <input type="text" className={classes.input} />
        </div>
    )
};
