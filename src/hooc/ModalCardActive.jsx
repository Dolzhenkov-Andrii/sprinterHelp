import { createContext, useState } from "react";

export const ModalCardActive = createContext(null)

export const ModalCardIsActive = ({children}) => {


    const [cardActivet, isActivModalCardBox] = useState(false)

    const isCardActivet = (activ) => {
        console.log(activ)
        isActivModalCardBox(activ);
    }


    const value = {cardActivet, isCardActivet}

    return <ModalCardActive.Provider value={value}>
        {children}
    </ModalCardActive.Provider>
}
