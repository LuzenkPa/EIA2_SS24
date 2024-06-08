// sun.ts
namespace Testenten {
    export class Sun implements Drawable {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.x, this.y);

            // Sonnenkreis
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(0, 0, 40, 0, Math.PI * 2);
            crc2.fill();

            // Sonnenstrahlen
            crc2.strokeStyle = "yellow";
            for (let i = 0; i < 8; i++) {
                let angle: number = (i / 8) * (2 * Math.PI);
                let startX: number = 40 * Math.cos(angle);
                let startY: number = 40 * Math.sin(angle);
                let endX: number = (40 + 20) * Math.cos(angle);
                let endY: number = (40 + 20) * Math.sin(angle);
                crc2.beginPath();
                crc2.moveTo(startX, startY);
                crc2.lineTo(endX, endY);
                crc2.stroke();
            }

            crc2.restore();
        }
    }
}
