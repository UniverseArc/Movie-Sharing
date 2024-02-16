
export interface IOptionsCards {
    label: string;
    value?: string | number;
}

export interface ISelectListProps {
    options: IOptionsCards[];
    selectedItem?: IOptionsCards | null;
    placeholder: string;
    handleChangeItem: (selection: IOptionsCards) => void;
}

export interface ISelectItemProps {
    rest: ISelectItemElement;
    handleChangeItem: (selection: IOptionsCards) => void;
    setShowDrop: (isShown: boolean) => void;
}

export interface ISelectItemElement {
    label: string;
    value?: string | number;
}