import React from "react";
import classes from "./modalCard.module.css";
import Button from "../button/Button";
import SvgIcons from "../../../public/icons/svgIcons";
import ServiceCard from "../serviceCard/ServiceCard";




export default function ModalCard({ card, active, clouse }) {
    return (
        <div className={classes.background}>
            <div className={classes.titleBox}>
                <div className={classes.title}>
                    <p className={classes.titleFirst}>{card?.title || 'Product Card'}</p>
                    <p className={classes.titleSecond}>{'MERCEDES-BENZ VITO автобус (638) 110 CDI 2.2 (638.194) 102 PS OM 611.980 Дизель 1999-2003'}</p>
                </div>
                <Button className={classes.buttonClouse} onClick={() => clouse(false)}>
                    <SvgIcons name="clouse" className={classes.iconClouse} />
                </Button>
            </div>
            <div className={classes.contentBox}>
                <div className={classes.imgBox}>
                    <div className={classes.containerImg}>
                        <img className={classes.img} src={card.img[1]} alt="Product" />
                    </div>
                    <div className={classes.imgSmallBox}>
                        <img className={classes.imgSmall} src={card.img[0]} alt="Product" />
                        <img className={classes.imgSmall} src={card.img[2]} alt="Product" />
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <form className={classes.buttonBox}>
                        <div className={classes.phoneBox}>
                            <p>+38</p>
                            <input type="phone" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="099123..."/>
                        </div>
                        <Button className={classes.buttonBay}>
                            <p>Купити зараз!</p>
                        </Button>
                    </form>
                    <div className={classes.buttonBox}>
                        <div className={classes.priceBox}>
                            <p className={classes.price}>{card.price}</p>
                            <p className={classes.oldPrice}>{card?.oldPrice}</p>
                        </div>
                        <Button className={classes.buttonBay} >
                            <p className={classes.pluse}>+</p>
                            <SvgIcons name="basket" className={classes.iconBasket} />
                        </Button>
                    </div>
                    <hr className={classes.line} />
                    <div className={classes.productInfoBox}>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                        <div className={classes.paramProduct}>
                            <p className={classes.paramTitle}>Код товару</p>
                            <p className={classes.paramText}>1009002</p>
                        </div>
                    </div>
                    <div className={classes.serviceInfo}>

                        <ServiceCard ClassName={"card"}
                            name={"delivery"}
                            title={"Доставка"}
                            text={"Новою поштою, по всій Україні."}
                        />
                        <ServiceCard ClassName={"card"}
                            name={"payment"}
                            title={"Оплата"}
                            text={"Картою, готівкою, чи при отримані."}
                        />
                        <ServiceCard ClassName={"card"}
                            name={"guarantee2"}
                            title={"Гарантія"}
                            text={"Перевірений, та якісний товар."}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
