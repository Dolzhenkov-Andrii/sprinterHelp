import React, { useState } from "react";
import Button from "../../component/button/Button";
import classes from "./filterSort.module.css"
import SvgIcons from "../../../public/icons/svgIcons";
import InputCategory from "../inputCategory/InputCategory";


const listCategory = [
    {
        "id":1,
        "title":"Title---1S",
        "content":[
            "text-1S",
            "text-2S",
            "text-3S",
            "text-4S",
            "text-5S",
        ]
    },
    {
        "id":2,
        "title":"Title---1D",
        "content":[
            "text-1D",
            "text-2D",
            "text-4D",
            "text-5D",
        ]
    }
]


export default function FilterSort() {

    const [isActive, setActive] = useState(classes.active);
    const buttonActiv = () => isActive ? setActive('') : setActive(classes.active);
    

    return (
        <div className={classes.background}>
            <div className={classes.filterButtonBox}>
                <Button className={`${classes.filterButton} ${classes.active}`} onClick={buttonActiv}>
                    <p>Фільтр</p>
                </Button>
                <div className={classes.selectIcon}>
                    <SvgIcons name={"arrowDown"} className={classes.icon} />
                </div>
            </div>
            <form className={`${classes.backgroundForm} ${classes.active}`}>
                <div className={classes.contentBoxContainer}>
                    <p>Ціна</p>
                    <label className={classes.inputBox}>
                        <input className={classes.inputText} type="text" placeholder={"від 1"} />
                        <input className={classes.inputText} type="text" placeholder={"до 5000"}/>
                        <Button className={classes.buttonPrice}>ok</Button>
                    </label>
                </div>
                <div className={classes.contentBoxContainer}>
                    <p>Стан</p>
                    <div>
                        <label className={classes.inputBox}>
                            <input type="radio" name="stan" className={classes.inputRadio} defaultChecked={true}/>
                            <p>Всі</p>
                        </label>
                        <label className={classes.inputBox}>
                            <input type="radio" name="stan" className={classes.inputRadio}/>
                            <p>Новий</p>
                        </label>
                        <label className={classes.inputBox}>
                            <input type="radio" name="stan" className={classes.inputRadio}/>
                            <p>Вживаний Б/В</p>
                        </label>
                    </div>
                </div>
                <div className={classes.contentBoxContainer}>
                    <p>Категорія</p>
                    <div>
                        {listCategory.map(item => {
                            // {console.log(item)}
                            <InputCategory props={item}/>})}
                    </div>
                </div>
            </form>
        </div>
    )
}