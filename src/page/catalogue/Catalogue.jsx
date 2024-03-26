import React from "react";
import classes from "./catalogue.module.css";
import Button from "../../component/button/Button";
import SvgIcons from "../../../public/icons/svgIcons";
import InputSort from "../../component/inputSort/InputSort";
import FilterSort from "../../component/filterSort/FilterSort";


export default function Catalogue() {
    return (
        <section className={classes.background}>
            <div className={classes.navigation}>
                <div className={`container ${classes.container}`}>
                    <div className={classes.navLeft}>
                        {/* <InputSort list={["16", "24", "36", "48"]} /> */}
                        {/* <InputSort list={["за алфавітом", "за зростанням цін", "за зниженням цін", "за новизною"]} /> */}
                    </div>
                    <div className={classes.navRigth}>
                       <FilterSort/> 
                    </div>
                </div>
            </div>
            <div className={classes.catalogueBox}>
                <Button><SvgIcons /></Button>
                <div className={classes.contentBox}>
                    <div className={classes.content}>
                        {/* component */}
                    </div>
                    {/* component */}
                </div>
                <Button><SvgIcons /></Button>
            </div>
        </section>
    )
}
