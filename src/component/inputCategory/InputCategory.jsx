import React from "react";
import classes from "./inputCategory.module.css"
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";

export default function InputCategory({props}){
    
    return (
        <div className={classes.background}>
            {console.log(props)}
            {console.log(props)}
            {/* <Button>
                <SvgIcons/>
                {console.log()}
                <p>{category?.title}</p>
            </Button>
            <label>
                <input type="radio" />
                <p>{"Обрати категорію " + category?.title}</p>
            </label>
            {category?.content.length()<1?'':category?.content.map((item, index) =>
                        <label key={index} >
                            <input type="chekbox" key={index}/>
                                <p>{item}</p>
                            </label>)
                        } */}
        </div>
    )
}