"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let ducks = [];
    let insects = [];
    let background;
    class Duck {
        x;
        y;
        radius;
        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }
        move() {
            this.x += Math.random() * 4 - 2; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 2 - 1; // Zufällige Bewegung nach oben und unten
            if (Math.random() < 0.01) {
                this.y += 30; // Taucht kurz ab
            }
        }
        draw() {
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
                this.x = crc2.canvas.width;
            if (this.y < 0)
                this.y = crc2.canvas.height;
            if (this.x > crc2.canvas.width)
                this.x = 0;
            if (this.y > crc2.canvas.height)
                this.y = 0;
        }
        draw() {
            crc2.fillStyle = "#000000"; // Schwarz
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            crc2.fill();
        }
    }
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        // Erstellen der Enten
        for (let i = 0; i < 10; i++) {
            let duck = new Duck(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height * 0.7 + crc2.canvas.height * 0.3, 20);
            ducks.push(duck);
        }
        // Erstellen der Insekten
        for (let i = 0; i < 10; i++) {
            let insect = new Insect(Math.random() * crc2.canvas.width, Math.random() * crc2.canvas.height);
            insects.push(insect);
        }
        window.setInterval(update, 20);
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0.2, "#87CEEB"); // Himmelblau
        gradient.addColorStop(0.8, "#F5F5DC"); // Sandbeige
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        drawMountains();
        drawPond();
        drawSun();
        drawCloud(200, 100, 30);
        drawCloud(400, 50, 40);
    }
    function drawMountains() {
        crc2.fillStyle = "#D3D3D3"; // Leichtes Grau
        crc2.beginPath();
        crc2.moveTo(800, 100); // Startpunkt oben rechts
        crc2.lineTo(600, 400); // Linker Punkt
        crc2.lineTo(1000, 400); // Rechter Punkt
        crc2.closePath();
        crc2.fill();
    }
    function drawPond() {
        crc2.fillStyle = "#6495ED"; // Blau
        crc2.beginPath();
        crc2.ellipse(crc2.canvas.width / 2, crc2.canvas.height * 0.7, 400, 150, 0, 0, Math.PI * 2);
        crc2.fill();
    }
    function drawSun() {
        crc2.fillStyle = "#FFFF00"; // Gelb
        crc2.beginPath();
        crc2.arc(50, 50, 40, 0, Math.PI * 2);
        crc2.fill();
    }
    function drawCloud(x, y, radius) {
        crc2.fillStyle = "#FFFFFF"; // Weiß
        crc2.beginPath();
        crc2.arc(x, y, radius, Math.PI * 0.5, Math.PI * 1.5);
        crc2.arc(x + radius * 1.2, y - radius * 0.8, radius * 0.6, Math.PI * 1, Math.PI * 2);
        crc2.arc(x + radius * 2.4, y, radius, Math.PI * 1.5, Math.PI * 0.5);
        crc2.closePath();
        crc2.fill();
    }
    function update() {
        crc2.putImageData(background, 0, 0);
        for (let duck of ducks) {
            duck.move();
            duck.draw();
        }
        for (let insect of insects) {
            insect.move();
            insect.draw();
        }
    }
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=script.js.map