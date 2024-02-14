export enum DatePickerVariant {
    primaryPicked = "primaryPicked",
    redPicked = "redPicked",
}


export interface ITimeBarProps {
    variant: DatePickerVariant,
    date?: number,
}