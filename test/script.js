"use strict";
var Teste;
(function (Teste) {
    // Hauptprogramm für die Animation
    let objects = []; // Array für alle bewegbaren Objekte
    let background;
    let sun;
    window.addEventListener("load", handleLoad);
    // Initialisierung der Anwendung
    function handleLoad(_event) {
        // Initialisierung des Canvas und Zeichnung des Hintergrunds
    }
    // Hintergrund zeichnen
    function drawBackground() {
        // Zeichenroutine für den Hintergrund
    }
    // Aktualisierung der Animation
    function update() {
        // Hintergrund neu zeichnen
        crc2.putImageData(background, 0, 0);
        // Objekte aktualisieren und zeichnen
        for (let object of objects) {
            object.move();
            object.draw();
        }
    }
})(Teste || (Teste = {}));
//# sourceMappingURL=script.js.map