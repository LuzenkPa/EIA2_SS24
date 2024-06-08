"use strict";
// sun.ts
var Testenten;
(function (Testenten) {
    class Sun {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        draw() {
            Testenten.crc2.save();
            Testenten.crc2.translate(this.x, this.y);
            // Sonnenkreis
            Testenten.crc2.fillStyle = "yellow";
            Testenten.crc2.beginPath();
            Testenten.crc2.arc(0, 0, 40, 0, Math.PI * 2);
            Testenten.crc2.fill();
            // Sonnenstrahlen
            Testenten.crc2.strokeStyle = "yellow";
            for (let i = 0; i < 8; i++) {
                let angle = (i / 8) * (2 * Math.PI);
                let startX = 40 * Math.cos(angle);
                let startY = 40 * Math.sin(angle);
                let endX = (40 + 20) * Math.cos(angle);
                let endY = (40 + 20) * Math.sin(angle);
                Testenten.crc2.beginPath();
                Testenten.crc2.moveTo(startX, startY);
                Testenten.crc2.lineTo(endX, endY);
                Testenten.crc2.stroke();
            }
            Testenten.crc2.restore();
        }
    }
    Testenten.Sun = Sun;
})(Testenten || (Testenten = {}));
//# sourceMappingURL=sun.js.map