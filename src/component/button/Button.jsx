import React from "react";
import classes from "./button.module.css"

export default function Button({children, className, onClick}){
    return  <button className={`${classes.buttom} ${className}`} onClick={onClick} >{children}</button>
};
