import React, { useEffect, useState } from "react";
import Button from "../../component/button/Button";
import classes from "./filterSort.module.css"
import SvgIcons from "../../../public/icons/svgIcons";
import InputCategory from "../inputCategory/InputCategory";


const listCategory = [
    {
        "id": 1,
        "title": "Title---1S",
        "content": [
            "text-1S",
            "text-2S",
            "text-3S",
            "text-4S",
            "text-5S",
        ]
    },
    {
        "id": 2,
        "title": "Title---1D",
        "content": [
            "text-1D",
            "text-2D",
            "text-4D",
            "text-5D",
        ]
    }
]


export default function FilterSort({ whoSortActiv, isWhoSortActiv }) {

    const [isActive, setActive] = useState(whoSortActiv[3]);
    const [isActive2, setActive2] = useState({
        'id': null,
        'classes': classes.active
    });
    const buttonActiv = () => {
        if (isActive) {
            setActive('')
        } else {
            isWhoSortActiv({
                '1': false,
                '2': false,
                '3': true,
            })
            setActive(classes.active);
        }
    }
    const buttonActiv2 = (id) => isActive2.id != null && isActive2.id == id ? setActive2({
        'id': null,
        'classes': classes.active
    }) : setActive2({
        'id': id,
        'classes': classes.active
    });
    useEffect(() => {
        console.log('3')
        if (!whoSortActiv['3']) setActive('')
    }, [whoSortActiv])

    return (
        <div className={classes.background}>
            <div className={classes.filterButtonBox}>
                <Button className={`${classes.filterButton} ${isActive}`} onClick={buttonActiv}>
                    <p>Фільтр</p>
                </Button>
                <div className={classes.selectIcon}>
                    <SvgIcons name={"arrowDown"} className={classes.icon} />
                </div>
            </div>
            <div className={`${classes.backgroundForm} ${isActive}`}>
                <div className={classes.contentBoxContainer}>
                    <p>Ціна</p>
                    <div className={classes.inputBox}>
                        <input className={classes.inputText} type="text" placeholder={"від 1"} />
                        <input className={classes.inputText} type="text" placeholder={"до 5000"} />
                        <Button className={classes.buttonPrice}>ok</Button>
                    </div>
                </div>
                <div className={classes.contentBoxContainer}>
                    <p>Стан</p>
                    <div>
                        <label className={classes.inputBox}>
                            <input type="radio" name="stan" className={classes.inputRadio} defaultChecked={true} />
                            <p>Всі</p>
                        </label>
                        <label className={classes.inputBox}>
                            <input type="radio" name="stan" className={classes.inputRadio} />
                            <p>Новий</p>
                        </label>
                        <label className={classes.inputBox}>
                            <input type="radio" name="stan" className={classes.inputRadio} />
                            <p>Вживаний Б/В</p>
                        </label>
                    </div>
                </div>

                <div className={classes.contentBoxContainer}>
                    <p>Категорія</p>
                    <div>

                        {listCategory.map((item, index) => {

                            return <InputCategory
                                key={index}
                                props={item}
                                classes={classes}
                                isActive={isActive2}
                                onClick={buttonActiv2}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
