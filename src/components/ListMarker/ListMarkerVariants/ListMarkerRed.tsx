
import { FC } from "react";
import s from "./ListMarker.module.css"
import { IListMakerRed, ListMarkerVariant } from "./types/ListMarker.types";

const ListMarkerRed: FC<IListMakerRed> = ({ variant }) => {
    return (
        <div style={
            {
                backgroundColor: variant === ListMarkerVariant.fullfiledRed ? "#8D090D" : "",
            }
        } className={s.listMaker} />
    )
}

export default ListMarkerRed;