import React from "react";
import classes from "./twoBoxContainer.module.css"

export default function TwoBoxContainer({children}){
    return (
        <div className={`container ${classes.container}`}>
            {children[0]}
            <hr className={classes.lineAdress}/>
            {children[1]}
        </div>
    )
}
