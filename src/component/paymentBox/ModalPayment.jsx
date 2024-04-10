import React from "react";
import classes from './modalPayment.module.css'
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


export default function ModalPayment({ active, clouse }) {
    return (
        <div className={classes.background}>
            <div className={classes.titleBox}>
                <div className={classes.title}>
                    <p className={classes.titleFirst}>{'Замовлення'}</p>
                </div>
                <Button className={classes.buttonClouse} onClick={() => clouse(false)}>
                    <SvgIcons name="clouse" className={classes.iconClouse} />
                </Button>
            </div>
            <div className={classes.contentBox}>
                <div className={classes.cardBox}>
                    {productArr1.map((card, i) =>
                        <>
                            <BasketCard key={i} card={card} />
                            <hr className={classes.cardLine} />
                        </>
                    )}
                </div>
                <div className={classes.infoFormBox}>
                    <p className={classes.textInfo}> Після замовлення, наші консультанти перевірять його та одразу зв'яжутся з вами, для уточнення та оформлення вашого замовлення. <br /> <span>Заповніть форму замовлення</span></p>
                    <div className={classes.formBox} action="">
                    <input type="text" id="name" name="name"  placeholder="Ім'я" />
                    <div className={classes.phoneBox}>
                        <p>+38</p>
                        <input type="phone" id="phone" name="phone"  placeholder="099123..." />
                    </div>
                    <div className={classes.footerBox}>
                        <div className={classes.priceBox}>
                            <p>Кількість товару: <span className={classes.textCurent}>{'2'} шт.</span></p>
                            <p>Загальна сумма: <span className={classes.textPrice}>{'~900'} грн.</span></p>
                        </div>
                        <Button className={classes.buttonBay} onClick={() => clouse(false)}>
                            <p>Замовити</p>
                        </Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
