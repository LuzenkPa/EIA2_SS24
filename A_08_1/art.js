"use strict";
var kunst;
(function (kunst) {
    // Event-Listener für das Laden der Seite
    window.addEventListener("load", handleLoad);
    // Globale Variable für den Canvas-Kontext
    let zeichenflaeche;
    // Funktion, die aufgerufen wird, wenn die Seite geladen wurde
    function handleLoad(_event) {
        // Canvas-Element aus dem DOM auswählen
        let leinwand = document.querySelector("canvas");
        // Überprüfen, ob das Canvas-Element existiert
        if (!leinwand)
            return;
        // Canvas-Kontext abrufen
        zeichenflaeche = leinwand.getContext("2d");
        // Funktion zum Zeichnen des Bildes aufrufen
        bildErstellen();
    }
    // Funktion zum Erstellen des Bildes
    function bildErstellen() {
        // Canvas-Größe abrufen
        const breite = zeichenflaeche.canvas.width;
        const hoehe = zeichenflaeche.canvas.height;
        // Hintergrund des Canvas zeichnen (schwarz)
        zeichenflaeche.fillStyle = "#000000"; // Schwarz
        zeichenflaeche.fillRect(0, 0, breite, hoehe);
        // Zufällige Positionen für die Kreise oben und unten berechnen
        const kreisRadius = 50;
        const kreisX = breite / 2;
        const kreisYOben = Math.random() * hoehe / 4 + 50;
        const kreisYUnten = Math.random() * hoehe / 4 + (3 * hoehe) / 4;
        // Kreise oben und unten zeichnen (weiß)
        kreisZeichnen(kreisX, kreisYOben, kreisRadius);
        kreisZeichnen(kreisX, kreisYUnten, kreisRadius);
        // Spirale zeichnen
        zeichenflaeche.lineWidth = 2;
        const mittelpunktX = breite / 2;
        const mittelpunktY = hoehe / 2;
        const anzahlSchleifen = Math.floor(Math.random() * 6) + 2; // Zufällige Anzahl von Schleifen (mindestens 2)
        const anzahlSegmenteProSchleife = 200; // Anzahl der Segmente für die Spirale
        const maximalerRadius = Math.min(breite, hoehe) * 0.6; // Maximaler Radius der Spirale
        const winkelZuwachs = Math.PI * 2 / anzahlSegmenteProSchleife;
        const farbZuwachs = 255 / (anzahlSchleifen * anzahlSegmenteProSchleife);
        // Schleife über die Anzahl der Schleifen (Loops)
        for (let i = 0; i < anzahlSchleifen; i++) {
            // Schleife über die Anzahl der Segmente pro Schleife
            for (let j = 0; j < anzahlSegmenteProSchleife; j++) {
                // Winkel und Radius für den aktuellen Punkt berechnen
                const winkel = i * anzahlSegmenteProSchleife * winkelZuwachs + j * winkelZuwachs;
                const radius = (i * maximalerRadius) / anzahlSchleifen;
                // Koordinaten für den aktuellen Punkt berechnen
                const x = mittelpunktX + Math.cos(winkel) * radius;
                const y = mittelpunktY + Math.sin(winkel) * radius;
                // Grauwert für die Farbe des aktuellen Punkts berechnen
                const farbwert = 255 - i * anzahlSegmenteProSchleife * farbZuwachs - j * farbZuwachs;
                const farbe = `rgb(${farbwert}, ${farbwert}, ${farbwert})`;
                // Linie zum aktuellen Punkt zeichnen
                linieZeichnen(mittelpunktX, mittelpunktY, x, y, farbe);
            }
        }
    }
    // Funktion zum Zeichnen eines Kreises
    function kreisZeichnen(x, y, radius) {
        // Kreis mit weißer Farbe zeichnen
        zeichenflaeche.strokeStyle = "#ffffff"; // Weiß
        zeichenflaeche.beginPath();
        zeichenflaeche.arc(x, y, radius, 0, 2 * Math.PI);
        zeichenflaeche.stroke();
    }
    // Funktion zum Zeichnen einer Linie
    function linieZeichnen(startX, startY, endX, endY, farbe) {
        // Linie mit der angegebenen Farbe zeichnen
        zeichenflaeche.strokeStyle = farbe;
        zeichenflaeche.beginPath();
        zeichenflaeche.moveTo(startX, startY);
        zeichenflaeche.lineTo(endX, endY);
        zeichenflaeche.stroke();
    }
})(kunst || (kunst = {}));
//# sourceMappingURL=art.js.map