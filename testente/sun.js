"use strict";
var Testente;
(function (Testente) {
    class Sun {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        draw() {
            Testente.crc2.save();
            Testente.crc2.translate(this.x, this.y); // Verschieben zum Mittelpunkt der Sonne
            // Sonnenkreis
            Testente.crc2.fillStyle = "yellow";
            Testente.crc2.beginPath();
            Testente.crc2.arc(0, 0, 40, 0, Math.PI * 2);
            Testente.crc2.fill();
            // Sonnenstrahlen
            Testente.crc2.strokeStyle = "yellow";
            for (let i = 0; i < 8; i++) {
                let angle = (i / 8) * (2 * Math.PI);
                let startX = 40 * Math.cos(angle);
                let startY = 40 * Math.sin(angle);
                let endX = (40 + 20) * Math.cos(angle);
                let endY = (40 + 20) * Math.sin(angle);
                Testente.crc2.beginPath();
                Testente.crc2.moveTo(startX, startY);
                Testente.crc2.lineTo(endX, endY);
                Testente.crc2.stroke();
            }
            Testente.crc2.restore();
        }
    }
    Testente.Sun = Sun;
})(Testente || (Testente = {}));
//# sourceMappingURL=sun.js.map