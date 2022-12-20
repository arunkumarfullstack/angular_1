
export interface ExtraKey {
    key: string;
    value: string;
    description:string;
    dataType:string;
}
export interface Menu {
    sequence: number;
    type: string;
    name: string;
    description: string;
    popupHeader:string;
    extraFields: ExtraKey[]
}

