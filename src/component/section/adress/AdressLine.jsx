import React from "react";
import classes from "./adress.module.css";
import TwoBoxContainer from "../twoBoxContainer/twoBoxContainer";
import SvgIcons from "../../../../public/icons/svgIcons";


export default function AdressLine(){
    return (
        <section className={classes.background}>
            <TwoBoxContainer>
                <div className={`${classes.textBox} ${classes.left}`}>
                    <SvgIcons name="mapPoint" className={classes.icon}/>
                    <p>{"Наша адреса"}</p>
                </div>
                <div className={`${classes.textBox} ${classes.rigth}`}>
                    <p>{"вулиця Європейська 57,с.Фурси, обл.Київська"}</p>
                </div>
            </TwoBoxContainer>
        </section>
    )
}
