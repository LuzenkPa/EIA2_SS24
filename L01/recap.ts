let v: number = 7;
v = v + 1;
console.log(v);

interface Liste {
    Einheit: { [menge: number]: string };
    item: string;
    datum: Date;
    comment: string;
}

let Einkaufsliste: Liste[] = [];
Einkaufsliste.push({ Einheit: { 1.5: "L" }, item: "Milch", datum: new Date, comment: "für den Kuchen am Wochenende" });

let v1: string, number;
let v2: string;
v1 = "hohi";
v2 = v1;
console.log(v1, v2);


interface pick {
    champion: string;
    herkunft: string;
    alter: number;
}

interface ability {
    q: string;
    w: string;
    e: string;
    r: string;
}

interface type {
    damage: string;
    range: number;
    difficulty: ability[];
    pick: pick;
}

let queue: type = {
    damage: "ad",
    range: 4,
    pick: {
        champion: "Garen",
        herkunft: "Demacia",
        alter: 44
    },
    difficulty: [
        {
            q: "schwertschlag",
            w: "schwertstich",
            e: "schwertschwinger",
            r: "schwertschwert"
        },
        {
            q: "Decisive Strike",
            w: "Courage",
            e: "Judgment",
            r: "Demacian Justice"
        }
    ],
    
}
let v3: {name: string, age:number};
let v4: {name:string, age:number};

v3= {name:"halle",age:7};
v4=v3;
console.log(v3,v4);