
import { FC } from "react";
import s from "./TimeBars.module.css"
import { ITimeBarProps, TimeBarsVariant } from "./types/TimeBars.types";
import { clsx } from 'clsx';

const TimeBar: FC<ITimeBarProps> = ({ variant, time }) => {

    return (
        <button className={
            clsx(
                s.timeBarButton, 
                variant === TimeBarsVariant.primary ? s.gray : "", 
                variant === TimeBarsVariant.fullfiledRed ? s.red : "",
                variant === TimeBarsVariant.outlinedRed ? s.redOutlined : ""
            )
        }>{time?.hours}:{time?.minutes}</button>
    )
}

export default TimeBar;