import React from "react";
import classes from "./backgroundImg.module.css"

const imgBackground = {
    "first": classes.first,
}


export default function BackgroundImg({children, className}){
    return  <div className={`${classes.backgroundImg} ${imgBackground[className]?imgBackground[className]:''}`}>{children}</div>
};
