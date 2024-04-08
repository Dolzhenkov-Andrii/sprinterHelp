import React from "react";
import classes from "./basketBox.module.css"
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";


export default function BasketBox({ clouse }) {

    return (
        <div className={classes.background} onClick={() => clouse(false)}>
            <div className={classes.container}>
                <div className={classes.titleHeader}>
                    <Button className={classes.buttonClouse} onClick={() => clouse(false)}>
                        <SvgIcons name="clouse" className={classes.iconClouse} />
                    </Button>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}
