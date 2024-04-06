import React from "react";
import classes from "./catalogNumNav.module.css";
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";



function numMap(maxNum, activeNum) {
    if (activeNum > maxNum) activeNum = maxNum;
    if (activeNum < 1) activeNum = 1;
    if (maxNum < 10) {
        const numArr = Array(maxNum).fill().map((e, i) => i + 1);
        return numArr;
    }
    let numArr = Array(9).fill().map((e, i) => i + 1);
    if (activeNum < 6) {
        numArr[7] = '...';
        numArr[8] = maxNum;
    } else if (activeNum > maxNum - 5) {
        numArr = numArr.map((num, i) => num = maxNum - 8 + i);
        numArr[1] = '...';
        numArr[0] = 1;
    } else {
        for (let i = 0, j = activeNum - 4; i < numArr.length; i++, j++) numArr[i] = j;
        numArr[1] = '...';
        numArr[7] = '...';
        numArr[0] = 1;
        numArr[8] = maxNum;
    }
    return numArr;
}

export default function CatalogNumNav({ maxNum, activeNum, isActive }) {
    if (!maxNum && !activeNum) return (<></>)
    let numArr = numMap(maxNum, activeNum);

    const activePage = (num) => {
        numArr[num] == '...' ? isActive(num > 5 ? activeNum + 5 > maxNum ? maxNum : activeNum + 5 : activeNum - 5 < 1 ? 1 : activeNum - 5) : isActive(numArr[num])
    }

    return (
        <div className={classes.backgroundBox}>

            <Button className={`${classes.button} ${classes.left}`} onClick={() => { if (activeNum > 1) isActive(activeNum - 1) }}><SvgIcons name={"arrowDown"} className={classes.icon} /></Button>
            {numArr.map((num, i) => (
                <Button key={i} className={`${classes.button} ${classes.number} ${num == activeNum ? classes.active : ''}`} onClick={() => activePage(i)}>
                    <p>{num}</p>
                </Button>
            ))}
            <Button className={`${classes.button} ${classes.right}`} onClick={() => { if (activeNum < maxNum) isActive(activeNum + 1) }}><SvgIcons name={"arrowDown"} className={classes.icon} /></Button>
        </div>
    )
}
