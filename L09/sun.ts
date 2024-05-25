// Sun.ts
namespace Ententeich {
    export class Sun {
        x: number;
        y: number;
        radius: number;
        angle: number;

        constructor(x: number, y: number, radius: number) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.angle = 0;
        }

        move(): void {
            this.angle += 0.01;
        }

        draw(): void {
            let sunX = this.x + Math.cos(this.angle) * this.radius * 2;
            let sunY = this.y + Math.sin(this.angle) * this.radius;

            crc2.beginPath();
            crc2.arc(sunX, sunY, this.radius, 0, Math.PI * 2);
            crc2.closePath();

            crc2.fillStyle = "yellow";
            crc2.fill();

            let lineLength = 20;
            crc2.strokeStyle = "yellow";
            for (let i = 0; i < 8; i++) {
                let angle = (i / 8) * (2 * Math.PI);
                let startX = sunX + this.radius * Math.cos(angle);
                let startY = sunY + this.radius * Math.sin(angle);
                let endX = startX + lineLength * Math.cos(angle);
                let endY = startY + lineLength * Math.sin(angle);
                crc2.beginPath();
                crc2.moveTo(startX, startY);
                crc2.lineTo(endX, endY);
                crc2.stroke();
                crc2.closePath();
            }
        }
    }
}
