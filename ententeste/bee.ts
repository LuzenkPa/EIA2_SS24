// bee.ts
namespace Testenten {
    export class Bee implements Drawable, Moveable {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        move(): void {
            // Zufällige Bewegung nach links und rechts
            this.x += Math.random() * 4 - 2;
            // Zufällige Bewegung nach oben und unten
            this.y += Math.random() * 4 - 2;

            // Überprüfen und Anpassen der Position, um im Canvas zu bleiben
            if (this.x < 0) this.x = crc2.canvas.width;
            if (this.y < 0) this.y = crc2.canvas.height;
            if (this.x > crc2.canvas.width) this.x = 0;
            if (this.y > crc2.canvas.height) this.y = 0;
        }

        draw(): void {
            // Zeichnen des gelben Körpers der Biene
            crc2.fillStyle = "#FFD700"; // Gelb
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            crc2.fill();

            // Zeichnen des schwarzen Kopfes der Biene
            crc2.fillStyle = "#000000"; // Schwarz
            crc2.beginPath();
            crc2.arc(this.x - 2, this.y - 2, 1, 0, Math.PI * 2);
            crc2.fill();
        }
    }
}

