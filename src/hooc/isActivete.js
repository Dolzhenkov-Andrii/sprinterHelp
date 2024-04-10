import { useContext } from "react";
import { ModalCardActive } from "./ModalCardActive";

export function useCard() {
    return useContext(ModalCardActive);
}
