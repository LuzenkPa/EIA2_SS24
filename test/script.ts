namespace Teste {
    // Hauptprogramm für die Animation
    let objects: Moveable[] = []; // Array für alle bewegbaren Objekte
    let background: ImageData;
    let sun: Sun;

    window.addEventListener("load", handleLoad);

    // Initialisierung der Anwendung
    function handleLoad(_event: Event): void {
        // Initialisierung des Canvas und Zeichnung des Hintergrunds
    }

    // Hintergrund zeichnen
    function drawBackground(): void {
        // Zeichenroutine für den Hintergrund
    }

    // Aktualisierung der Animation
    function update(): void {
        // Hintergrund neu zeichnen
        crc2.putImageData(background, 0, 0);

        // Objekte aktualisieren und zeichnen
        for (let object of objects) {
            object.move();
            object.draw();
        }
    }
}
