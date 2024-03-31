"use strict";
var randompoem;
(function (randompoem) {
    let subject = ["Nico", "Jirka", "Oxford", "Gnar", "Markus"];
    let predicate = [" kontrolliert ", " unalived ", " gapclosed ", " brummt ", " liebt "];
    let object = ["Fahrkarten", "Blaupausen", "La Vida Loca", "Konzepteris", "Stühle"];
    debugger;
    for (let i = subject.length; i >= 1; i--) {
        let word = getVerse(subject, predicate, object);
        console.log(word);
    }
    function getVerse(_subject, _predicate, _object) {
        let sentence = "";
        let onesubject = Math.floor(Math.random() * _subject.length);
        let onepredicate = Math.floor(Math.random() * _predicate.length);
        let oneobject = Math.floor(Math.random() * _object.length);
        sentence = _subject.splice(oneobject, 1)[0] + _predicate.splice(onepredicate, 1)[0] + _object.splice(oneobject, 1)[0];
        return sentence;
    }
})(randompoem || (randompoem = {}));
//# sourceMappingURL=randompoem.js.map