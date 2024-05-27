"use strict";
var Testente;
(function (Testente) {
    class Bee {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += Math.random() * 4 - 2; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 4 - 2; // Zufällige Bewegung nach oben und unten
            if (this.x < 0)
                this.x = Testente.crc2.canvas.width;
            if (this.y < 0)
                this.y = Testente.crc2.canvas.height;
            if (this.x > Testente.crc2.canvas.width)
                this.x = 0;
            if (this.y > Testente.crc2.canvas.height)
                this.y = 0;
        }
        draw() {
            Testente.crc2.fillStyle = "#FFD700"; // Gelb
            Testente.crc2.beginPath();
            Testente.crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            Testente.crc2.fill();
            Testente.crc2.fillStyle = "#000000"; // Schwarz
            Testente.crc2.beginPath();
            Testente.crc2.arc(this.x - 2, this.y - 2, 1, 0, Math.PI * 2);
            Testente.crc2.fill();
        }
    }
    Testente.Bee = Bee;
})(Testente || (Testente = {}));
//# sourceMappingURL=bee.js.map