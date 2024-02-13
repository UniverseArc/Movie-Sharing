export enum ListMarkerVariant {
    primary = "primary",
    outlinedRed = "outlinedRed",
    fullfiledRed = "fullfiledRed"
}


export interface IListMaker {
    variant: ListMarkerVariant
}