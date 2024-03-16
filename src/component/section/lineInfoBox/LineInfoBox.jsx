import React from "react";
import classes from "./lineInfoBox.module.css"
import SvgIcons from "../../../../public/icons/svgIcons";


const lineBoxContent = {
    "infoService": {
        "start": {
            "id": 1,
            "title": "Різноманітний вибір",
            "text": "Знайди саме те що тобі потрібно!",
            "icon": "",
        },
        "center": {
            "id": 2,
            "title": "Поважаємо клієнтів",
            "text": "Завжди допоможемо, та задовільним ваші потреби!",
            "icon": "",
        },
        "end": {
            "id": 3,
            "title": "Замовля та отримуй",
            "text": "Обери та замовляй, доставка по всій Україні!",
            "icon": "",
        },
    },
    "infoContacts": {
        "start": {
            "id": 1,
            "title": "Телефон:",
            "text": ["+38 (093) 554-55-88",(<br/>),"+38 (066) 533-17-39"],
            "icon": "phone",
        },
        "center": {
            "id": 2,
            "title": "Графік роботи:",
            "text": ["Пн-Пт  09:00-18:00 ",(<br/>)," Сб  09:00-17:00"],
            "icon": "time",
        },
        "end": {
            "id": 3,
            "title": "Елект. пошта:",
            "text": "i@sprinter.help",
            "icon": "email",
        },
    },
}


function qualitieContent(title, text, iconName) {
    return (
        <div className={classes.contentBox}>
            <p className={classes.title}><SvgIcons name={iconName} className={classes.icon} /> {title}</p>
            <p className={`${classes.text} ${classes[iconName]}`}>{text}</p>
        </div>
    )
}




export default function LineInfoBox({ nameBox }) {


    return (
        <section className={classes.background}>
            <div className={`container ${classes.qualitiesBox}`}>
                <div className={classes.qualitiesGroup}>
                    {qualitieContent(
                        lineBoxContent[nameBox]?.start.title || "Різноманітний вибір",
                        lineBoxContent[nameBox]?.start.text || "",
                        lineBoxContent[nameBox]?.start.icon || ""
                    )}
                    <hr className={classes.qualitiesGroupLine} />
                    {qualitieContent(
                        lineBoxContent[nameBox]?.center.title || "Поважаємо клієнтів",
                        lineBoxContent[nameBox]?.center.text || "",
                        lineBoxContent[nameBox]?.center.icon || ""
                    )}
                    <hr className={classes.qualitiesGroupLine} />
                    {qualitieContent(
                        lineBoxContent[nameBox]?.end.title || "Замовля та отримуй",
                        lineBoxContent[nameBox]?.end.text || "",
                        lineBoxContent[nameBox]?.end.icon || ""
                    )}
                </div>
            </div>
        </section>
    )
}
