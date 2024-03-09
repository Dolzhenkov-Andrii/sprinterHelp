import React from "react";
import classes from "./qualities.module.css"


function qualitieContent(title, text) {
    return (
        <div className={classes.contentBox}>
            <p className={classes.title}>{title}</p>
            <p className={classes.text}>{text}</p>
        </div>
    )
}



export default function Qualities() {

    return (
        <section className={classes.background}>
            <div className={`container ${classes.qualitiesBox}`}>
                <div className={classes.qualitiesGroup}>
                    {qualitieContent(
                        "Різноманітний вибір",
                        "Знайди саме те що тобі потрібно!"
                    )}
                    <hr className={classes.qualitiesGroupLine} />
                    {qualitieContent(
                        "Поважаємо клієнтів",
                        "Завжди допоможемо, та задовільним ваші потреби!"
                    )}
                    <hr className={classes.qualitiesGroupLine} />
                    {qualitieContent(
                        "Замовля та отримуй",
                        "Обери та замовляй, доставка по всій Україні!"
                    )}
                </div>
            </div>
        </section>
    )
}
