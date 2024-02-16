
import { FC } from 'react';
import { ISelectItemProps } from '../../types/BankCardSelector.types';
import s from "../../BankCard.module.css"

const SelectItem: FC<ISelectItemProps> = ({ rest, handleChangeItem, setShowDrop }) => {

    const { label, value } = rest;

    const handleSendChangeItem = () => {
        handleChangeItem({ label, value })
        setShowDrop(false)
    }

    return (
        <div className={s.commonItemInSelector} onClick={handleSendChangeItem}>
            {label}
        </div>
    )
};

export { SelectItem };