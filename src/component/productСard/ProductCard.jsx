import React from "react";
import classes from "./productCard.module.css"
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";

import img1 from "/img/img1.jpg"

export default function ProductCard({ className }) {

    const isUsedIndex = true;

    return (
        <div className={`${classes.backgroundBox} ${isUsedIndex ? classes.usedIndex : ''} ${className}`}>
            <div className={classes.imgBox}>
                <div className={`${classes.usedIndexBox} ${classes.notActive}`}><p>{"Б/В"}</p></div>
                {/* <img className={classes.img} src={img1} alt="Product" /> */}
            </div>
            <div className={classes.infoBox}>
                <div content={classes.textInfo}>
                    <p className={classes.title}>{"title"}</p>
                    <hr className={classes.infoTextLine} />
                    <p className={classes.text}>{"text"}</p>
                </div>
                <div className={classes.priceInfo}>
                    <div className={classes.priceBox}>
                        <p className={classes.newPrice}>{"2000 грн"}</p>
                        <p className={classes.oldPrice}>{"3000 грн"}</p>
                    </div>
                    <Button>
                        <p>+</p>
                        <SvgIcons name={"basket"} className={""} />
                    </Button>
                </div>
            </div>
        </div>
    )
}
