import React, { FC, useState } from 'react';
import { IMyInput } from './types/MyInput.types';
import s from "./MyInput.module.css"

const MyInput: FC<IMyInput> = ({ whichType, whichName, whichwidth }) => {
    const [value, setValue] = useState("")
    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }    
    return (
        <>
            <input style={{width: whichwidth}} name={whichName} type={whichType} className={s.myInput} onChange={handleChangeInputValue} value={value} />
        </>
    )
};

export { MyInput };