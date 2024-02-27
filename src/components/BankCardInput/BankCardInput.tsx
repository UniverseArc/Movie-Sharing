import React from 'react';
import s from "./BankCardInput.module.css"
import { MyInput } from '../MyInput/MyInput';
import { BankCardPic } from './BankCardPic';


const BankCardInput = () => {
    return (
        <MyInput whichType='number' whichName='BankCardInput' />
    )
};

export { BankCardInput };