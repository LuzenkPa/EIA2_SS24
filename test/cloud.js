"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moveable_1 = require("./moveable");
var Teste;
(function (Teste) {
    class Cloud extends moveable_1.Moveable {
        constructor(x, y, velocity) {
            super(x, y, velocity);
        }
        draw() {
            crc2.fillStyle = "#FFFFFF"; // Weiß
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(this.x + 30, this.y - 20, 30 * 0.6, Math.PI * 1, Math.PI * 2);
            crc2.arc(this.x + 60, this.y, 30, Math.PI * 1.5, Math.PI * 0.5);
            crc2.closePath();
            crc2.fill();
        }
    }
    Teste.Cloud = Cloud;
})(Teste || (Teste = {}));
//# sourceMappingURL=cloud.js.map