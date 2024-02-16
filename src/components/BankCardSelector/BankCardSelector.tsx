import { SelectList } from "./Select/SelectList";
import { IOptionsCards } from "./types/BankCardSelector.types";
import s from "./BankCard.module.css"
import { FC, useState } from "react";

const optionsCards: IOptionsCards[] = [
    {
        label: "Visa bank card",
        value: "Visa"
    },
    {
        label: "Mastercard bank card",
        value: "Mastercard"
    },
    {
        label: "Mir bank card",
        value: "Mir"
    },
    {
        label: "JCB bank card",
        value: "JCB"
    },
]

const BankCardSelector: FC = () => {
    const [selectedItem, setSelectedItem] = useState<IOptionsCards | null>(null)
    
    const handleTransfersCB = (selection: IOptionsCards) => setSelectedItem(selection)
    
    return (
        <div className={s.bankCardSelectorWrapper}>
            <SelectList
                options={optionsCards}
                placeholder="Choose your bank card"
                selectedItem={selectedItem}
                handleChangeItem={handleTransfersCB}
            />
            <p>My selection is {selectedItem?.label}</p>
        </div>
    )
};

export { BankCardSelector };