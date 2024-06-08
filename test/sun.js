"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Teste;
(function (Teste) {
    class Sun {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        draw() {
            crc2.save();
            crc2.translate(this.x, this.y); // Verschieben zum Mittelpunkt der Sonne
            // Sonnenkreis
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(0, 0, 40, 0, Math.PI * 2);
            crc2.fill();
            // Sonnenstrahlen
            crc2.strokeStyle = "yellow";
            for (let i = 0; i < 8; i++) {
                let angle = (i / 8) * (2 * Math.PI);
                let startX = 40 * Math.cos(angle);
                let startY = 40 * Math.sin(angle);
                let endX = (40 + 20) * Math.cos(angle);
                let endY = (40 + 20) * Math.sin(angle);
                crc2.beginPath();
                crc2.moveTo(startX, startY);
                crc2.lineTo(endX, endY);
                crc2.stroke();
            }
            crc2.restore();
        }
    }
    Teste.Sun = Sun;
})(Teste || (Teste = {}));
//# sourceMappingURL=sun.js.map