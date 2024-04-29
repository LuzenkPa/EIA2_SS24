namespace Liste {
    export interface item {
        menge: number;
        einheit: string;
        name: string;
        lastbought: Date;
        bought: boolean;
        comment: string;
    }

    export let data: item[] = [
        { menge: 1.5, einheit: "Liter", name: "Milch", lastbought: new Date("01.01.2024"), bought: true, comment: "haltbare"},
        { menge: 500, einheit: "Gramm", name: "Brot", lastbought: new Date("01.01.2024"), bought: true, comment: "schwenninger Laib"},
        { menge: 20, einheit: "Stück", name: "Eier", lastbought: new Date("01.01.2024"), bought: true, comment: "bodenhaltung"}
    ];
}