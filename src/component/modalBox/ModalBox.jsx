import React from "react";
import classes from "./modalBox.module.css";


export default function ModalBox({children, active, clouse}){
    return (
        <>
        <div className={`${classes.background} ${active ? classes.active : ''}`} onClick={() => clouse(false)}/>
        <div className={`${classes.container} ${active ? classes.active : ''}`}>
            {children}
        </div>
        </>
    )
}
