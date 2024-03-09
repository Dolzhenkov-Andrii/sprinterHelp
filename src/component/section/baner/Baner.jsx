import React from "react";
import classes from "./baner.module.css"
import BackgroundImg from "../../background/BackgroundImg"

export default function Baner(){
    return (
        <section className={classes.baner}>
            <BackgroundImg className="first" />
            <div className={`container ${classes.banerBox}`}>
                <div className={classes.titleBox}>
                    <h1 className={classes.title}>{"Sprinter"} <span>{"Help"}</span></h1>
                    <h4 className={classes.titleText}>{"Комплектуючі для автомобілів Sprinter, Crafter, LT35"}</h4>
                </div>
            </div>
        </section>
    )
}
