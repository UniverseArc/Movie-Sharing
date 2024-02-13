export enum DatePickerVariant {
    primary = "primary",
    outlinedRed = "outlinedRed",
    fullfiledRed = "fullfiledRed"
}


export interface ITimeBarProps {
    variant: DatePickerVariant,
    date?: number,
}