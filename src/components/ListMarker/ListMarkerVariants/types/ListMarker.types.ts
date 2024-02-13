export enum ListMarkerVariant {
    primary = "primary",
    outlinedRed = "outlinedRed",
    fullfiledRed = "fullfiledRed"
}


export interface IListMakerGray {
    variant: ListMarkerVariant.primary
}

export interface IListMakerRed {
    variant: ListMarkerVariant.fullfiledRed
}

export interface IListMakerRedOutlined {
    variant: ListMarkerVariant.outlinedRed
}