import { FC } from "react";
import { IPurchaseButton } from "./types/PurchaseButton.types";
import s from "./PurchaseButton.module.css"

const PurchaseButton: FC<IPurchaseButton> = ({ price, children }) => {
    return (
        <button className={s.backgroundColorPurchase}>
            Purchase ({price}$)
        </button>
    )
}

export default PurchaseButton;