import { Moveable } from './moveable';

namespace Teste {
    export class Duck extends Moveable {
        color: string;

        constructor(x: number, y: number, velocity: Vector, color: string) {
            super(x, y, velocity);
            this.color = color;
        }

        draw(): void {
            // Füße der braunen Ente
            if (this.color === "#8B4513") {
                crc2.fillStyle = "#FFA500";
                crc2.beginPath();
                crc2.moveTo(this.x - 5, this.y + 12);
                crc2.lineTo(this.x - 10, this.y + 18);
                crc2.lineTo(this.x + 10, this.y + 18);
                crc2.lineTo(this.x + 5, this.y + 12);
                crc2.fill();
            }

            // Körper der Ente
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.ellipse(this.x, this.y, 20, 12, Math.PI / 2, 0, Math.PI * 2);
            crc2.fill();

            // Kopf der Ente
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 10, 10, 0, Math.PI * 2);
            crc2.fill();

            // Schnabel der Ente
            crc2.fillStyle = "#FFA500"; // Orange
            crc2.beginPath();
            crc2.moveTo(this.x + 35, this.y - 10);
            crc2.lineTo(this.x + 45, this.y - 5);
            crc2.lineTo(this.x + 35, this.y);
            crc2.closePath();
            crc2.fill();

            // Flügel der Ente
            crc2.fillStyle = "#CCCCCC"; // Hellgrau für den Flügel
            crc2.beginPath();
            crc2.ellipse(this.x - 10, this.y - 5, 10, 5, Math.PI / 4, 0, Math.PI * 2);
            crc2.fill();
        }
    }
}
