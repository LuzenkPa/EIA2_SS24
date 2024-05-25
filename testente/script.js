"use strict";
var Testente;
(function (Testente) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let yellowDucks = [];
    let brownDucks = [];
    let bees = [];
    let background;
    let sunAngle = 0;
    class Duck {
        x;
        y;
        color;
        inPond;
        constructor(x, y, color, inPond) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.inPond = inPond;
        }
        move() {
            if (this.inPond) {
                // Gelbe Enten bewegen sich im Teich
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;
                if (Math.random() < 0.01) {
                    this.y += 30; // Taucht kurz ab
                }
                // Begrenzt die gelben Enten auf den Teichbereich
                let pondX = Testente.crc2.canvas.width / 2;
                let pondY = Testente.crc2.canvas.height * 0.7;
                let pondRadiusX = 200;
                let pondRadiusY = 75;
                if ((this.x - pondX) ** 2 / pondRadiusX ** 2 + (this.y - pondY) ** 2 / pondRadiusY ** 2 > 1) {
                    this.x = pondX;
                    this.y = pondY;
                }
            }
            else {
                // Braune Enten bewegen sich um den Teich herum
                this.x += Math.random() * 2 - 1;
                this.y += Math.random() * 2 - 1;
                // Begrenzt die braunen Enten auf den Bereich um den Teich herum
                let pondX = Testente.crc2.canvas.width / 2;
                let pondY = Testente.crc2.canvas.height * 0.7;
                let pondRadiusX = 250;
                let pondRadiusY = 100;
                if ((this.x - pondX) ** 2 / pondRadiusX ** 2 + (this.y - pondY) ** 2 / pondRadiusY ** 2 < 1) {
                    this.x = Testente.crc2.canvas.width / 2 - pondRadiusX - 10;
                    this.y = pondY + pondRadiusY + 10;
                }
            }
        }
        draw() {
            // Füße der braunen Ente
            if (this.color === "#8B4513") {
                Testente.crc2.fillStyle = "#FFA500";
                Testente.crc2.beginPath();
                Testente.crc2.moveTo(this.x - 5, this.y + 12);
                Testente.crc2.lineTo(this.x - 10, this.y + 18);
                Testente.crc2.lineTo(this.x + 10, this.y + 18);
                Testente.crc2.lineTo(this.x + 5, this.y + 12);
                Testente.crc2.fill();
            }
            // Körper der Ente
            Testente.crc2.fillStyle = this.color;
            Testente.crc2.beginPath();
            Testente.crc2.ellipse(this.x, this.y, 20, 12, Math.PI / 2, 0, Math.PI * 2);
            Testente.crc2.fill();
            // Kopf der Ente
            Testente.crc2.beginPath();
            Testente.crc2.arc(this.x + 25, this.y - 10, 10, 0, Math.PI * 2);
            Testente.crc2.fill();
            // Schnabel der Ente
            Testente.crc2.fillStyle = "#FFA500"; // Orange
            Testente.crc2.beginPath();
            Testente.crc2.moveTo(this.x + 35, this.y - 10);
            Testente.crc2.lineTo(this.x + 45, this.y - 5);
            Testente.crc2.lineTo(this.x + 35, this.y);
            Testente.crc2.closePath();
            Testente.crc2.fill();
            // Flügel der Ente
            Testente.crc2.fillStyle = "#CCCCCC"; // Hellgrau für den Flügel
            Testente.crc2.beginPath();
            Testente.crc2.ellipse(this.x - 10, this.y - 5, 10, 5, Math.PI / 4, 0, Math.PI * 2);
            Testente.crc2.fill();
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
                this.x = Testente.crc2.canvas.width;
            if (this.y < 0)
                this.y = Testente.crc2.canvas.height;
            if (this.x > Testente.crc2.canvas.width)
                this.x = 0;
            if (this.y > Testente.crc2.canvas.height)
                this.y = 0;
        }
        draw() {
            Testente.crc2.fillStyle = "#FFD700"; // Gelb
            Testente.crc2.beginPath();
            Testente.crc2.arc(this.x, this.y, 3, 0, Math.PI * 2);
            Testente.crc2.fill();
            Testente.crc2.fillStyle = "#000000"; // Schwarz
            Testente.crc2.beginPath();
            Testente.crc2.arc(this.x - 2, this.y - 2, 1, 0, Math.PI * 2);
            Testente.crc2.fill();
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
            if (this.x > Testente.crc2.canvas.width) {
                this.x = -50;
            }
        }
        draw() {
            Testente.crc2.fillStyle = "#FFFFFF"; // Weiß
            Testente.crc2.beginPath();
            Testente.crc2.arc(this.x, this.y, 30, Math.PI * 0.5, Math.PI * 1.5);
            Testente.crc2.arc(this.x + 30, this.y - 20, 30 * 0.6, Math.PI * 1, Math.PI * 2);
            Testente.crc2.arc(this.x + 60, this.y, 30, Math.PI * 1.5, Math.PI * 0.5);
            Testente.crc2.closePath();
            Testente.crc2.fill();
        }
    }
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Testente.crc2 = canvas.getContext("2d");
        drawBackground();
        background = Testente.crc2.getImageData(0, 0, Testente.crc2.canvas.width, Testente.crc2.canvas.height);
        // Gelbe Enten im Teich generieren
        for (let i = 0; i < 3; i++) {
            let duck = new Duck(350 + Math.random() * 50, 400 + Math.random() * 50, "#FFFF00", true);
            yellowDucks.push(duck);
        }
        // Braune Enten draußen generieren
        for (let i = 0; i < 3; i++) {
            let duck = new Duck(350 + Math.random() * 50, 550, "#8B4513", false);
            brownDucks.push(duck);
        }
        // Wolken generieren
        for (let i = 0; i < 5; i++) {
            let cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        // Bienen generieren
        for (let i = 0; i < 5; i++) {
            let bee = new Bee(Math.random() * Testente.crc2.canvas.width, Math.random() * Testente.crc2.canvas.height);
            bees.push(bee);
        }
        // Animation starten
        window.setInterval(update, 20);
    }
    function drawBackground() {
        // Wiese
        Testente.crc2.fillStyle = "#90E162";
        Testente.crc2.fillRect(0, 0, Testente.crc2.canvas.width, Testente.crc2.canvas.height);
        // Himmel
        Testente.crc2.fillStyle = "#48BCE1";
        Testente.crc2.fillRect(0, 0, Testente.crc2.canvas.width, Testente.crc2.canvas.height * 0.4);
        // Sonne
        Testente.crc2.save();
        Testente.crc2.translate(50, 50);
        drawSun();
        Testente.crc2.restore();
        // See
        Testente.crc2.fillStyle = "#4676E0";
        Testente.crc2.beginPath();
        Testente.crc2.ellipse(Testente.crc2.canvas.width / 2, Testente.crc2.canvas.height * 0.7, 150, 60, 0, 0, 2 * Math.PI);
        Testente.crc2.fill();
        Testente.crc2.closePath();
        // Baum links vom Teich
        drawTree(150, Testente.crc2.canvas.height * 0.7);
    }
    function drawTree(x, y) {
        Testente.crc2.save();
        Testente.crc2.translate(x, y);
        // Stamm
        Testente.crc2.fillStyle = "#8B4513";
        Testente.crc2.fillRect(-10, 0, 20, 50);
        // Blätter
        Testente.crc2.fillStyle = "green";
        Testente.crc2.beginPath();
        Testente.crc2.ellipse(0, -20, 35, 60, 0, 0, 2 * Math.PI);
        Testente.crc2.ellipse(0, -50, 30, 50, 0, 0, 2 * Math.PI);
        Testente.crc2.ellipse(0, -70, 25, 40, 0, 0, 2 * Math.PI);
        Testente.crc2.fill();
        Testente.crc2.closePath();
        Testente.crc2.restore();
    }
    function drawSun() {
        Testente.crc2.save();
        Testente.crc2.translate(0, 0);
        // Sonnenkreis
        Testente.crc2.fillStyle = "yellow";
        Testente.crc2.beginPath();
        Testente.crc2.arc(0, 0, 40, 0, Math.PI * 2);
        Testente.crc2.fill();
        Testente.crc2.closePath();
        // Sonnenstrahlen
        Testente.crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) {
            let angle = (i / 8) * (2 * Math.PI);
            let startX = 40 * Math.cos(angle);
            let startY = 40 * Math.sin(angle);
            let endX = (40 + 20) * Math.cos(angle);
            let endY = (40 + 20) * Math.sin(angle);
            Testente.crc2.beginPath();
            Testente.crc2.moveTo(startX, startY);
            Testente.crc2.lineTo(endX, endY);
            Testente.crc2.stroke();
        }
        Testente.crc2.restore();
    }
    function update() {
        Testente.crc2.putImageData(background, 0, 0);
        // Sonne drehen
        sunAngle += 0.01; // Drehgeschwindigkeit
        Testente.crc2.save();
        Testente.crc2.translate(50, 50); // Verschieben zum Mittelpunkt der Sonne
        Testente.crc2.rotate(sunAngle);
        drawSun();
        Testente.crc2.restore();
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
})(Testente || (Testente = {}));
//# sourceMappingURL=script.js.map