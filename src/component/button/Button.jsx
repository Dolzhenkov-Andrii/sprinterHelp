import React from "react";
import classes from "./button.module.css"

export default function Button({children, className}){
    return  <button className={`${classes.buttom} ${className}`}>{children}</button>
};
