import React from "react";
import classes from "./search.module.css"
import SvgIcons from "../../../public/icons/svgIcons";

export default function Search() {
    return (
        <div className={classes.search}>
            <button className={classes.button}>
                <SvgIcons name="search" className={classes.img} />
            </button>
            <input type="text" className={classes.input}/>
        </div>
    )
};
