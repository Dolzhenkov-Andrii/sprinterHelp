import React from "react";
import classes from "./catalogue.module.css";
import Button from "../../component/button/Button";
import SvgIcons from "../../../public/icons/svgIcons";
import InputSort from "../../component/inputSort/InputSort";
import FilterSort from "../../component/filterSort/FilterSort";
import ProductCard from "../../component/productСard/ProductCard";
import CatalogNumNav from "../../component/catalogNumberNav/CatalogNumNav";

function isActivePage(maxNum){

}



export default function Catalogue() {
    return (
        <section className={classes.background}>
            <div className={classes.navigation}>
                <div className={`container ${classes.container}`}>
                    <div className={classes.navLeft}>
                        <InputSort list={["16", "24", "36", "48"]} typeContent={'number'} />
                        <InputSort list={["за алфавітом", "за зростанням цін", "за зниженням цін", "за новизною"]} typeContent={'text'}/>
                    </div>
                    <div className={classes.navRigth}>
                       <FilterSort/>
                    </div>
                </div>
            </div>
            <div className={classes.catalogueBox}>
                <Button className={`${classes.buttonDown} ${classes.downLeft}`}><SvgIcons name={"arrowDown"} className={classes.iconDown}/></Button>
                <div className={`container ${classes.containerContent}`}>
                    <div className={classes.content}>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                        <ProductCard className={'cataloge'}/>
                    </div>
                    <CatalogNumNav maxNum={45} activeNum={24}/>
                </div>
                <Button className={`${classes.buttonDown} ${classes.downRight}`}><SvgIcons name={"arrowDown"} className={classes.iconDown}/></Button>
            </div>
        </section>
    )
}
