
export interface ExtraKey {
    key: string;
    value: string;
}
export interface Menu {
    sequence: number;
    type: string;
    name: string;
    description: string;
    extraFields: ExtraKey[]
}

