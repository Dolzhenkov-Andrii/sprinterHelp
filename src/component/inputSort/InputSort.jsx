import React from "react";
import classes from "./inputSort.module.css"
import SvgIcons from "../../../public/icons/svgIcons";


export default function InputSort({list}) {
    return (
        <div className={classes.selectBackground}>
            <p>Товарів на сторінці:</p>
            {/* className={classes.select} */}
            <div className={classes.selectContainer}>
                <select name="format" id="number">
                    {list.length<1?<option value="none">-</option>:list.map(item =>
                        <option key={item} value={`${item}`}>{item}</option>)}
                    {/* <option value="16">16</option>
                    <option value="24">24</option>
                    <option value="32">32</option>
                    <option value="48">48</option> */}
                </select>
                <div className={classes.selectIcon}>
                    <SvgIcons name={"arrowDown"} className={classes.icon}/>
                </div>
            </div>
        </div>
    )
}
