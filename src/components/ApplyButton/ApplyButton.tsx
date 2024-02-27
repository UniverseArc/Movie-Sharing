import { FC } from "react";
import s from "./ApplyButton.module.css"
import clsx from 'clsx';
import { EApplyButtonStyles, IApplyButton } from "./types/ApplyButton.types";

    const colorClasses = {
        [EApplyButtonStyles.White]: { class: s.buttonApply_white, text: 'Apply' },
        [EApplyButtonStyles.Green]: { class: s.buttonApply_green, text: 'Applied!' },
        [EApplyButtonStyles.Red]: { class: s.buttonApply_red, text: 'Declined!' },
    };

const ApplyButton: FC<IApplyButton> = ({ buttonStyle}) => {
    const { class: buttonClassName, text: buttonText } = colorClasses[buttonStyle] || { class: s.buttonApply, text: 'Apply' };

    return (
        <button className={clsx(s.buttonApply, buttonClassName)}>{buttonText}</button>
    )
};

export { ApplyButton };