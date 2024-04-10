import React from "react";
import classes from "./basketBox.module.css"
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";
import BasketCard from "../productСard/BasketCard";
import img from "/img/img1.jpg";

const MAXCARD = 15;

const productArr1 = Array(MAXCARD)
for (let i = 0; i < productArr1.length; i++) {
    productArr1[i] = {
        'id': i,
        'title': `   -=[ ${i + 1} ]=-`,
        'model': 'model',
        'price': '2000 грн',
        'oldPrice': '3000 грн',
        'statusBU': true,
        'curent': 2,
        'img': img,
    }
}

export default function BasketBox({ active, clouse, isPayment }) {

    const isPaymentActive = ()=>{
        isPayment(true)
        clouse(false)
    }

    return (<>
        <div className={`${classes.background} ${active ? classes.active : ''}`} onClick={() => clouse(false)}/>
        <div className={`${classes.container} ${active ? classes.active : ''}`}>
            <div className={classes.titleHeader}>
                <Button className={classes.buttonClouse} onClick={() => clouse(false)}>
                    <SvgIcons name="clouse" className={classes.iconClouse} />
                </Button>
                <p>Кошик</p>
            </div>
            <div className={classes.cardBox}>
                {productArr1.map((card, i) =>
                    <>
                        <BasketCard key={i} card={card}/>
                        <hr className={classes.cardLine} />
                    </>
                )}
            </div>
            <div className={classes.footerBox}>
                <div className={classes.priceBox}>
                    <p>Кількість товару: <span className={classes.textCurent}>{'2'} шт.</span></p>
                    <p>Загальна сумма: <span className={classes.textPrice}>{'~900'} грн.</span></p>
                </div>
                <Button className={classes.buttonBay} onClick={isPaymentActive}>
                    <p>Замовити</p>
                </Button>
            </div>
        </div>

    </>
    )
}
