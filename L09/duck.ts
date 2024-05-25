// Duck.ts
namespace Ententeich {
    export class Duck {
        x: number;
        y: number;
        color: string;
        inPond: boolean;

        constructor(x: number, y: number, color: string, inPond: boolean) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.inPond = inPond;
        }

        move(): void {
            if (this.inPond) {
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;
                if (Math.random() < 0.01) {
                    this.y += 30; // Duck briefly dives
                }

                let pondX = crc2.canvas.width / 2;
                let pondY = crc2.canvas.height * 0.7;
                let pondRadiusX = 200;
                let pondRadiusY = 75;
                if ((this.x - pondX) ** 2 / pondRadiusX ** 2 + (this.y - pondY) ** 2 / pondRadiusY ** 2 > 1) {
                    this.x = pondX;
                    this.y = pondY;
                }
            } else {
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;

                let pondX = crc2.canvas.width / 2;
                let pondY = crc2.canvas.height * 0.7;
                let pondRadiusX = 250;
                let pondRadiusY = 100;
                if ((this.x - pondX) ** 2 / pondRadiusX ** 2 + (this.y - pondY) ** 2 / pondRadiusY ** 2 < 1) {
                    this.x = crc2.canvas.width / 2 - pondRadiusX - 10;
                    this.y = pondY + pondRadiusY + 10;
                }
            }
        }

        draw(): void {
            if (this.color === "#8B4513") {
                crc2.fillStyle = "#FFA500";
                crc2.beginPath();
                crc2.moveTo(this.x - 5, this.y + 12);
                crc2.lineTo(this.x - 10, this.y + 18);
                crc2.lineTo(this.x + 10, this.y + 18);
                crc2.lineTo(this.x + 5, this.y + 12);
                crc2.fill();
            }

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.ellipse(this.x, this.y, 20, 12, Math.PI / 2, 0, Math.PI * 2);
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 10, 10, 0, Math.PI * 2);
            crc2.fill();

            crc2.fillStyle = "#FFA500";
            crc2.beginPath();
            crc2.moveTo(this.x + 35, this.y - 10);
            crc2.lineTo(this.x + 45, this.y - 5);
            crc2.lineTo(this.x + 35, this.y);
            crc2.closePath();
            crc2.fill();

            crc2.fillStyle = "#CCCCCC";
            crc2.beginPath();
            crc2.ellipse(this.x - 10, this.y - 5, 10, 5, Math.PI / 4, 0, Math.PI * 2);
            crc2.fill();
        }
    }
}

