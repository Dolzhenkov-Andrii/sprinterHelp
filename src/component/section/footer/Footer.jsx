import React from "react";
import classes from "./footer.module.css";
import TwoBoxContainer from "../twoBoxContainer/twoBoxContainer";
import SvgIcons from "../../../../public/icons/svgIcons";

export default function Footer (){
    return (
        <footer className={classes.background}>
            <TwoBoxContainer>
                <div className={`${classes.textBox} ${classes.left}`}>
                    <p>{"Дивись більше"}</p>
                    <a className={classes.link} href="#"><SvgIcons name="tiktok" className={classes.icon}/></a>
                </div>
                <div className={`${classes.textBox} ${classes.rigth}`}>
                    <p>{"The site and all rights belong to SprinterHelp"}<br/>{"© 2024 Developed by Andrii Dolzhenkov."}</p>
                </div>
            </TwoBoxContainer>
        </footer>
    )
}
