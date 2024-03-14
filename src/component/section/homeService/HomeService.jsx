import React from "react";
import classes from "./homeService.module.css";
import ServiceCard from "../../serviceCard/ServiceCard";

// service guarantee like personal


export default function HomeService() {
    return (
        <section className={classes.background}>
            <div className={`container ${classes.container}`}>
                <p className={classes.title}>{"Ремонт та сервісне обслуговування Mersedes Sprinter"}</p>
                <p className={classes.text}>{"Якісне виконання всіх видів робіт"}</p>
                <div className={classes.cardBox}>
                    <ServiceCard ClassName={"home"}
                        name={"personal"}
                        title={"Допомога"}
                        text={"Наші фахівці нададуть чітку консультацію та підбір запчастин у повній відповідності до ваших бажань та бюджету."}
                    />
                    <ServiceCard ClassName={"home"}
                        name={"like"}
                        title={"Гарантія"}
                        text={"На всі види робіт даємо гарантію. Залежно від виконаних робіт це може бути пробіг або термін експлуатації."}
                    />
                    <ServiceCard ClassName={"home"}
                        name={"service"}
                        title={"Сервіс"}
                        text={"Якщо ваш автомобіль гидує одягати ношене, ви можете замовити оригінальні деталі. При цьому ви матимете гарантію на термін експлуатації."}
                    />
                    <ServiceCard ClassName={"home"}
                        name={"guarantee"}
                        title={"Надійність"}
                        text={"Якщо ваш автомобіль гидує одягати ношене, ви можете замовити оригінальні деталі. При цьому ви матимете гарантію на термін експлуатації."}
                    />
                </div>
            </div>
        </section>
    )
}
