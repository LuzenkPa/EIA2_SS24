namespace Ententeich {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let clouds: Cloud[] = [];
    let ducks: Duck[] = [];
    let tails: Tail[] = [];
    let flamingos: Flamingo[] = [];
    let ladybugs: Ladybug[] = [];
    let insects: Insect[] = [];
    let background: ImageData;

    class Duck {
        x: number;
        y: number;
        radius: number;

        constructor(x: number, y: number, radius: number) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }

        move(): void {
            this.x += Math.random() * 4 - 2; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 2 - 1; // Zufällige Bewegung nach oben und unten

            if (Math.random() < 0.01) {
                this.y += 30; // Taucht kurz ab
            }
        }

        draw(): void {
            // Körper der Ente
            crc2.fillStyle = "#FFA500"; // Orange
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            crc2.fill();

            // Kopf der Ente
            crc2.fillStyle = "#FFA500"; // Orange
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

    class Tail {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        move(): void {
            this.x += Math.random() * 2 - 1; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 2 - 1; // Zufällige Bewegung nach oben und unten
        }

        draw(): void {
            crc2.fillStyle = "#FFA500"; // Orange
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, Math.PI * 2);
            crc2.fill();
        }
    }

    class Flamingo {
        x: number;
        y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        move(): void {
            this.x += Math.random() * 2 - 1; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 2 - 1; // Zufällige Bewegung nach oben und unten
        }

        draw(): void {
            crc2.fillStyle = "#FFC0CB"; // Pink
            crc2.beginPath();
            crc2.ellipse(this.x, this.y, 15, 30, Math.PI / 4, 0, Math.PI * 2);
            crc2.fill();
        }
    }

    class Ladybug {
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
            crc2.fillStyle = "#FF0000"; // Rot
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, Math.PI * 2);
            crc2.fill();

            crc2.fillStyle = "#000000"; // Schwarz
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, Math.PI * 2);
            crc2.fill();
        }
    }

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        // Ladybugs generieren
        for (let i: number = 0; i < 5; i++) {
            let randomX: number = Math.random() * canvas.width;
            let randomY: number = Math.random() * canvas.height;
            let ladybug: Ladybug = new Ladybug(randomX, randomY);
            ladybugs.push(ladybug);
        }

        // Clouds random auf x und y zeichnen
        for (let i: number = 0; i < 5; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }

        // Tails generieren
        for (let i: number = 0; i < 3; i++) {
            let tail: Tail = new Tail(350 + Math.random() * 50, 330 + Math.random() * 80);
            tails.push(tail);
        }

        // Ducks generieren
        for (let i: number = 0; i < 3; i++) {
            let duck: Duck = new Duck(350 + Math.random() * 50, 400 + Math.random() * 50, 20);
            ducks.push(duck);
        }

        // Flamingos generieren
        for (let i: number = 0; i < 4; i++) {
            let randomX: number = 10 + Math.random() * 250;
            let randomY: number = 300 + Math.random() * 250;
            let flamingo: Flamingo = new Flamingo(randomX, randomY);
            flamingos.push(flamingo);
        }

        // Insekten generieren
        for (let i: number = 0; i < 10; i++) {
            let insect = new Insect(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
            insects.push(insect);
        }

        setInterval(animate, 20);
    }

    function drawBackground(): void {
        fillBackground();
        sun();
        lake();
        mountain();
        bush(100, 320);
        bush(300, 300);
        bush(460, 320);
        drawTree();
    }

    function drawTree(): void {
        crc2.save();
        crc2.translate(40, 300);

        // Stamm
        crc2.beginPath();
        crc2.rect(-10, 0, 20, 50);
        crc2.closePath();

        let trunkColor: string = "#8B4513";
        crc2.fillStyle = trunkColor;
        crc2.fill();

        // Blätter
        crc2.beginPath();
        crc2.ellipse(0, -20, 35, 60, 0, 0, 2 * Math.PI);
        crc2.ellipse(0, -50, 30, 50, 0, 0, 2 * Math.PI);
        crc2.ellipse(0, -70, 25, 40, 0, 0, 2 * Math.PI);
        crc2.closePath();

        let leafColor: string = "green";
        crc2.fillStyle = leafColor;
        crc2.fill();

        crc2.restore();
    }

    function bush(_x: number, _y: number): void {
        crc2.save();
        crc2.translate(_x, _y);

        // Busch zeichnen
        crc2.beginPath();
        crc2.ellipse(30, 0, 10, 20, 0, Math.PI, 0, false);
        crc2.ellipse(65, 0, 35, 50, 0, Math.PI, 0, false);
        crc2.ellipse(80, 0, 35, 60, 0, Math.PI, 0, false);
        crc2.ellipse(100, 0, 35, 60, 0, Math.PI, 0, false);
        crc2.ellipse(120, 0, 30, 30, 0, Math.PI, 0, false);
        crc2.closePath();

        let bushColor: string = "green";
        crc2.fillStyle = bushColor;
        crc2.fill();

        crc2.restore();
    }

    function fillBackground(): void {
        let grassColor: string = "#90E162";
        crc2.fillStyle = grassColor;
        crc2.fillRect(0, 0, 600, 600);

        let skyColor: string = "#48BCE1";
        crc2.fillStyle = skyColor;
        crc2.fillRect(0, 0, 600, 250);
    }

    function sun(): void {
        let centerX: number = 500;
        let centerY: number = 100;
        let radius: number = 40;

        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        crc2.closePath();

        let circleColor: string = "yellow";
        crc2.fillStyle = circleColor;
        crc2.fill();

        let lineLength: number = 20;
        crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) {
            let angle: number = (i / 8) * (2 * Math.PI);
            let startX: number = centerX + radius * Math.cos(angle);
            let startY: number = centerY + radius * Math.sin(angle);
            let endX: number = startX + lineLength * Math.cos(angle);
            let endY: number = startY + lineLength * Math.sin(angle);
            crc2.beginPath();
            crc2.moveTo(startX, startY);
            crc2.lineTo(endX, endY);
            crc2.stroke();
            crc2.closePath();
        }
    }

    function lake(): void {
        let centerX: number = 430;
        let centerY: number = 410;
        let radiusX: number = 160;
        let radiusY: number = 90;

        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();

        let lakeColor: string = "#4676E0";
        crc2.fillStyle = lakeColor;
        crc2.fill();
    }

    function mountain(): void {
        crc2.beginPath();
        crc2.moveTo(200, 250);
        crc2.quadraticCurveTo(400, -40, 600, 250);
        crc2.closePath();

        let mountainColor: string = "#707070";
        crc2.fillStyle = mountainColor;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.quadraticCurveTo(150, 100, 370, 250);
        crc2.closePath();

        let mountainColorTwo: string = "gray";
        crc2.fillStyle = mountainColorTwo;
        crc2.fill();
    }

    function animate(): void {
        crc2.putImageData(background, 0, 0);

        for (let i = 0; i < clouds.length; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
        for (let i = 0; i < tails.length; i++) {
            tails[i].move();
            tails[i].draw();
        }
        for (let i = 0; i < ducks.length; i++) {
            ducks[i].move();
            ducks[i].draw();
        }
        for (let flamingo of flamingos) {
            flamingo.move();
            flamingo.draw();
        }
        for (let i = 0; i < ladybugs.length; i++) {
            ladybugs[i].move();
            ladybugs[i].draw();
        }
        for (let i = 0; i < insects.length; i++) {
            insects[i].move();
            insects[i].draw();
        }
    }
}
