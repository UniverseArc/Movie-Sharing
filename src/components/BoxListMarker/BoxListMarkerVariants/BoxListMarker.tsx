
import { FC } from "react";
import s from "./BoxListMarker.module.css"
import { BoxListMarkerVariant, IBoxListMaker } from "./types/BoxListMarker.types";
import clsx from 'clsx';

const BoxListMarker: FC<IBoxListMaker> = ({ variant }) => {
    return (
        <div className={
            clsx(
                s.listMaker,
                variant === BoxListMarkerVariant.primaryGray ? s.gray : "",
                variant === BoxListMarkerVariant.greenInGray ? s.greenInGray : "",
                variant === BoxListMarkerVariant.outlinedGreen ? s.outlinedGreen : "",
            )
        }></div>
    )
}

export default BoxListMarker;