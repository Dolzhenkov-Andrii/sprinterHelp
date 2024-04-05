import React from "react";
import classes from "./catalogNumNav.module.css";
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";



function numMap(maxNum, activeNum){
    if(activeNum > maxNum) activeNum = maxNum;
    if(activeNum < 1) activeNum = 1;
    if(maxNum < 10){
            const numArr = Array(maxNum).fill().map((e, i) => i + 1);
            return numArr.map( num =>(
                <Button className={`${classes.button} ${classes.number} ${num == activeNum?classes.active:''}`}>
                <p>{num}</p>
            </Button>
            ));
    } else {
        let numArr = Array(9).fill().map((e, i) => i + 1);
        if(activeNum < 6) {
            numArr[7] = '...';
            numArr[8] = maxNum;
        }else if(activeNum > maxNum-5) {
            numArr=numArr.map((num,i) => num = maxNum-8+i);
            numArr[1] = '...';
            numArr[0] = 1;
        } else {
            for(let i = 0 ,j = activeNum - 4; i < numArr.length; i++, j++ ) numArr[i] = j;
            numArr[1] = '...';
            numArr[7] = '...';
            numArr[0] = 1;
            numArr[8] = maxNum;
        }
        return numArr.map( num =>(
            <Button className={`${classes.button} ${classes.number} ${num == activeNum?classes.active:''}`}>
            <p>{num}</p>
        </Button>
        ));
    }
}

export default function CatalogNumNav({maxNum, activeNum, isActive}){
    if(!maxNum && !activeNum) return (<></>)

    return (
        <div className={classes.backgroundBox}>

            <Button className={`${classes.button} ${classes.left}`}><SvgIcons name={"arrowDown"} className={classes.icon} /></Button>
            {numMap(maxNum,activeNum)}
            <Button className={`${classes.button} ${classes.right}`}><SvgIcons name={"arrowDown"} className={classes.icon} /></Button>
        </div>
    )
}
