// duck.ts
namespace Testenten {
    export class Duck implements Drawable, Moveable {
        x: number;
        y: number;
        color: string;
        inPond: boolean;
        speed: number;
        angle: number;

        constructor(x: number, y: number, color: string, inPond: boolean, speed: number) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.inPond = inPond;
            this.speed = speed;
            this.angle = Math.random() * Math.PI * 2; // Zufälliger Startwinkel für die Bewegung im Kreis
        }

        move(): void {
            if (this.inPond) {
                // Gelbe Enten bewegen sich im Teich im Kreis
                let pondX = crc2.canvas.width / 2;
                let pondY = crc2.canvas.height * 0.7;
                let pondRadiusX = 150;
                let pondRadiusY = 60;
                this.angle += this.speed; // Winkel erhöhen für kontinuierliche Bewegung im Kreis
                this.x = pondX + Math.cos(this.angle) * pondRadiusX;
                this.y = pondY + Math.sin(this.angle) * pondRadiusY;
            } else {
                // Braune Enten verfolgen spezifische Bewegungsmuster
                if (this.color === "#8B4513") {
                    // Braune Enten am Baum laufen entlang
                    this.x += this.speed;
                    this.y = crc2.canvas.height * 0.7 - 80; // Konstante Y-Position am Baum
                    if (this.x > crc2.canvas.width) this.x = -50; // Zurücksetzen am Bildrand
                } else if (this.color === "#A0522D") {
                    // Braune Enten laufen durch das Bild und kommen auf der anderen Seite wieder heraus
                    this.x += this.speed;
                    this.y = crc2.canvas.height * 0.5; // Konstante Y-Position mittig
                    if (this.x > crc2.canvas.width) this.x = -50; // Zurücksetzen am Bildrand
                } else {
                    // Freie Bewegung für andere Enten
                    this.x += this.speed;
                    this.y += Math.sin(this.x / 20) * 2; // Sinus-Bewegung
                    if (this.x > crc2.canvas.width) this.x = -50; // Zurücksetzen am Bildrand
                }
            }
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
