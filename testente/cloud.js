"use strict";
var Testente;
(function (Testente) {
    class Cloud {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += 1;
            if (this.x > Testente.crc2.canvas.width) {
                this.x = -50;
            }
        }
        draw() {
            Testente.crc2.fillStyle = "#FFFFFF"; // Weiß
            Testente.crc2.beginPath();
            Testente.crc2.arc(this.x, this.y, 30, Math.PI * 0.5, Math.PI * 1.5);
            Testente.crc2.arc(this.x + 30, this.y - 20, 30 * 0.6, Math.PI * 1, Math.PI * 2);
            Testente.crc2.arc(this.x + 60, this.y, 30, Math.PI * 1.5, Math.PI * 0.5);
            Testente.crc2.closePath();
            Testente.crc2.fill();
        }
    }
    Testente.Cloud = Cloud;
})(Testente || (Testente = {}));
//# sourceMappingURL=cloud.js.map