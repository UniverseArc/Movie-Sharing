
import { FC } from "react";
import s from "./DatePicker.module.css"
import { clsx } from 'clsx';
import { DatePickerVariant, ITimeBarProps } from "./types/DatePicker.types";

const DatePicker: FC<ITimeBarProps> = ({ variant, date }) => {

    return (
        <button className={
            clsx(
                s.timeBarButton, 
                variant === DatePickerVariant.primary ? s.gray : "", 
                variant === DatePickerVariant.fullfiledRed ? s.red : "",
                variant === DatePickerVariant.outlinedRed ? s.redOutlined : ""
            )
        }>{date}</button>
    )
}

export default DatePicker;