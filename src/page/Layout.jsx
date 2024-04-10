import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../component/header/Header"
import LineInfoBox from "../component/section/lineInfoBox/LineInfoBox"
import AdressLine from "../component/section/adress/AdressLine"
import Footer from "../component/section/footer/Footer"
import BasketBox from '../component/basketBox/BasketBox'
import ModalBox from '../component/modalBox/ModalBox'
import ModalCard from '../component/productСard/ModalCard'
import ModalPayment from '../component/paymentBox/ModalPayment'
import { useCard } from "../hooc/isActivete";


import img1 from "/img/img_1.png";
import img2 from "/img/img_2.png";
import img3 from "/img/img_3.png";

const MAXCARD = 1;

const productArr1 = Array(MAXCARD)
for (let i = 0; i < productArr1.length; i++) {
    productArr1[i] = {
        'id': i,
        'title': `Гільза циліндру / комплект гильзи циліндра`,
        'model': 'MERCEDES-BENZ VITO автобус (638) 110 CDI 2.2 (638.194) 102 PS OM 611.980 Дизель 1999-2003',
        'price': '2000 грн',
        'oldPrice': '3000 грн',
        'statusBU': true,
        'curent': 2,
        'img': [img1,img2,img3],
    }
}


function Layout({testTmp, clouse}) {
    const {cardActivet, isCardActivet } = useCard();
    const [basketActive, isBascetActive] = useState(false)
    const [modalCardActive, isModalCardActive] = useState(false)
    const [modalPaymentActive, isModalPaymentActive] = useState(false)

    const openModal = () => {
        document.body.classList.add('modal-open');
    }
    const hideModal = () => {
        document.body.classList.remove('modal-open');
    }
    basketActive || modalCardActive || modalPaymentActive ? openModal() : hideModal()


    useEffect(()=>{
        isModalCardActive(testTmp)
    },[testTmp])
    return (
        <>
            <ModalBox active={modalPaymentActive} clouse={isModalPaymentActive}>
                <ModalPayment active={modalPaymentActive} clouse={isModalPaymentActive}/>
            </ModalBox>
            <ModalBox active={modalCardActive} clouse={clouse}>
                <ModalCard card={productArr1[0]} active={modalCardActive} clouse={clouse} />
            </ModalBox>
            <BasketBox active={basketActive} clouse={isBascetActive} isPayment={isModalPaymentActive}/>
            <Header basketActive={basketActive} isBascetActive={isBascetActive} />
            <Outlet/>
            <LineInfoBox nameBox={"infoContacts"} />
            <AdressLine />
            <Footer />
        </>
    )
}

export default Layout
