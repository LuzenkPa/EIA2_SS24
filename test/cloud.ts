import { Moveable } from './moveable';

namespace Teste {
    export class Cloud extends Moveable {
        constructor(x: number, y: number, velocity: Vector) {
            super(x, y, velocity);
        }

        draw(): void {
            crc2.fillStyle = "#FFFFFF"; // Weiß
            crc2.beginPath();
            crc2.arc(this.x, this.y, 30, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(this.x + 30, this.y - 20, 30 * 0.6, Math.PI * 1, Math.PI * 2);
            crc2.arc(this.x + 60, this.y, 30, Math.PI * 1.5, Math.PI * 0.5);
            crc2.closePath();
            crc2.fill();
        }
    }
}
