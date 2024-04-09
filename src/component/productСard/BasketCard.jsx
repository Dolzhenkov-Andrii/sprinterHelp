import React from "react";
import classes from "./basketCard.module.css"
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";


export default function BasketCard({ card }) {

    return (
        <div className={classes.background}>
            <div className={classes.contentBox}>
                <img className={classes.img} src={card.img} alt="Product" />
                <div className={classes.textBox}>
                    <div className={classes.textTitleBox}>
                    <p className={classes.textTitle}>{card.title}</p>
                    {card.statusBU?<p className={classes.usedIndex}>Б/В</p>:''}
                    </div>
                    <p className={classes.textModel}>{card.model}</p>
                    <div className={classes.priceBox}>
                        <p className={classes.textPrice}>{card.price} грн.</p>
                        <p className={classes.textCurent}>{card.curent} шт.</p>
                    </div>
                </div>
            </div>
            <Button className={classes.buttonRemoval}>
            <SvgIcons name="removal" className={classes.iconRemoval} />
            </Button>
        </div>
    )
}
