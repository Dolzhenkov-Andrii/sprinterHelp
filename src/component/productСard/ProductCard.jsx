import React from "react";
import classes from "./productCard.module.css";
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";



export default function ProductCard({ className, cardData,isActivCardBox }) {


    const isUsedIndex = cardData?.statusBU || false;
    const catalogeStyle = className == "cataloge"? classes.cataloge:''


    return (
        <div className={`${classes.test} ${catalogeStyle}`}>
            <div className={`${classes.backgroundBox} ${isUsedIndex ? classes.usedIndex : ''} ${catalogeStyle} `}>
                <div className={`${classes.imgBox} ${isUsedIndex ? classes.usedIndexImg : ''} ${catalogeStyle}`} onClick={()=>isActivCardBox(true)}>
                    <img className={`${classes.img} ${catalogeStyle}`} src={cardData?.img || ''} alt="Product" />
                    <div className={`${classes.usedIndexBox} ${isUsedIndex ? '' : classes.notActive} ${catalogeStyle}`}><p>{"Б/В"}</p></div>
                    <Button className={`${classes.eyeButton} ${catalogeStyle}`}>
                        <SvgIcons name={"eye"} className={`${classes.eyeSvgIcons} ${catalogeStyle}`}/>
                    </Button>
                    <div className={`${classes.blurBG} ${catalogeStyle}`} />
                </div>
                <div className={`${classes.infoBox} ${catalogeStyle}`}>
                    <div content={`${classes.textInfo} ${catalogeStyle}`}>
                        <p className={`${classes.title} ${catalogeStyle}`}>{cardData.title}</p>
                        <hr className={`${classes.infoTextLine} ${catalogeStyle}`} />
                        <p className={`${classes.modelAuto} ${catalogeStyle}`}>{cardData.model}</p>
                    </div>
                    <div className={`${classes.priceInfo} ${catalogeStyle}`}>
                        <div className={`${classes.priceBox} ${catalogeStyle}`}>
                            <p className={`${classes.newPrice} ${catalogeStyle}`}>{cardData.price}</p>
                            {cardData?.oldPrice?<p className={`${classes.oldPrice} ${catalogeStyle}`}>{cardData.oldPrice}</p>:<></>}

                        </div>
                        <Button className={`${classes.basketButton} ${catalogeStyle}`}>
                            <p>+</p>
                            <SvgIcons name={"basket"} className={`${classes.basketSvgIcons} ${catalogeStyle}`} />
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}
