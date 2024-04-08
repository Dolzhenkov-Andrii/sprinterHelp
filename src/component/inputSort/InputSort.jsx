import React, { useEffect, useState } from "react";
import classes from "./inputSort.module.css"
import SvgIcons from "../../../public/icons/svgIcons";
import Button from "../button/Button";


export default function InputSort({ list, typeContent, isActiveSort, isSort, whoSortActiv, isWhoSortActiv }) {

    const isType = {
        'number': classes.number,
        'text': classes.text
    }
    const [isActive, setActive] = useState('');

    const onClick = (item) => {
        setActive('')
        isActiveSort(item)
        isActiveType(item)
    }


    const buttonActiv = () => {
        isActive ?
            setActive('') :
            setActive(classes.active),
            isWhoSortActiv({
                '1': 'number' == typeContent ? true : false,
                '2': 'text' == typeContent ? true : false,
                '3': false,
            });
    }

    useEffect(() => {
        console.log('1-2')
        if (!whoSortActiv['number' == typeContent ? '1' : '2']) setActive('')
    }, [whoSortActiv])

    return (
        <div className={classes.background}>
            {typeContent == 'number' ? <p>Товарів на сторінці:</p> : <p>Відсортувати:</p>}
            <div className={`${classes.filterButtonBox} ${isType[typeContent]}`}>
                <Button className={`${classes.filterButton} ${isActive}`} onClick={buttonActiv}>
                    <p className={classes.activeType}>{isSort}</p>
                </Button>
                <div className={classes.selectIcon}>
                    <SvgIcons name={"arrowDown"} className={classes.icon} />
                </div>
            </div>
            <div className={`${classes.backgroundForm} ${isActive} ${isType[typeContent]}`}>
                {list.map((item, i) => <Button key={item} className={`${classes.typeContent}`} onClick={() => onClick(list[i])} >{item}</Button>)}
            </div>
        </div>
    )
}
