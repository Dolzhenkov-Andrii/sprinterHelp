import React from "react";
import classes from "./homeCardBox.module.css"
import ProductCard from "../../productСard/ProductCard";



export default function HomeCardBox(){
    return (
        <section className={classes.background}>
            <div className={`container ${classes.cardBox}`}>
                <ProductCard/>
            </div>
        </section>
    )
}
