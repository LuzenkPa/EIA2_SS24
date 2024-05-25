"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let yellowDucks = [];
    let brownDucks = [];
    let bees = [];
    let insects = [];
    let background;
    let sunAngle = 0;
    class Duck {
        x;
        y;
        radius;
        color;
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }
        move() {
            if (this.color === "#FFFF00") {
                // Gelbe Enten bewegen sich im Teich
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;
                if (Math.random() < 0.01) {
                    this.y += 30; // Taucht kurz ab
                }
            }
            else {
                // Braune Enten bewegen sich im Vordergrund vor dem Teich
                this.x += Math.random() * 4 - 2;
                this.y += Math.random() * 2; // Nur nach unten bewegen
            }
        }
        draw() {
            Ententeich.crc2.fillStyle = this.color;
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Ententeich.crc2.fill();
            // Kopf der Ente
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x + 25, this.y - 10, this.radius / 3, 0, Math.PI * 2);
            Ententeich.crc2.fill();
            // Schnabel der Ente
            Ententeich.crc2.fillStyle = "#FFA500"; // Orange
            Ententeich.crc2.beginPath();
            Ententeich.crc2.moveTo(this.x + 35, this.y - 10);
            Ententeich.crc2.lineTo(this.x + 50, this.y - 10);
            Ententeich.crc2.lineTo(this.x + 35, this.y);
            Ententeich.crc2.closePath();
            Ententeich.crc2.fill();
        }
    }
    class Bee {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += Math.random() * 4 - 2; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 4 - 2; // Zufällige Bewegung nach oben und unten
            if (this.x < 0)
                this.x = Ententeich.crc2.canvas.width;
            if (this.y < 0)
                this.y = Ententeich.crc2.canvas.height;
            if (this.x > Ententeich.crc2.canvas.width)
                this.x = 0;
            if (this.y > Ententeich.crc2.canvas.height)
                this.y = 0;
        }
        draw() {
            Ententeich.crc2.fillStyle = "#FFD700"; // Gelb
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            Ententeich.crc2.fill();
            Ententeich.crc2.fillStyle = "#000000"; // Schwarz
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x - 2, this.y - 2, 1, 0, Math.PI * 2);
            Ententeich.crc2.fill();
        }
    }
    class Cloud {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += 1;
            if (this.x > Ententeich.crc2.canvas.width) {
                this.x = -50;
            }
        }
        draw() {
            Ententeich.crc2.fillStyle = "#FFFFFF"; // Weiß
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 30, Math.PI * 0.5, Math.PI * 1.5);
            Ententeich.crc2.arc(this.x + 30, this.y - 20, 30 * 0.6, Math.PI * 1, Math.PI * 2);
            Ententeich.crc2.arc(this.x + 60, this.y, 30, Math.PI * 1.5, Math.PI * 0.5);
            Ententeich.crc2.closePath();
            Ententeich.crc2.fill();
        }
    }
    class Insect {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += Math.random() * 4 - 2; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 4 - 2; // Zufällige Bewegung nach oben und unten
            if (this.x < 0)
                this.x = Ententeich.crc2.canvas.width;
            if (this.y < 0)
                this.y = Ententeich.crc2.canvas.height;
            if (this.x > Ententeich.crc2.canvas.width)
                this.x = 0;
            if (this.y > Ententeich.crc2.canvas.height)
                this.y = 0;
        }
        draw() {
            Ententeich.crc2.fillStyle = "#000000"; // Schwarz
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            Ententeich.crc2.fill();
        }
    }
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Ententeich.crc2 = canvas.getContext("2d");
        drawBackground();
        background = Ententeich.crc2.getImageData(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
        // Gelbe Enten im Teich generieren
        for (let i = 0; i < 3; i++) {
            let duck = new Duck(350 + Math.random() * 50, 400 + Math.random() * 50, 20, "#FFFF00");
            yellowDucks.push(duck);
        }
        // Braune Enten draußen generieren
        for (let i = 0; i < 3; i++) {
            let duck = new Duck(350 + Math.random() * 50, 550, 20, "#8B4513");
            brownDucks.push(duck);
        }
        // Wolken generieren
        for (let i = 0; i < 5; i++) {
            let cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        // Bienen generieren
        for (let i = 0; i < 5; i++) {
            let bee = new Bee(Math.random() * Ententeich.crc2.canvas.width, Math.random() * Ententeich.crc2.canvas.height);
            bees.push(bee);
        }
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = Ententeich.crc2.createLinearGradient(0, 0, 0, Ententeich.crc2.canvas.height);
        gradient.addColorStop(0.2, "#87CEEB"); // Himmelblau
        gradient.addColorStop(0.8, "#F5F5DC"); // Sandbeige
        Ententeich.crc2.fillStyle = gradient;
        Ententeich.crc2.fillRect(0, 0, Ententeich.crc2.canvas.width, Ententeich.crc2.canvas.height);
        drawMountains();
        drawPond();
        drawSun();
    }
    function drawMountains() {
        Ententeich.crc2.fillStyle = "#D3D3D3"; // Leichtes Grau
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(800, 100); // Startpunkt oben rechts
        Ententeich.crc2.lineTo(600, 400); // Linker Punkt
        Ententeich.crc2.lineTo(1000, 400); // Rechter Punkt
        Ententeich.crc2.closePath();
        Ententeich.crc2.fill();
    }
    function drawPond() {
        Ententeich.crc2.fillStyle = "#6495ED"; // Blau
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(Ententeich.crc2.canvas.width / 2, Ententeich.crc2.canvas.height * 0.7, 400, 150, 0, 0, Math.PI * 2);
        Ententeich.crc2.fill();
    }
    function drawSun() {
        Ententeich.crc2.save();
        Ententeich.crc2.translate(50, 50); // Verschieben zum Mittelpunkt der Sonne
        // Sonnenkreis
        Ententeich.crc2.fillStyle = "yellow";
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(0, 0, 40, 0, Math.PI * 2);
        Ententeich.crc2.fill();
        Ententeich.crc2.closePath();
        // Sonnenstrahlen
        Ententeich.crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) {
            let angle = (i / 8) * (2 * Math.PI);
            let startX = 40 * Math.cos(angle);
            let startY = 40 * Math.sin(angle);
            let endX = (40 + 20) * Math.cos(angle);
            let endY = (40 + 20) * Math.sin(angle);
            Ententeich.crc2.beginPath();
            Ententeich.crc2.moveTo(startX, startY);
            Ententeich.crc2.lineTo(endX, endY);
            Ententeich.crc2.stroke();
        }
        Ententeich.crc2.restore();
    }
    function update() {
        Ententeich.crc2.putImageData(background, 0, 0);
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
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=script.js.map