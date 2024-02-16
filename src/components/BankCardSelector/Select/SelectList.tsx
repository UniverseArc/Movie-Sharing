
import { FC, useState } from "react";
import s from "../BankCard.module.css"
import { ISelectListProps } from "../types/BankCardSelector.types";
import { SelectItem } from "./SelectItem/SelectItem";
import { SelectSvg } from "./SelectItem/SelectSvg";

const SelectList: FC<ISelectListProps> = ({ options, selectedItem, placeholder, handleChangeItem }) => {

    const [showDrop, setShowDrop] = useState(false);

    const valueOfSpan = selectedItem ? selectedItem.label : placeholder;

    const handleCloseDrop = () => {
        setShowDrop(!showDrop)
    }

    return (
        <div className={s.selectListWrapper}>
            <div onClick={handleCloseDrop} className={s.kingSelectItemWrapper}>
                <span className={s.kingSelectItemText}>{valueOfSpan}</span>
                <SelectSvg className={s.kingSelectItemSvg}/>
            </div>

            {showDrop &&
                <div className={s.commonItemsWrapper}>
                    {options.map(
                        (el) => <SelectItem
                            key={el.value}
                            setShowDrop={setShowDrop}
                            handleChangeItem={handleChangeItem}
                            rest={el} />)}
                </div>
            }
        </div>
    )
};

export { SelectList };