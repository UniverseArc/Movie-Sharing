
import { FC } from "react";
import s from "./ListMarker.module.css"
import { IListMaker, ListMarkerVariant } from "./types/ListMarker.types";
import clsx from 'clsx';

const ListMarker: FC<IListMaker> = ({ variant }) => {
    return (
        <div className={
            clsx(
                s.listMaker,
                variant === ListMarkerVariant.primary ? s.gray : "",
                variant === ListMarkerVariant.fullfiledRed ? s.red : "",
                variant === ListMarkerVariant.outlinedRed ? s.outlinedRed : "",
            )
        } />
    )
}

export default ListMarker;