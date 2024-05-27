// main.ts

/// <reference path="bee.ts" />
/// <reference path="duck.ts" />

namespace Testente {
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    let clouds: Cloud[] = [];
    let yellowDucks: Duck[] = [];
    let brownDucks: Duck[] = [];
    let bees: Bee[] = [];
    let background: ImageData;
    let sunAngle: number = 0;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas) return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        // Gelbe Enten im Teich generieren
        for (let i: number = 0; i < 4; i++) {
            let duck: Duck = new Duck(350 + i * 50, 400, "#FFFF00", true, 0.1);
            yellowDucks.push(duck);
        }

        // Braune Enten draußen generieren
        let brownDuck1: Duck = new Duck(200, 520, "#8B4513", false, 1);
        brownDucks.push(brownDuck1);

        let brownDuck2: Duck = new Duck(-50, 450, "#A0522D", false, 1.5);
        brownDucks.push(brownDuck2);

        let brownDuck3: Duck = new Duck(700, 400, "#8B4513", false, 1);
        brownDucks.push(brownDuck3);

        // Wolken generieren
        for (let i: number = 0; i < 7; i++) {
            let cloud: Cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }

        // Bienen generieren
        for (let i: number = 0; i < 3; i++) {
            let bee: Bee = new Bee(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
            bees.push(bee);
        }

        // Animation starten
        setInterval(update, 80);
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

    function drawSun(): void {
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

    function update(): void {
        crc2.putImageData(background, 0, 0);

        // Sonne drehen
        sunAngle += 0.001; // Drehgeschwindigkeit
        crc2.save();
        crc2.translate(50, 50); // Verschieben zum Mittelpunkt der Sonne
        crc2.rotate(sunAngle);
        drawSun();
        crc2.restore();

        // Objekte aktualisieren und zeichnen
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
