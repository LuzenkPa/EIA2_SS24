namespace randompoem {
    let subject: string[] = ["Nico", "Jirka", "Oxford", "Gnar", "Markus"];
    let predicate: string[] = [" kontrolliert ", " unalived ", " gapclosed ", " brummt ", " liebt "];
    let object: string[] = ["Fahrkarten", "Blaupausen", "La Vida Loca", "Konzepteris", "Stühle"];
    debugger;
    for (let i: number = 5; i >= 1; i--) {
        let word: string = getVerse(subject, predicate, object);
        console.log(word);
    }
    function getVerse(_subject: string[], _predicate: string[], _object: string[]) {
        let sentence: string = "";
        let onesubject: number = Math.floor(Math.random() * _subject.length);
        let onepredicate: number = Math.floor(Math.random() * _predicate.length);
        let oneobject: number = Math.floor(Math.random() * _object.length);
        sentence = _subject.splice(onesubject, 1)[0] + _predicate.splice(onepredicate, 1)[0] + _object.splice(oneobject, 1)[0];
        return sentence;
    }
}


