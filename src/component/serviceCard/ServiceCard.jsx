import React from "react";
import classes from "./serviceCard.module.css";
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";

const styleClass = {
    "home": classes.home,
    "card": classes.card
}


export default function ServiceCard({ClassName, name, title, text}){
    return (
        <div className={`${classes.box} ${styleClass[ClassName]}`}>
            <Button className={`${classes.button} ${styleClass[ClassName]}`}>
                <SvgIcons name={name} className={`${classes.icon} ${styleClass[ClassName]} `}/>
            </Button>
            <p className={`${classes.title} ${styleClass[ClassName]} `}>{title}</p>
            <p className={`${classes.text} ${styleClass[ClassName]} `}>{text}</p>
        </div>
    )
}
