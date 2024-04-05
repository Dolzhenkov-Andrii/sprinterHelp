import React, { useEffect, useState } from "react";
import classes from "./inputSort.module.css"
import SvgIcons from "../../../public/icons/svgIcons";
import Button from "../button/Button";


export default function InputSort({ list, typeContent }) {

    const isType = {
        'number': classes.number,
        'text': classes.text
    }

    const [activeType, isActiveType] = useState(list[0]);
    const [isActive, setActive] = useState('');
    const [isActive2, setActive2] = useState({
        'id': null,
        'classes': classes.active
    });
    const buttonActiv = () => isActive ? setActive('') : setActive(classes.active);
    return (
        <div className={classes.background}>
            <p>Товарів на сторінці:</p>
            <div className={`${classes.filterButtonBox} ${isType[typeContent]}`}>
                <Button className={`${classes.filterButton} ${isActive}`} onClick={buttonActiv}>
                    <p className={classes.activeType}>{activeType}</p>
                </Button>
                <div className={classes.selectIcon}>
                    <SvgIcons name={"arrowDown"} className={classes.icon} />
                </div>
            </div>
            <div className={`${classes.backgroundForm} ${isActive} ${isType[typeContent]}`}>
                {list.map(item => <Button key={item} className={`${classes.typeContent}`} >{item}</Button>)}
            </div>
        </div>
    )
}
