// Cloud.ts
namespace Ententeich {
    export class Cloud {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        move(): void {
            this.x += 1;
            if (this.x > crc2.canvas.width) this.x = -50;
        }

        draw(): void {
            crc2.fillStyle = "#FFFFFF";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, Math.PI * 2);
            crc2.arc(this.x + 40, this.y, 25, 0, Math.PI * 2);
            crc2.arc(this.x + 80, this.y, 20, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
        }
    }
}

