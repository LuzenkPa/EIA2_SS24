"use strict";
// bee.ts
var Testenten;
(function (Testenten) {
    class Bee {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            // Zufällige Bewegung nach links und rechts
            this.x += Math.random() * 4 - 2;
            // Zufällige Bewegung nach oben und unten
            this.y += Math.random() * 4 - 2;
            // Überprüfen und Anpassen der Position, um im Canvas zu bleiben
            if (this.x < 0)
                this.x = Testenten.crc2.canvas.width;
            if (this.y < 0)
                this.y = Testenten.crc2.canvas.height;
            if (this.x > Testenten.crc2.canvas.width)
                this.x = 0;
            if (this.y > Testenten.crc2.canvas.height)
                this.y = 0;
        }
        draw() {
            // Zeichnen des gelben Körpers der Biene
            Testenten.crc2.fillStyle = "#FFD700"; // Gelb
            Testenten.crc2.beginPath();
            Testenten.crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            Testenten.crc2.fill();
            // Zeichnen des schwarzen Kopfes der Biene
            Testenten.crc2.fillStyle = "#000000"; // Schwarz
            Testenten.crc2.beginPath();
            Testenten.crc2.arc(this.x - 2, this.y - 2, 1, 0, Math.PI * 2);
            Testenten.crc2.fill();
        }
    }
    Testenten.Bee = Bee;
})(Testenten || (Testenten = {}));
//# sourceMappingURL=bee.js.map