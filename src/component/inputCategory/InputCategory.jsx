import React, { useEffect } from "react";
import classesCat from "./inputCategory.module.css"
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";


function categoryBox(item, classes) {
    return (
        <div key={item} className={classes.inputBox}>
            <input type="checkbox" />
            <p>{item}</p>
        </div>
    )
}

export default function InputCategory({ props, classes, isActive, onClick }) {

    return (
        <div className={classesCat.background}>
            <div className={classes.filterButtonBox}>
                <Button className={`${classes.filterButton} ${props.id==isActive.id?isActive.classes:''}`} onClick={() => onClick(props.id)}>
                    <p className={classesCat.title}>{props?.title}</p>
                </Button>
                <div className={`${classes.selectIcon} ${classes.selectIconCat}`}>
                    <SvgIcons name={"arrowDown"} className={classes.icon} />
                </div>
            </div>
            <div className={`${classes.backgroundCategoryBox} ${props.id==isActive.id?isActive.classes:''}`}>
                <label className={classes.inputBox}>
                    <input type="radio" />
                    <p>{"Обрати категорію " + props?.title}</p>
                </label>
                {props?.content.map(item => categoryBox(item, classes))}
            </div>
        </div>
    )
}