"use strict";
// Bee.ts
var Ententeich;
(function (Ententeich) {
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
                this.x = Ententeich.crc2.canvas.width;
            if (this.y < 0)
                this.y = Ententeich.crc2.canvas.height;
            if (this.x > Ententeich.crc2.canvas.width)
                this.x = 0;
            if (this.y > Ententeich.crc2.canvas.height)
                this.y = 0;
        }
        draw() {
            Ententeich.crc2.fillStyle = "#FFD700"; // Gelb
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            Ententeich.crc2.fill();
        }
    }
    Ententeich.Bee = Bee;
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=bee.js.map