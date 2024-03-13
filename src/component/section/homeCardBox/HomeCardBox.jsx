import React from "react";
import classes from "./homeCardBox.module.css"
import ProductCard from "../../productСard/ProductCard";
import Button from "../../button/Button";



export default function HomeCardBox(){
    return (
        <section className={classes.background}>
            <div className={`container ${classes.cardBox}`}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <div className={classes.infoBox}>
                    <div className={classes.textBox}>
                        <p className={classes.title}>{"Комплектуючі"}</p>
                        <hr />
                        <p className={classes.text}>{"Відкрийте для себе ідеальний баланс надійності та доступності, наші запчастини з розібраних авто, за середньо ринковими цінами (позначені Б/В), але запевнюємо в ії якості та надійності."}<br/>{"Також в наявності є і нові запчастини, тому натискай і обери саме те, що тобі потрібно!"}</p>
                    </div>
                    <Button className={classes.button}>{"ДИВИТИСЯ БІЛЬШЕ"}</Button>
                </div>
            </div>
        </section>
    )
}
