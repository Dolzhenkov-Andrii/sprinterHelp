import React, { useState } from "react";
import classes from "./catalogue.module.css";
import Button from "../../component/button/Button";
import SvgIcons from "../../../public/icons/svgIcons";
import InputSort from "../../component/inputSort/InputSort";
import FilterSort from "../../component/filterSort/FilterSort";
import ProductCard from "../../component/productСard/ProductCard";
import CatalogNumNav from "../../component/catalogNumberNav/CatalogNumNav";
import img1 from "/img/img1.jpg";

const MAXCARD = 165;

const productArr = Array(MAXCARD)
for(let i = 0; i< productArr.length; i++) {
    productArr[i]={
        'id': i,
        'title':`   -=[ ${i+1} ]=-`,
        'model':'model',
        'price': '2000 грн',
        'oldPrice':'3000 грн',
        'statusBU': true,
        'img':img1,
    }
}

export default function Catalogue() {


    const [productCard, updateProductCard] = useState(productArr)
    const [pageNum, isPageNum] = useState(1);
    const [cardInPage, isCardInPage] = useState(16)
    const [cardInSort, isCardInSorte] = useState("за алфавітом")
    const [whoSortActiv, isWhoSortActiv] = useState({
        '1':false,
        '2':false,
        '3':false,
    })


    if(~~(MAXCARD/cardInPage)+1 < pageNum) isPageNum(~~(MAXCARD/cardInPage)+1)

    function isActivePage(maxNum){
        if (maxNum < 1) isPageNum(1)
        else if (maxNum > ~~(MAXCARD/cardInPage)+1) isPageNum(~~(MAXCARD/cardInPage)+1)
        else isPageNum(maxNum)
    }
    function getCard(){
        let result = []
        for(let i = pageNum*cardInPage-cardInPage, j = 0; i<MAXCARD && j < cardInPage;j++, i++){
            result.push(<ProductCard key={i} className={'cataloge'} cardData={productCard[i]}/>)
        }
        return result
    }



    return (
        <section className={classes.background}>
            <div className={classes.navigation}>
                <div className={`container ${classes.container}`}>
                    <div className={classes.navLeft}>
                        <InputSort list={[16, 24, 36, 48]} typeContent={'number'} isActiveSort={isCardInPage} isSort={cardInPage} whoSortActiv={whoSortActiv} isWhoSortActiv={isWhoSortActiv}/>
                        <InputSort list={["за алфавітом", "за зростанням цін", "за зниженням цін", "за новизною"]} typeContent={'text'} isActiveSort={isCardInSorte} isSort={cardInSort} whoSortActiv={whoSortActiv} isWhoSortActiv={isWhoSortActiv}/>
                    </div>
                    <div className={classes.navRigth}>
                       <FilterSort whoSortActiv={whoSortActiv} isWhoSortActiv={isWhoSortActiv}/>
                    </div>
                </div>
            </div>
            <div className={classes.catalogueBox}>
                <Button className={`${classes.buttonDown} ${classes.downLeft}`} onClick={()=> isActivePage(pageNum-1)}><SvgIcons name={"arrowDown"} className={classes.iconDown}/></Button>
                <div className={`${classes.containerContent}`}>
                    <div className={classes.content}>
                        {/* <ProductCard className={'cataloge'} cardData={productArr[0]}/> */}
                        {getCard()}
                    </div>
                    <div className={classes.contentNavBox}>
                    <CatalogNumNav maxNum={~~(MAXCARD/cardInPage)+1} activeNum={pageNum} isActive={isActivePage}/>
                    </div>
                </div>
                <Button className={`${classes.buttonDown} ${classes.downRight}`} onClick={()=> isActivePage(pageNum+1)}><SvgIcons name={"arrowDown"} className={classes.iconDown}/></Button>
            </div>
        </section>
    )
}
