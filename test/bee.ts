import { Moveable } from './moveable'; // Hier wurde der korrekte Import hinzugefügt

namespace Teste {
    export class Bee extends Moveable {
        constructor(x: number, y: number, velocity: Vector) {
            super(x, y, velocity);
        }

        draw(): void {
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
}

