namespace Testente {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let clouds: Cloud[] = [];
    let yellowDucks: Duck[] = [];
    let brownDucks: Duck[] = [];
    let bees: Bee[] = [];
    let background: ImageData;
    let sunAngle: number = 0;

    class Duck {
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
                // Gelbe Enten bewegen sich im Teich
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;
                if (Math.random() < 0.01) {
                    this.y += 30; // Taucht kurz ab
                }

                // Begrenzt die gelben Enten auf den Teichbereich
                let pondX = crc2.canvas.width / 2;
                let pondY = crc2.canvas.height * 0.7;
                let pondRadiusX = 200;
                let pondRadiusY = 75;
                if ((this.x - pondX) ** 2 / pondRadiusX ** 2 + (this.y - pondY) ** 2 / pondRadiusY ** 2 > 1) {
                    this.x = pondX;
                    this.y = pondY;
                }
            } else {
                // Braune Enten bewegen sich um den Teich herum
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;

                // Begrenzt die braunen Enten auf den Bereich um den Teich herum
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

    class Bee {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        move(): void {
            this.x += Math.random() * 4 - 2; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 4 - 2; // Zufällige Bewegung nach oben und unten

            if (this.x < 0) this.x = crc2.canvas.width;
            if (this.y < 0) this.y = crc2.canvas.height;
            if (this.x > crc2.canvas.width) this.x = 0;
            if (this.y > crc2.canvas.height) this.y = 0;
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

    class Cloud {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        move(): void {
            this.x += 1;
            if (this.x > crc2.canvas.width) {
                this.x = -50;
            }
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



    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        // Gelbe Enten im Teich generieren
        for (let i: number = 0; i < 3; i++) {
            let duck: Duck = new Duck(350 + Math.random() * 50, 400 + Math.random() * 50, "#FFFF00", true);
            yellowDucks.push(duck);
        }

        // Braune Enten draußen generieren
        for (let i: number = 0; i < 3; i++) {
            let duck: Duck = new Duck(350 + Math.random() * 50, 550, "#8B4513", false);
            brownDucks.push(duck);
        }

        // Wolken generieren
        for (let i: number = 0; i < 5; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }

        // Bienen generieren
        for (let i: number = 0; i < 5; i++) {
            let bee: Bee = new Bee(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
            bees.push(bee);
        }

        // Animation starten
        window.setInterval(update, 20);
    }

    function drawBackground(): void {
        // Wiese
        crc2.fillStyle = "#90E162";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        // Himmel
        crc2.fillStyle = "#48BCE1";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height * 0.4);

        // Sonne
        crc2.save();
        crc2.translate(50, 50);
        drawSun();
        crc2.restore();

        // See
        crc2.fillStyle = "#4676E0";
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width / 2, crc2.canvas.height * 0.7, 150, 60, 0, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        // Baum links vom Teich
        drawTree(150, crc2.canvas.height * 0.7);
    }

    function drawTree(x: number, y: number): void {
        crc2.save();
        crc2.translate(x, y);

        // Stamm
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(-10, 0, 20, 50);

        // Blätter
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.ellipse(0, -20, 35, 60, 0, 0, 2 * Math.PI);
        crc2.ellipse(0, -50, 30, 50, 0, 0, 2 * Math.PI);
        crc2.ellipse(0, -70, 25, 40, 0, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.restore();
    }

    function drawSun(): void {
        crc2.save();
        crc2.translate(0, 0);

        // Sonnenkreis
        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.arc(0, 0, 40, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();

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

    function update(): void {
        crc2.putImageData(background, 0, 0);

        // Sonne drehen
        sunAngle += 0.01; // Drehgeschwindigkeit
        crc2.save();
        crc2.translate(50, 50); // Verschieben zum Mittelpunkt der Sonne
        crc2.rotate(sunAngle);
        drawSun();
        crc2.restore();

        for (let cloud of clouds) {
            cloud.move();
            cloud.draw();
        }
        for (let duck of yellowDucks) {
            duck.move();
            duck.draw();
        }
        for (let duck of brownDucks) {
            duck.move();
            duck.draw();
        }
        for (let bee of bees) {
            bee.move();
            bee.draw();
        }
    }
}
