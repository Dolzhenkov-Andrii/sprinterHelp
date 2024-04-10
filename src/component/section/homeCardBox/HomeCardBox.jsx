import React from "react";
import classes from "./homeCardBox.module.css"
import ProductCard from "../../productСard/ProductCard";
import Button from "../../button/Button";

import img1 from "/img/img1.jpg";
import { NavLink } from "react-router-dom";

const productArr= [
    {
        'id': 1,
        'title':'title',
        'model':'model',
        'price': '2000 грн',
        'oldPrice':'3000 грн',
        'statusBU': true,
        'img':img1,
    },
    {
        'id': 1,
        'title':'title',
        'model':'model',
        'price': '2000 грн',
        'oldPrice':'3000 грн',
        'statusBU': true,
        'img':img1,
    },
    {
        'id': 1,
        'title':'title',
        'model':'model',
        'price': '2000 грн',
        'oldPrice':'3000 грн',
        'statusBU': true,
        'img':img1,
    },
    {
        'id': 1,
        'title':'title',
        'model':'model',
        'price': '2000 грн',
        'oldPrice':'3000 грн',
        'statusBU': true,
        'img':img1,
    },
    {
        'id': 1,
        'title':'title',
        'model':'model',
        'price': '2000 грн',
        'oldPrice':'3000 грн',
        'statusBU': true,
        'img':img1,
    },
]


export default function HomeCardBox(){
    return (
        <section className={classes.background}>
            <div className={`container ${classes.cardBox}`}>
                {productArr.map((card, i) => <ProductCard key={i} cardData={card}/>)}
                <div className={classes.infoBox}>
                    <div className={classes.textBox}>
                        <p className={classes.title}>{"Комплектуючі"}</p>
                        <hr />
                        <p className={classes.text}>{"Відкрийте для себе ідеальний баланс надійності та доступності, наші запчастини з розібраних авто, за середньо ринковими цінами (позначені Б/В), але запевнюємо в ії якості та надійності."}<br/>{"Також в наявності є і нові запчастини, тому натискай і обери саме те, що тобі потрібно!"}</p>
                    </div>
                    <NavLink className={classes.link} to="/catalog"><Button className={classes.button}>{"ДИВИТИСЯ БІЛЬШЕ"}</Button></NavLink>
                </div>
            </div>
        </section>
    )
}
