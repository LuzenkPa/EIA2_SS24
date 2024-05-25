namespace Ententeich {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let clouds: Cloud[] = [];
    let yellowDucks: Duck[] = [];
    let brownDucks: Duck[] = [];
    let bees: Bee[] = [];
    let insects: Insect[] = [];
    let background: ImageData;
    let sunAngle: number = 0;

    class Duck {
        x: number;
        y: number;
        radius: number;
        color: string;

        constructor(x: number, y: number, radius: number, color: string) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }

        move(): void {
            if (this.color === "#FFFF00") {
                // Gelbe Enten bewegen sich im Teich
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;

                if (Math.random() < 0.01) {
                    this.y += 30; // Taucht kurz ab
                }
            } else {
                // Braune Enten bewegen sich im Vordergrund vor dem Teich
                this.x += Math.random() * 4 - 2;
                this.y += Math.random() * 2; // Nur nach unten bewegen
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fill();

            // Kopf der Ente
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 10, this.radius / 3, 0, Math.PI * 2);
            crc2.fill();

            // Schnabel der Ente
            crc2.fillStyle = "#FFA500"; // Orange
            crc2.beginPath();
            crc2.moveTo(this.x + 35, this.y - 10);
            crc2.lineTo(this.x + 50, this.y - 10);
            crc2.lineTo(this.x + 35, this.y);
            crc2.closePath();
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

    class Insect {
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
            crc2.fillStyle = "#000000"; // Schwarz
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
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
            let duck: Duck = new Duck(350 + Math.random() * 50, 400 + Math.random() * 50, 20, "#FFFF00");
            yellowDucks.push(duck);
        }

        // Braune Enten draußen generieren
        for (let i: number = 0; i < 3; i++) {
            let duck: Duck = new Duck(350 + Math.random() * 50, 550, 20, "#8B4513");
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

        window.setInterval(update, 20);
    }

    function drawBackground(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.2, "#87CEEB"); // Himmelblau
        gradient.addColorStop(0.8, "#F5F5DC"); // Sandbeige

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawMountains();
        drawPond();
        drawSun();
    }

    function drawMountains(): void {
        crc2.fillStyle = "#D3D3D3"; // Leichtes Grau
        crc2.beginPath();
        crc2.moveTo(800, 100); // Startpunkt oben rechts
        crc2.lineTo(600, 400); // Linker Punkt
        crc2.lineTo(1000, 400); // Rechter Punkt
        crc2.closePath();
        crc2.fill();
    }

    function drawPond(): void {
        crc2.fillStyle = "#6495ED"; // Blau
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width / 2, crc2.canvas.height * 0.7, 400, 150, 0, 0, Math.PI * 2);
        crc2.fill();
    }

    function drawSun(): void {
        crc2.save();
        crc2.translate(50, 50); // Verschieben zum Mittelpunkt der Sonne

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
