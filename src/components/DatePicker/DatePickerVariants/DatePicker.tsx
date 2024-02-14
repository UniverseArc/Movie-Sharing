
import { FC } from "react";
import s from "./DatePicker.module.css"
import { clsx } from 'clsx';
import { DatePickerVariant, ITimeBarProps } from "./types/DatePicker.types";

const DatePicker: FC<ITimeBarProps> = ({ variant, date }) => {

    return (
        <button className={
            clsx(
                s.timeBarButton, 
                variant === DatePickerVariant.primaryPicked ? s.gray : "", 
                variant === DatePickerVariant.redPicked ? s.red : "",
            )
        } data-date={date}></button>
    )
}

export default DatePicker;