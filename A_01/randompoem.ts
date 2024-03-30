namespace NicoKontrolliert {

    let subject: string[] = ["Nico", "Jirka", "Oxford", "Gnar", "Markus"];
    let predicate: string[] = ["kontrolliert", "unalived", "gapclosed", "brummt", "liebt"];
    let object: string[] = ["Fahrkarten", "Blaupausen", "Knochen", "Konzepteris", "Stühle"];

    console.log(subject, predicate, object)
    for (let i = subject.length; i >= 1; i--) {
        console.log(i)
    }
    function getVerse(_subject:string, _predicate:string, _object:string){
        return _subject
    }
}


