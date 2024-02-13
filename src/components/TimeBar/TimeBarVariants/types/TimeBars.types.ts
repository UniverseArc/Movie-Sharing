export enum TimeBarsVariant {
    primary = "primary",
    outlinedRed = "outlinedRed",
    fullfiledRed = "fullfiledRed"
}

export interface IDate {
    hours: number;
    minutes: number;
}

export interface ITimeBarProps {
    variant: TimeBarsVariant,
    time?: IDate,
}