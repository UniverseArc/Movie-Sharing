
import { FC } from "react";
import s from "./ListMarker.module.css"
import { IListMakerRedOutlined, ListMarkerVariant } from "./types/ListMarker.types";

const ListMarkerRedOutlined: FC<IListMakerRedOutlined> = ({ variant }) => {
    return (
        <div style={
            {
                border: variant === ListMarkerVariant.outlinedRed ? "1px solid #8D090D" : "",
            }
        } className={s.listMakerOutlined} /> 
    )
}

export default ListMarkerRedOutlined;