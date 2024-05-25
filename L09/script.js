"use strict";
var Ententeich;
(function (Ententeich) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let ducks = [];
    let tails = [];
    let flamingos = [];
    let ladybugs = [];
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
            Ententeich.crc2.fillStyle = "#FFA500"; // Orange
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            Ententeich.crc2.fill();
            // Kopf der Ente
            Ententeich.crc2.fillStyle = "#FFA500"; // Orange
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
    class Tail {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += Math.random() * 2 - 1; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 2 - 1; // Zufällige Bewegung nach oben und unten
        }
        draw() {
            Ententeich.crc2.fillStyle = "#FFA500"; // Orange
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2);
            Ententeich.crc2.fill();
        }
    }
    class Flamingo {
        x;
        y;
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        move() {
            this.x += Math.random() * 2 - 1; // Zufällige Bewegung nach links und rechts
            this.y += Math.random() * 2 - 1; // Zufällige Bewegung nach oben und unten
        }
        draw() {
            Ententeich.crc2.fillStyle = "#FFC0CB"; // Pink
            Ententeich.crc2.beginPath();
            Ententeich.crc2.ellipse(this.x, this.y, 15, 30, Math.PI / 4, 0, Math.PI * 2);
            Ententeich.crc2.fill();
        }
    }
    class Ladybug {
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
            Ententeich.crc2.fillStyle = "#FF0000"; // Rot
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 5, 0, Math.PI * 2);
            Ententeich.crc2.fill();
            Ententeich.crc2.fillStyle = "#000000"; // Schwarz
            Ententeich.crc2.beginPath();
            Ententeich.crc2.arc(this.x, this.y, 2, 0, Math.PI * 2);
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
        // Ladybugs generieren
        for (let i = 0; i < 5; i++) {
            let randomX = Math.random() * canvas.width;
            let randomY = Math.random() * canvas.height;
            let ladybug = new Ladybug(randomX, randomY);
            ladybugs.push(ladybug);
        }
        // Clouds random auf x und y zeichnen
        for (let i = 0; i < 5; i++) {
            let cloud = new Cloud(Math.random() * 500, Math.random() * 200);
            clouds.push(cloud);
        }
        // Tails generieren
        for (let i = 0; i < 3; i++) {
            let tail = new Tail(350 + Math.random() * 50, 330 + Math.random() * 80);
            tails.push(tail);
        }
        // Ducks generieren
        for (let i = 0; i < 3; i++) {
            let duck = new Duck(350 + Math.random() * 50, 400 + Math.random() * 50, 20);
            ducks.push(duck);
        }
        // Flamingos generieren
        for (let i = 0; i < 4; i++) {
            let randomX = 10 + Math.random() * 250;
            let randomY = 300 + Math.random() * 250;
            let flamingo = new Flamingo(randomX, randomY);
            flamingos.push(flamingo);
        }
        // Insekten generieren
        for (let i = 0; i < 10; i++) {
            let insect = new Insect(Math.random() * Ententeich.crc2.canvas.width, Math.random() * Ententeich.crc2.canvas.height);
            insects.push(insect);
        }
        setInterval(animate, 20);
    }
    function drawBackground() {
        fillBackground();
        sun();
        lake();
        mountain();
        bush(100, 320);
        bush(300, 300);
        bush(460, 320);
        drawTree();
    }
    function drawTree() {
        Ententeich.crc2.save();
        Ententeich.crc2.translate(40, 300);
        // Stamm
        Ententeich.crc2.beginPath();
        Ententeich.crc2.rect(-10, 0, 20, 50);
        Ententeich.crc2.closePath();
        let trunkColor = "#8B4513";
        Ententeich.crc2.fillStyle = trunkColor;
        Ententeich.crc2.fill();
        // Blätter
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(0, -20, 35, 60, 0, 0, 2 * Math.PI);
        Ententeich.crc2.ellipse(0, -50, 30, 50, 0, 0, 2 * Math.PI);
        Ententeich.crc2.ellipse(0, -70, 25, 40, 0, 0, 2 * Math.PI);
        Ententeich.crc2.closePath();
        let leafColor = "green";
        Ententeich.crc2.fillStyle = leafColor;
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function bush(_x, _y) {
        Ententeich.crc2.save();
        Ententeich.crc2.translate(_x, _y);
        // Busch zeichnen
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(30, 0, 10, 20, 0, Math.PI, 0, false);
        Ententeich.crc2.ellipse(65, 0, 35, 50, 0, Math.PI, 0, false);
        Ententeich.crc2.ellipse(80, 0, 35, 60, 0, Math.PI, 0, false);
        Ententeich.crc2.ellipse(100, 0, 35, 60, 0, Math.PI, 0, false);
        Ententeich.crc2.ellipse(120, 0, 30, 30, 0, Math.PI, 0, false);
        Ententeich.crc2.closePath();
        let bushColor = "green";
        Ententeich.crc2.fillStyle = bushColor;
        Ententeich.crc2.fill();
        Ententeich.crc2.restore();
    }
    function fillBackground() {
        let grassColor = "#90E162";
        Ententeich.crc2.fillStyle = grassColor;
        Ententeich.crc2.fillRect(0, 0, 600, 600);
        let skyColor = "#48BCE1";
        Ententeich.crc2.fillStyle = skyColor;
        Ententeich.crc2.fillRect(0, 0, 600, 250);
    }
    function sun() {
        let centerX = 500;
        let centerY = 100;
        let radius = 40;
        Ententeich.crc2.beginPath();
        Ententeich.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        Ententeich.crc2.closePath();
        let circleColor = "yellow";
        Ententeich.crc2.fillStyle = circleColor;
        Ententeich.crc2.fill();
        let lineLength = 20;
        Ententeich.crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) {
            let angle = (i / 8) * (2 * Math.PI);
            let startX = centerX + radius * Math.cos(angle);
            let startY = centerY + radius * Math.sin(angle);
            let endX = startX + lineLength * Math.cos(angle);
            let endY = startY + lineLength * Math.sin(angle);
            Ententeich.crc2.beginPath();
            Ententeich.crc2.moveTo(startX, startY);
            Ententeich.crc2.lineTo(endX, endY);
            Ententeich.crc2.stroke();
            Ententeich.crc2.closePath();
        }
    }
    function lake() {
        let centerX = 430;
        let centerY = 410;
        let radiusX = 160;
        let radiusY = 90;
        Ententeich.crc2.beginPath();
        Ententeich.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        Ententeich.crc2.closePath();
        let lakeColor = "#4676E0";
        Ententeich.crc2.fillStyle = lakeColor;
        Ententeich.crc2.fill();
    }
    function mountain() {
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(200, 250);
        Ententeich.crc2.quadraticCurveTo(400, -40, 600, 250);
        Ententeich.crc2.closePath();
        let mountainColor = "#707070";
        Ententeich.crc2.fillStyle = mountainColor;
        Ententeich.crc2.fill();
        Ententeich.crc2.beginPath();
        Ententeich.crc2.moveTo(0, 250);
        Ententeich.crc2.quadraticCurveTo(150, 100, 370, 250);
        Ententeich.crc2.closePath();
        let mountainColorTwo = "gray";
        Ententeich.crc2.fillStyle = mountainColorTwo;
        Ententeich.crc2.fill();
    }
    function animate() {
        Ententeich.crc2.putImageData(background, 0, 0);
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
})(Ententeich || (Ententeich = {}));
//# sourceMappingURL=script.js.map