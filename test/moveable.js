"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Teste;
(function (Teste) {
    class Moveable {
        x;
        y;
        velocity;
        constructor(x, y, velocity) {
            this.x = x;
            this.y = y;
            this.velocity = velocity;
        }
        move() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        }
    }
    Teste.Moveable = Moveable;
})(Teste || (Teste = {}));
//# sourceMappingURL=moveable.js.map