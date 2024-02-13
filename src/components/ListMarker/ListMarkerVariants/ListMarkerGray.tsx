
import { FC } from "react";
import s from "./ListMarker.module.css"
import { IListMakerGray, ListMarkerVariant } from "./types/ListMarker.types";

const ListMarkerGray: FC<IListMakerGray> = ({ variant }) => {
    return (
        <div style={
            {
                backgroundColor: variant === ListMarkerVariant.primary ? "#A4A4A4" : "",
            }
        } className={s.listMaker} />
    )
}

export default ListMarkerGray;