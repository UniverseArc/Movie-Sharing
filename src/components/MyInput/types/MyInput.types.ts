
// export interface IValueInput {
//     inputValue?: string | number;
// }

import { HTMLInputTypeAttribute } from "react";

 export type TMyInput<> = "text" | number | null

export interface IMyInput {
    whichType: HTMLInputTypeAttribute;
    whichName: string;
    whichwidth?: string;
}