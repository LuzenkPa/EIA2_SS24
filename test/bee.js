"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moveable_1 = require("./moveable"); // Hier wurde der korrekte Import hinzugefügt
var Teste;
(function (Teste) {
    class Bee extends moveable_1.Moveable {
        constructor(x, y, velocity) {
            super(x, y, velocity);
        }
        draw() {
            crc2.fillStyle = "#FFD700"; // Gelb
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            crc2.fill();
            crc2.fillStyle = "#000000"; // Schwarz
            crc2.beginPath();
            crc2.arc(this.x - 2, this.y - 2, 1, 0, Math.PI * 2);
            crc2.fill();
        }
    }
    Teste.Bee = Bee;
})(Teste || (Teste = {}));
//# sourceMappingURL=bee.js.map